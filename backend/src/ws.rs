use crate::{cache::spec::Cache, images, models::Image, storage::spec::Storage};
use actix_web::{
    middleware::Logger,
    web::{self, Data},
    App, Error, HttpResponse, HttpServer,
};
use std::{
    io::{self, copy},
    sync::Arc,
};

async fn get_list<S, C>(storage: Data<S>, cache: Data<C>) -> Result<HttpResponse, Error>
where
    S: Storage + Sync + Send + 'static,
    C: Cache<Image> + Sync + Send + 'static,
{
    let res = images::list(storage.into_inner(), cache.into_inner())
        .map_err(actix_web::error::ErrorInternalServerError)?;

    Ok(HttpResponse::Ok().json(res))
}

async fn get_image<S>(storage: Data<S>, id: web::Path<String>) -> Result<HttpResponse, Error>
where
    S: Storage + Sync + Send + 'static,
{
    let mut res = images::data(storage.into_inner(), id.as_str()).map_err(|e| {
        if e.is::<io::Error>()
            && e.downcast_ref::<io::Error>().unwrap().kind() == io::ErrorKind::NotFound
        {
            actix_web::error::ErrorNotFound(e)
        } else {
            actix_web::error::ErrorInternalServerError(e)
        }
    })?;

    let mut v = Vec::<u8>::new();
    copy(&mut res, &mut v)?;
    Ok(HttpResponse::Ok()
        .append_header(("Cache-Control", "public, max-age=604800, immutable"))
        .body(v))
}

pub async fn run<S, C>(addr: &str, port: u16, storage: Arc<S>, cache: Arc<C>) -> std::io::Result<()>
where
    S: Storage + Sync + Send + 'static,
    C: Cache<Image> + Sync + Send + 'static,
{
    HttpServer::new(move || {
        App::new()
            .route("/images", web::get().to(get_list::<S, C>))
            .route("/images/{id}", web::get().to(get_image::<S>))
            .wrap(Logger::default())
            .app_data(Data::from(cache.clone()))
            .app_data(Data::from(storage.clone()))
    })
    .bind((addr, port))?
    .run()
    .await
}

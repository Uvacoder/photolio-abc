mod cache;
mod images;
mod models;
mod storage;
mod ws;

use std::sync::Arc;

use cache::inmemory::InMemory;
use log::{debug, error, info};
use models::Image;
use storage::local::Local;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    env_logger::init();

    let c = Arc::new(InMemory::<Image>::new());
    let s = Arc::new(Local::new(String::from("../data")));

    // debug!(
    //     "test {:#?}",
    //     images::details(
    //         s.clone(),
    //         &mut c.clone(),
    //         String::from("DSC03444.jpg").as_str()
    //     )
    // );
    // debug!(
    //     "test {:#?}",
    //     images::details(
    //         s.clone(),
    //         &mut c.clone(),
    //         String::from("DSC03444.jpg").as_str()
    //     )
    // );

    // images::list(s.clone(), &mut c.clone()).unwrap();
    // let res = images::list(s.clone(), &mut c.clone()).unwrap();
    // for r in res {
    //     match r {
    //         Ok(i) => debug!("Image received: {:#?}", i),
    //         Err(e) => error!("Error decoding image: {e}"),
    //     }
    // }

    images::thumbnail(s.clone(), "DSC03444_LR.jpg", 100, 0).expect("failed");

    info!("Starting web server on localhost:8080 ...");
    ws::run("localhost", 8080).await
}

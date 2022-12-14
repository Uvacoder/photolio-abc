use std::{error::Error, fmt};

use actix_web::http::StatusCode;

#[derive(Debug)]
pub struct StatusError {
    inner: Box<dyn Error>,
    status: StatusCode,
}

impl fmt::Display for StatusError {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        fmt::Display::fmt(&self.inner, f)
    }
}

impl Error for StatusError {}

impl StatusError {
    pub fn wrap(err: Box<dyn Error>, status_code: StatusCode) -> Self {
        StatusError {
            inner: err,
            status: status_code,
        }
    }

    pub fn status(&self) -> StatusCode {
        self.status
    }
}

#[derive(Debug)]
pub struct StringError(pub Box<dyn Error + Send + Sync>);

impl Clone for StringError {
    fn clone(&self) -> Self {
        Self(self.0.to_string().into())
    }
}

impl fmt::Display for StringError {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        self.0.fmt(f)
    }
}

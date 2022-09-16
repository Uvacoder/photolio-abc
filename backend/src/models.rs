use chrono::{DateTime, Utc};

#[derive(Debug, Clone)]
pub struct Dimensions {
    pub width: u32,
    pub height: u32,
}

#[derive(Debug, Clone)]
pub struct BlurHash {
    pub hash: String,
    pub components: Dimensions,
}

#[derive(Debug, Clone)]
pub struct Exif {
    pub fstop: Option<String>,
    pub iso: Option<String>,
    pub exposuretime: Option<String>,
    pub taken: Option<DateTime<Utc>>,
    pub lensmodel: Option<String>,
    pub lensmake: Option<String>,
    pub bodymodel: Option<String>,
    pub bodymake: Option<String>,
}

#[derive(Debug, Clone)]
pub struct Image {
    pub id: String,
    pub name: String,
    pub timestamp: DateTime<Utc>,
    pub blurhash: BlurHash,
    pub dimensions: Dimensions,
    pub exif: Exif,
}

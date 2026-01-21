export const CONTENT_TYPE_MAP: Record<string, string> = {
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    png: "image/png",
    gif: "image/gif",
    webp: "image/webp",
    svg: "image/svg+xml",
    bmp: "image/bmp",
    ico: "image/x-icon",
};

export const ALLOWED_EXTENSIONS = Object.keys(CONTENT_TYPE_MAP);

export const DEFAULT_MAX_FILE_SIZE = 10485760;
export const DEFAULT_MAX_FILE_SIZE_MB = 10;

export const FILENAME_CHARS = "abcdefghijklmnopqrstuvwxyz0123456789";
export const FILENAME_MIN_LENGTH = 5;
export const FILENAME_MAX_LENGTH = 12;

export const CACHE_CONTROL_IMMUTABLE = "public, max-age=31536000, immutable";

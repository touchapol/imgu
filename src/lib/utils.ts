import {
    CONTENT_TYPE_MAP,
    FILENAME_CHARS,
    FILENAME_MIN_LENGTH,
    FILENAME_MAX_LENGTH,
} from "./constants";

export function generateRandomFilename(extension: string): string {
    const length =
        Math.floor(Math.random() * (FILENAME_MAX_LENGTH - FILENAME_MIN_LENGTH + 1)) +
        FILENAME_MIN_LENGTH;

    let filename = "";
    for (let i = 0; i < length; i++) {
        filename += FILENAME_CHARS.charAt(
            Math.floor(Math.random() * FILENAME_CHARS.length)
        );
    }

    return `${filename}.${extension}`;
}

export function getContentType(filename: string): string {
    const ext = filename.split(".").pop()?.toLowerCase() ?? "";
    return CONTENT_TYPE_MAP[ext] ?? "application/octet-stream";
}

export function isValidFilename(filename: string): boolean {
    return /^[a-z0-9]+\.[a-z]+$/i.test(filename);
}

export function getFileExtension(filename: string): string {
    return filename.split(".").pop() ?? "jpg";
}

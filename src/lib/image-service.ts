import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import { join } from "path";
import { existsSync } from "fs";
import { getContentType, isValidFilename } from "./utils";
import { CACHE_CONTROL_IMMUTABLE } from "./constants";

export async function serveImage(filename: string): Promise<NextResponse> {
    if (!isValidFilename(filename)) {
        return new NextResponse("Invalid filename", { status: 400 });
    }

    const filepath = join(process.cwd(), "public", "uploads", filename);
    if (!existsSync(filepath)) {
        return new NextResponse("File not found", { status: 404 });
    }

    try {
        const file = await readFile(filepath);
        const contentType = getContentType(filename);
        return new NextResponse(new Uint8Array(file), {
            headers: {
                "Content-Type": contentType,
                "Cache-Control": CACHE_CONTROL_IMMUTABLE,
            },
        });
    } catch {
        return new NextResponse("Error serving image", { status: 500 });
    }
}

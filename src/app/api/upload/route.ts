import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import { existsSync } from "fs";
import { join } from "path";
import { generateRandomFilename, getFileExtension } from "@/lib/utils";
import { DEFAULT_MAX_FILE_SIZE, DEFAULT_MAX_FILE_SIZE_MB } from "@/lib/constants";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    if (!file.type.startsWith("image/")) {
      return NextResponse.json({ error: "File must be an image" }, { status: 400 });
    }

    const maxFileSize = parseInt(process.env.MAX_FILE_SIZE || String(DEFAULT_MAX_FILE_SIZE));
    const maxFileSizeMB = parseInt(process.env.MAX_FILE_SIZE_MB || String(DEFAULT_MAX_FILE_SIZE_MB));

    if (file.size > maxFileSize) {
      return NextResponse.json(
        { error: `File size exceeds ${maxFileSizeMB}MB limit` },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const extension = getFileExtension(file.name);

    let filename = generateRandomFilename(extension);
    let filepath = join(process.cwd(), "public", "uploads", filename);

    while (existsSync(filepath)) {
      filename = generateRandomFilename(extension);
      filepath = join(process.cwd(), "public", "uploads", filename);
    }

    await writeFile(filepath, buffer);

    const baseUrl = process.env.BASE_URL || request.nextUrl.origin;
    const url = `${baseUrl}/img/${filename}`;

    return NextResponse.json({ url });
  } catch {
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
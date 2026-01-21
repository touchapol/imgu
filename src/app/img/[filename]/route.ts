import { NextRequest } from "next/server";
import { serveImage } from "@/lib/image-service";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ filename: string }> }
) {
  const { filename } = await params;
  return serveImage(filename);
}
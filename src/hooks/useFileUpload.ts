"use client";

import { useState, useCallback } from "react";

interface UseFileUploadResult {
    uploading: boolean;
    uploadedUrl: string | null;
    error: string | null;
    dragActive: boolean;
    handleFile: (file: File) => Promise<void>;
    setDragActive: (active: boolean) => void;
    reset: () => void;
    clearError: () => void;
}

export function useFileUpload(): UseFileUploadResult {
    const [uploading, setUploading] = useState(false);
    const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [dragActive, setDragActive] = useState(false);

    const handleFile = useCallback(async (file: File) => {
        if (!file.type.startsWith("image/")) {
            setError("กรุณาเลือกไฟล์รูปภาพเท่านั้น");
            return;
        }
        setUploading(true);
        setError(null);
        setUploadedUrl(null);

        try {
            const formData = new FormData();
            formData.append("file", file);
            const response = await fetch("/api/upload", {
                method: "POST",
                body: formData,
            });
            if (!response.ok) {
                throw new Error("Upload failed");
            }
            const data = await response.json();
            setUploadedUrl(data.url);
        } catch {
            setError("การอัพโหลดล้มเหลว กรุณาลองใหม่อีกครั้ง");
        } finally {
            setUploading(false);
        }
    }, []);

    const reset = useCallback(() => {
        setUploadedUrl(null);
        setError(null);
    }, []);

    const clearError = useCallback(() => {
        setError(null);
    }, []);

    return {
        uploading,
        uploadedUrl,
        error,
        dragActive,
        handleFile,
        setDragActive,
        reset,
        clearError,
    };
}

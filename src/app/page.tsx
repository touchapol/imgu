"use client";

import { useEffect, useState } from "react";
import { useFileUpload } from "@/hooks/useFileUpload";
import { UploadZone } from "@/components/UploadZone";
import { LoadingState } from "@/components/LoadingState";
import { SuccessState } from "@/components/SuccessState";
import { ErrorState } from "@/components/ErrorState";
import { UploadIcon } from "@/components/icons";

export default function Page() {
  const [currentDomain, setCurrentDomain] = useState("");
  const {
    uploading,
    uploadedUrl,
    error,
    dragActive,
    handleFile,
    setDragActive,
    reset,
    clearError,
  } = useFileUpload();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentDomain(window.location.origin);
    }
  }, []);

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 transition-all duration-200 flex-col p-4 gap-6 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="text-center text-white p-8 max-w-2xl w-full relative z-10">
        <div className="mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-2xl">
            <UploadIcon className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold mb-4 tracking-tight bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            อัพโหลดรูปภาพ
          </h1>
          <p className="text-xl text-gray-400">
            ลากและวางไฟล์ หรือคลิกเพื่อเลือกไฟล์
          </p>
        </div>

        {!uploading && !uploadedUrl && (
          <UploadZone
            onFileSelect={handleFile}
            dragActive={dragActive}
            onDragStateChange={setDragActive}
          />
        )}

        {uploading && <LoadingState />}

        {uploadedUrl && !uploading && (
          <SuccessState url={uploadedUrl} onReset={reset} />
        )}

        {error && <ErrorState message={error} onDismiss={clearError} />}
      </div>

      <div className="text-center text-gray-500 text-sm relative z-10">
        <p>ปลอดภัย • รวดเร็ว • ใช้งานง่าย</p>
      </div>
    </div>
  );
}
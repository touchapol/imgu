"use client";

import { PlusIcon } from "./icons";

interface UploadZoneProps {
    onFileSelect: (file: File) => void;
    dragActive: boolean;
    onDragStateChange: (active: boolean) => void;
}

export function UploadZone({
    onFileSelect,
    dragActive,
    onDragStateChange,
}: UploadZoneProps) {
    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            onDragStateChange(true);
        } else if (e.type === "dragleave") {
            onDragStateChange(false);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        onDragStateChange(false);

        if (e.dataTransfer.files?.[0]) {
            onFileSelect(e.dataTransfer.files[0]);
        }
    };

    const handleClick = () => {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = "image/*";
        input.onchange = (e) => {
            const file = (e.target as HTMLInputElement).files?.[0];
            if (file) onFileSelect(file);
        };
        input.click();
    };

    return (
        <div
            onClick={handleClick}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            className={`
        relative border-2 border-dashed rounded-3xl p-16 transition-all duration-300 cursor-pointer group
        ${dragActive
                    ? "border-blue-500 bg-blue-500/10 scale-105"
                    : "border-gray-600 hover:border-blue-500 hover:bg-gray-800/50"
                }
      `}
        >
            <div className="flex flex-col items-center gap-6">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                    <PlusIcon className="w-12 h-12 text-white" />
                </div>
                <div>
                    <p className="text-2xl font-semibold text-white mb-2">
                        คลิกหรือลากไฟล์มาที่นี่
                    </p>
                    <p className="text-gray-400">รองรับไฟล์: JPG, PNG, GIF, WebP</p>
                </div>
            </div>
        </div>
    );
}

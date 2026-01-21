"use client";

import { CheckIcon, CopyIcon, UploadIcon } from "./icons";

interface SuccessStateProps {
    url: string;
    onReset: () => void;
}

export function SuccessState({ url, onReset }: SuccessStateProps) {
    const copyToClipboard = () => {
        navigator.clipboard.writeText(url);
    };

    return (
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 backdrop-blur-xl rounded-3xl p-8 border border-gray-700 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                    <CheckIcon className="w-10 h-10 text-white" />
                </div>
            </div>

            <p className="text-green-400 text-2xl font-bold mb-2">อัพโหลดสำเร็จ!</p>

            <div className="bg-gray-900/80 rounded-2xl p-6 mb-6 break-all border border-gray-700 hover:border-blue-500 transition-colors duration-200">
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-lg font-mono"
                >
                    {url}
                </a>
            </div>

            <div className="flex gap-4 justify-center flex-wrap">
                <button
                    onClick={copyToClipboard}
                    className="px-8 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-xl transition-all duration-200 font-medium shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2"
                >
                    <CopyIcon className="w-5 h-5" />
                    คัดลอก URL
                </button>

                <button
                    onClick={onReset}
                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl transition-all duration-200 font-medium shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2"
                >
                    <UploadIcon className="w-5 h-5" />
                    อัพโหลดอีกครั้ง
                </button>
            </div>
        </div>
    );
}

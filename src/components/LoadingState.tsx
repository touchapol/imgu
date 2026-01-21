export function LoadingState() {
    return (
        <div className="bg-gray-800/50 backdrop-blur-xl rounded-3xl p-16 border border-gray-700 shadow-2xl">
            <div className="flex flex-col items-center gap-6">
                <div className="relative">
                    <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-blue-500" />
                    <div className="absolute inset-0 animate-ping rounded-full h-24 w-24 border-4 border-blue-500 opacity-20" />
                </div>
                <div>
                    <p className="text-gray-200 text-2xl font-semibold">กำลังอัพโหลด...</p>
                    <p className="text-gray-400 mt-2">กรุณารอสักครู่</p>
                </div>
            </div>
        </div>
    );
}

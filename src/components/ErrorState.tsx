import { CloseIcon } from "./icons";

interface ErrorStateProps {
    message: string;
    onDismiss: () => void;
}

export function ErrorState({ message, onDismiss }: ErrorStateProps) {
    return (
        <div className="bg-red-900/30 backdrop-blur-xl border border-red-700/50 rounded-2xl p-6 mt-6 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <CloseIcon className="w-6 h-6 text-white" />
                </div>
                <p className="text-red-300 text-lg font-medium">{message}</p>
            </div>

            <button
                onClick={onDismiss}
                className="w-full px-6 py-3 bg-red-700 hover:bg-red-600 text-white rounded-xl transition-all duration-200 font-medium hover:scale-105"
            >
                ปิด
            </button>
        </div>
    );
}

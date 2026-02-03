export default function Loading() {
    return (
        <div className="flex h-screen w-full items-center justify-center bg-[#20272b]">
            <div className="flex flex-col items-center gap-4">
                <div className="h-16 w-16 animate-spin rounded-full border-4 border-gray-700 border-t-blue-500"></div>
                <p className="text-lg font-medium text-gray-300 animate-pulse">Loading Properties...</p>
            </div>
        </div>
    );
}

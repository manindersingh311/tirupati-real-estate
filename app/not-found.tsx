import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex h-screen w-full flex-col items-center justify-center bg-[#20272b] p-4 text-center">
            <h1 className="text-9xl font-extrabold text-primary opacity-20">404</h1>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h2 className="text-3xl font-bold text-white mb-4">Page Not Found</h2>
                <p className="text-gray-400 mb-8 max-w-md mx-auto">
                    Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or deleted.
                </p>
                <Link
                    href="/"
                    className="px-8 py-3 bg-primary hover:bg-primary text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-primary"
                >
                    Return Home
                </Link>
            </div>
        </div>
    );
}

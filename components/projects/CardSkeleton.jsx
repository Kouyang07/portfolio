// components/CardSkeleton.jsx

export default function CardSkeleton() {
    return (
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg animate-pulse">
            <div className="h-48 bg-gray-700 rounded mb-4"></div>
            <div className="h-6 bg-gray-700 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-700 rounded w-1/2 mb-4"></div>
            <div className="h-20 bg-gray-700 rounded mb-4"></div>
            <div className="flex justify-between">
                <div className="h-8 bg-gray-700 rounded w-1/3"></div>
                <div className="h-8 bg-gray-700 rounded w-8"></div>
            </div>
        </div>
    );
}

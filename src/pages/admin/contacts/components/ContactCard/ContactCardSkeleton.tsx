export const ContactCardSkeleton = () => {
    return (
        <div className="bg-white rounded-lg shadow-md border-l-4 border-l-gray-300 p-6 animate-pulse">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                    <div>
                        <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
                        <div className="flex items-center gap-1">
                            <div className="h-3 w-3 bg-gray-200 rounded"></div>
                            <div className="h-3 bg-gray-200 rounded w-32"></div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <div className="h-8 bg-gray-200 rounded-full w-24"></div>
                    <div className="h-8 bg-gray-200 rounded-full w-20"></div>
                </div>
            </div>

            {/* Message */}
            <div className="mb-4">
                <div className="flex items-start gap-2">
                    <div className="h-4 w-4 bg-gray-200 rounded mt-0.5 flex-shrink-0"></div>
                    <div className="flex-1">
                        <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                        <div className="h-4 bg-gray-200 rounded w-4/5 mb-2"></div>
                        <div className="h-4 bg-gray-200 rounded w-3/5"></div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <div className="flex items-center gap-1">
                    <div className="h-4 w-4 bg-gray-200 rounded"></div>
                    <div className="h-3 bg-gray-200 rounded w-20"></div>
                </div>

                <div className="flex items-center gap-2">
                    <div className="h-4 w-4 bg-gray-200 rounded"></div>
                    <div className="h-3 bg-gray-200 rounded w-12"></div>
                </div>
            </div>
        </div>
    )
}
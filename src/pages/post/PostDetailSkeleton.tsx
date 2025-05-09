export function PostDetailSkeleton() {
	return (
		<div className="min-h-screen bg-white">
			<main className="container mx-auto px-4 py-8">
				<div className="max-w-5xl mx-auto">
					<div className="flex flex-col lg:flex-row gap-8">
						<div className="lg:w-3/4">
							<div className="shadow-sm rounded-lg p-6 mb-8">
								{/* Skeleton for image */}
								<div className="flex justify-center mb-6">
									<div className="w-full h-64 bg-gray-200 animate-pulse rounded-lg"></div>
								</div>

								{/* Skeleton for category */}
								<div className="flex gap-2 mb-4">
									<div className="bg-gray-200 animate-pulse h-6 w-24 rounded-full"></div>
								</div>

								{/* Skeleton for title */}
								<div className="bg-gray-200 animate-pulse h-10 w-3/4 mb-6 rounded"></div>

								{/* Skeleton for content */}
								<div className="space-y-4">
									<div className="bg-gray-200 animate-pulse h-4 w-full rounded"></div>
									<div className="bg-gray-200 animate-pulse h-4 w-full rounded"></div>
									<div className="bg-gray-200 animate-pulse h-4 w-5/6 rounded"></div>
									<div className="bg-gray-200 animate-pulse h-4 w-full rounded"></div>
									<div className="bg-gray-200 animate-pulse h-4 w-4/6 rounded"></div>
									<div className="bg-gray-200 animate-pulse h-4 w-full rounded"></div>
									<div className="bg-gray-200 animate-pulse h-4 w-full rounded"></div>
									<div className="bg-gray-200 animate-pulse h-4 w-3/4 rounded"></div>
								</div>
							</div>
						</div>

						{/* Sidebar skeleton */}
						<div className="lg:w-1/4 hidden md:block">
							<div className="bg-white shadow-sm rounded-lg p-6 sticky top-4">
								{/* Skeleton for table of contents title */}
								<div className="bg-gray-200 animate-pulse h-6 w-40 mb-4 rounded"></div>

								{/* Skeleton for table of contents links */}
								<div className="space-y-3">
									<div className="bg-gray-200 animate-pulse h-4 w-full rounded"></div>
									<div className="bg-gray-200 animate-pulse h-4 w-5/6 rounded"></div>
									<div className="bg-gray-200 animate-pulse h-4 w-4/6 rounded"></div>
									<div className="bg-gray-200 animate-pulse h-4 w-full rounded"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}

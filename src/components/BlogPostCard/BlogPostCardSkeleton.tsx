export function BlogPostCardSkeleton() {
	return (
		<div className="h-[450px] flex flex-col animate-pulse">
			{/* Skeleton da imagem */}
			<div className="relative w-full h-60 overflow-hidden rounded-lg bg-gray-200" />

			<div className="p-4 flex flex-col h-full">
				<div className="flex flex-col flex-1">
					{/* Skeleton da categoria */}
					<div className="mb-3">
						<div className="bg-gray-200 w-20 h-5 rounded" />
					</div>

					{/* Skeleton do título */}
					<div className="h-7 bg-gray-200 rounded mb-2 w-3/4" />

					{/* Skeleton do resumo */}
					<div className="space-y-2 flex-1">
						<div className="h-4 bg-gray-200 rounded w-full" />
						<div className="h-4 bg-gray-200 rounded w-full" />
						<div className="h-4 bg-gray-200 rounded w-5/6" />
						<div className="h-4 bg-gray-200 rounded w-4/6" />
					</div>
				</div>

				{/* Skeleton do tempo de leitura */}
				<div className="flex items-center justify-between pt-3 border-t">
					<div className="h-4 bg-gray-200 rounded w-16" />
				</div>
			</div>
		</div>
	)
}

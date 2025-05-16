export function ProjectCardSkeleton() {
	return (
		<div className="h-fit group relative overflow-hidden rounded-xl border border-gray-100 bg-white">
			{/* Gradientes decorativos */}
			<div className="absolute -right-20 -top-20 z-0 h-40 w-40 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 opacity-50 blur-3xl"></div>
			<div className="absolute -bottom-20 -left-20 z-0 h-40 w-40 rounded-full bg-gradient-to-tr from-gray-100 to-gray-200 opacity-50 blur-3xl"></div>

			<div className="relative z-10 grid overflow-hidden grid-cols-1 sm:grid-cols-3 lg:grid-cols-1">
				{/* Imagem */}
				<div className="relative h-60 sm:col-span-1 sm:h-auto lg:h-60 lg:col-span-1">
					<div className="h-full w-full bg-gray-200 animate-pulse"></div>
					<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
				</div>

				{/* Conteúdo */}
				<div className="flex flex-col justify-between p-4 sm:p-6 sm:col-span-2 lg:col-span-1">
					<div>
						{/* Cabeçalho */}
						<div className="mb-1 flex flex-wrap items-center justify-between gap-2">
							<div className="w-16 h-4 bg-gray-200 animate-pulse rounded"></div>
							<div className="w-24 h-4 bg-gray-200 animate-pulse rounded"></div>
						</div>

						{/* Título */}
						<div className="mb-2 w-3/4 h-7 bg-gray-300 animate-pulse rounded"></div>

						{/* Descrição */}
						<div className="mb-4 space-y-2">
							<div className="w-full h-4 bg-gray-200 animate-pulse rounded"></div>
							<div className="w-full h-4 bg-gray-200 animate-pulse rounded"></div>
							<div className="w-2/3 h-4 bg-gray-200 animate-pulse rounded"></div>
						</div>

						{/* Duração */}
						<div className="mb-4 w-28 h-4 bg-gray-200 animate-pulse rounded"></div>
					</div>

					{/* Botões */}
					<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
						<div className="w-28 h-8 bg-teal-200 animate-pulse rounded-md"></div>
						<div className="flex flex-wrap gap-2">
							<div className="w-20 h-8 bg-gray-200 animate-pulse rounded-md"></div>
							<div className="w-20 h-8 bg-gray-200 animate-pulse rounded-md"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

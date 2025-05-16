import { ProjectCardSkeleton } from '../home/components/projects/components/projectCard/ProjectCardSkeleton'

export function ProjetosSkeleton() {
	const skeletonCards = Array(6).fill(0)

	return (
		<div className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
			<div className="container mx-auto px-6 md:px-10 lg:px-16">
				{/* Cabeçalho Skeleton */}
				<div className="relative mb-16">
					{/* Link de volta */}
					<div className="mb-6 w-36 h-6 bg-gray-200 animate-pulse rounded-md" />

					{/* Título */}
					<div className="w-64 h-10 bg-gray-300 animate-pulse rounded-md" />
					<div className="mt-2 h-1 w-20 bg-gray-200 animate-pulse rounded-full" />

					{/* Descrição */}
					<div className="mt-4 max-w-xl">
						<div className="h-4 bg-gray-200 animate-pulse rounded-md mb-2 w-full" />
						<div className="h-4 bg-gray-200 animate-pulse rounded-md w-3/4" />
					</div>
				</div>

				{/* Campo de busca Skeleton */}
				<div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
					<div className="relative w-full md:w-64">
						<div className="w-full h-10 bg-gray-200 animate-pulse rounded-md" />
					</div>
				</div>

				{/* Grid de projetos Skeleton */}
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-3 xl:gap-10">
					{skeletonCards.map((_, index) => (
						<ProjectCardSkeleton key={index} />
					))}
				</div>
			</div>
		</div>
	)
}

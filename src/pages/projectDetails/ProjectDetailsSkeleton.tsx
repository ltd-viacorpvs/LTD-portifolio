import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export function ProjectDetailsSkeleton() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
			{/* Hero skeleton */}
			<div className="relative h-[40vh] w-full md:h-[50vh]">
				<div className="h-full w-full bg-gray-300 animate-pulse absolute inset-0"></div>
				<div className="absolute inset-0 bg-black/30"></div>
				<div className="absolute bottom-0 left-0 w-full p-8">
					<div className="container mx-auto">
						{/* Título skeleton */}
						<div className="h-12 w-2/3 bg-white/30 animate-pulse rounded-md md:h-14"></div>

						{/* Descrição skeleton */}
						<div className="mt-2 max-w-2xl">
							<div className="h-6 w-full bg-white/30 animate-pulse rounded-md"></div>
							<div className="mt-2 h-6 w-4/5 bg-white/30 animate-pulse rounded-md"></div>
						</div>
					</div>
				</div>
			</div>

			{/* Conteúdo */}
			<div className="container mx-auto px-4 py-12">
				{/* Navegação */}
				<div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row">
					<Link
						to="/projetos"
						className="flex w-fit items-center gap-2 rounded-md bg-gray-100 px-6 py-3 font-medium text-gray-800 transition-all hover:bg-gray-200"
					>
						<ArrowLeft size={18} /> Voltar para projetos
					</Link>

					{/* Botões de ação skeleton */}
					<div className="flex flex-wrap gap-3">
						<div className="h-12 w-32 bg-gray-200 animate-pulse rounded-md"></div>
						<div className="h-12 w-32 bg-gray-200 animate-pulse rounded-md"></div>
					</div>
				</div>

				{/* Grade de conteúdo */}
				<div className="grid gap-8 lg:grid-cols-3">
					{/* Conteúdo principal */}
					<div className="lg:col-span-2">
						<div className="rounded-xl bg-white p-8 shadow-lg">
							{/* Título da seção */}
							<div className="mb-6 h-8 w-64 bg-gray-300 animate-pulse rounded-md"></div>

							{/* Rich text content skeleton */}
							<div className="mb-8 space-y-4">
								<div className="h-4 w-full bg-gray-200 animate-pulse rounded-md"></div>
								<div className="h-4 w-full bg-gray-200 animate-pulse rounded-md"></div>
								<div className="h-4 w-5/6 bg-gray-200 animate-pulse rounded-md"></div>
								<div className="h-4 w-full bg-gray-200 animate-pulse rounded-md"></div>
								<div className="h-4 w-4/5 bg-gray-200 animate-pulse rounded-md"></div>

								{/* Espaçamento para parágrafo */}
								<div className="py-2"></div>

								<div className="h-4 w-full bg-gray-200 animate-pulse rounded-md"></div>
								<div className="h-4 w-full bg-gray-200 animate-pulse rounded-md"></div>
								<div className="h-4 w-3/4 bg-gray-200 animate-pulse rounded-md"></div>

								{/* Simulação de uma lista */}
								<div className="pl-5 space-y-4">
									<div className="h-4 w-full bg-gray-200 animate-pulse rounded-md"></div>
									<div className="h-4 w-full bg-gray-200 animate-pulse rounded-md"></div>
									<div className="h-4 w-full bg-gray-200 animate-pulse rounded-md"></div>
									<div className="h-4 w-4/5 bg-gray-200 animate-pulse rounded-md"></div>
								</div>
							</div>
						</div>
					</div>

					{/* Barra lateral */}
					<div className="space-y-6">
						{/* Detalhes do projeto */}
						<div className="rounded-xl bg-white p-6 shadow-lg">
							<div className="mb-4 h-7 w-48 bg-gray-300 animate-pulse rounded-md"></div>

							<div className="space-y-4">
								{/* Data de conclusão */}
								<div className="flex items-center gap-3">
									<div className="h-5 w-5 rounded-full bg-gray-300 animate-pulse"></div>
									<div>
										<div className="h-4 w-32 bg-gray-200 animate-pulse rounded-md"></div>
										<div className="mt-1 h-5 w-24 bg-gray-300 animate-pulse rounded-md"></div>
									</div>
								</div>

								{/* Duração */}
								<div className="flex items-center gap-3">
									<div className="h-5 w-5 rounded-full bg-gray-300 animate-pulse"></div>
									<div>
										<div className="h-4 w-20 bg-gray-200 animate-pulse rounded-md"></div>
										<div className="mt-1 h-5 w-28 bg-gray-300 animate-pulse rounded-md"></div>
									</div>
								</div>
							</div>
						</div>

						{/* Tecnologias */}
						<div className="rounded-xl bg-white p-6 shadow-lg">
							<div className="mb-4 flex items-center gap-3">
								<div className="h-5 w-5 rounded-full bg-gray-300 animate-pulse"></div>
								<div className="h-7 w-32 bg-gray-300 animate-pulse rounded-md"></div>
							</div>

							<div className="flex flex-wrap gap-2">
								{/* Gera 6 tecnologias de exemplo */}
								{Array.from({ length: 6 }).map((_, index) => (
									<div
										key={index}
										className="rounded-full bg-gray-200 animate-pulse h-8 w-20"
									></div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

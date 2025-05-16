import { ArrowLeft, Search } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ProjectCard } from '../home/components/projects/components/projectCard'
import { ProjetosSkeleton } from './ProjetosSkeleton'
import type { ProjetosViewProps } from './types'

export function ProjetosView(props: ProjetosViewProps) {
	const { projects, isLoading } = props

	if (isLoading) {
		return <ProjetosSkeleton />
	}

	return (
		<div className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
			<div className="container mx-auto px-6 md:px-10 lg:px-16">
				{/* Cabeçalho */}
				<div className="relative mb-16">
					<Link
						to="/"
						className="mb-6 inline-flex items-center gap-1 text-teal-600 hover:text-teal-700 transition-colors"
					>
						<ArrowLeft size={16} />
						<span>Voltar para home</span>
					</Link>

					<h1 className="text-4xl font-bold text-gray-900">
						Todos os Projetos
					</h1>
					<div className="mt-2 h-1 w-20 rounded-full bg-teal-500"></div>
					<p className="mt-4 max-w-xl text-gray-600">
						Nossa coleção completa de projetos e soluções tecnológicas para os
						mais diversos setores e necessidades
					</p>
				</div>

				{/* <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
					<div className="relative w-full md:w-64">
						<input
							type="text"
							placeholder="Buscar projetos..."
							className="w-full border border-gray-300 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
						/>
						<Search
							size={18}
							className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
						/>
					</div>
				</div> */}

				{/* Grid de projetos */}
				<div className="grid grid-cols-1 gap-8  lg:grid-cols-3 xl:gap-10">
					{projects.map((project) => (
						<ProjectCard
							key={project.id}
							project={project}
							isHighlighted={project.isHighlighted}
							isSingleProject={false}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

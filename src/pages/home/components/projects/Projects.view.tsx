import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ProjectCard } from './components/projectCard/ProjectCard'
import type { ProjectsViewProps } from './types'

export function ProjectsView(props: ProjectsViewProps) {
	const { projects } = props
	return (
		<div className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 py-20">
			<div className="container mx-auto px-6 md:px-10 lg:px-16">
				<div className="relative mb-16">
					<h1 className="text-4xl font-bold text-white">Projetos</h1>
					<div className="mt-2 h-1 w-20 rounded-full bg-teal-500"></div>
					<p className="mt-4 max-w-xl text-gray-300">
						Explore nossos projetos mais recentes e descubra soluções inovadoras
						para desafios complexos
					</p>
				</div>

				<div className="grid grid-cols-1 gap-8 md:gap-10 lg:grid-cols-2 lg:gap-12">
					{projects.map((project) => (
						<ProjectCard
							key={project.id}
							project={project}
							isSingleProject={false}
						/>
					))}
				</div>

				<div className="mt-16 flex justify-center">
					<Link
						to="/projetos"
						className="group flex items-center gap-2 rounded-lg bg-teal-600 px-7 py-3.5 text-white transition-all duration-300 hover:bg-teal-700"
					>
						<span className="font-medium">Ver mais projetos</span>
						<ArrowRight
							size={18}
							className="transition-transform duration-300 group-hover:translate-x-1"
						/>
					</Link>
				</div>
			</div>
		</div>
	)
}

import {
	ArrowLeft,
	Calendar,
	Clock,
	Code,
	ExternalLink,
	Github,
	Globe,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import type { ProjectDetailsViewProps } from './types'

export function ProjectDetailsView(props: ProjectDetailsViewProps) {
	const { project } = props
	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
			{/* Hero section with project image */}
			<div className="relative h-[40vh] w-full md:h-[50vh]">
				<img
					src={project.image || '/placeholder.svg'}
					alt={project.title}
					className="h-full w-full object-cover absolute inset-0"
				/>
				<div className="absolute inset-0 bg-black/40"></div>
				<div className="absolute bottom-0 left-0 w-full p-8">
					<div className="container mx-auto">
						<h1 className="text-4xl font-bold text-white md:text-5xl">
							{project.title}
						</h1>
						<p className="mt-2 max-w-2xl text-xl text-white/90">
							{project.description}
						</p>
					</div>
				</div>
			</div>

			{/* Project content */}
			<div className="container mx-auto px-4 py-12">
				<div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row">
					<Link
						to="/projetos"
						className="flex w-fit items-center gap-2 rounded-md bg-gray-100 px-6 py-3 font-medium text-gray-800 transition-all hover:bg-gray-200"
					>
						<ArrowLeft size={18} /> Voltar para projetos
					</Link>

					<div className="flex flex-wrap gap-3">
						{project.website && (
							<a
								href={project.website}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 rounded-md bg-teal-600 px-6 py-3 font-medium text-white transition-all hover:bg-teal-700"
							>
								<Globe size={18} /> Visitar site
							</a>
						)}

						{project.github && (
							<a
								href={project.github}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 rounded-md bg-gray-800 px-6 py-3 font-medium text-white transition-all hover:bg-gray-900"
							>
								<Github size={18} /> Ver código
							</a>
						)}
					</div>
				</div>

				<div className="grid gap-8 lg:grid-cols-3">
					{/* Main content */}
					<div className="lg:col-span-2">
						<div className="rounded-xl bg-white p-8 shadow-lg">
							<h2 className="mb-6 text-2xl font-bold text-gray-900">
								Visão Geral do Projeto
							</h2>
							<p className="mb-8 leading-relaxed text-gray-700">
								{project.fullDescription}
							</p>

							<h3 className="mb-4 text-xl font-bold text-gray-900">
								Recursos Principais
							</h3>
							<ul className="mb-8 space-y-2">
								{project.features &&
									project.features.map((feature, index) => (
										<li
											key={index}
											className="flex items-start gap-2 text-gray-700"
										>
											<span className="mt-1 text-teal-600">•</span> {feature}
										</li>
									))}
							</ul>
						</div>
					</div>

					{/* Sidebar */}
					<div className="space-y-6">
						<div className="rounded-xl bg-white p-6 shadow-lg">
							<h3 className="mb-4 text-xl font-bold text-gray-900">
								Detalhes do Projeto
							</h3>

							<div className="space-y-4">
								<div className="flex items-center gap-3">
									<Calendar className="h-5 w-5 text-teal-600" />
									<div>
										<p className="text-sm text-gray-500">Data de Conclusão</p>
										<p className="font-medium text-gray-900">{project.date}</p>
									</div>
								</div>

								<div className="flex items-center gap-3">
									<Clock className="h-5 w-5 text-teal-600" />
									<div>
										<p className="text-sm text-gray-500">Duração</p>
										<p className="font-medium text-gray-900">
											{project.duration}
										</p>
									</div>
								</div>

								<div className="flex items-center gap-3">
									<ExternalLink className="h-5 w-5 text-teal-600" />
									<div>
										<p className="text-sm text-gray-500">Cliente</p>
										<p className="font-medium text-gray-900">
											{project.client}
										</p>
									</div>
								</div>
							</div>
						</div>

						{project.technologies && (
							<div className="rounded-xl bg-white p-6 shadow-lg">
								<div className="mb-4 flex items-center gap-3">
									<Code className="h-5 w-5 text-teal-600" />
									<h3 className="text-xl font-bold text-gray-900">
										Tecnologias
									</h3>
								</div>

								<div className="flex flex-wrap gap-2">
									{project.technologies.map((tech, index) => (
										<span
											key={index}
											className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800"
										>
											{tech}
										</span>
									))}
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

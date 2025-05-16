import { RichTextRenderer } from '@/components/RichTextRenderer/RichTextRenderer'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import {
	ArrowLeft,
	Calendar,
	Clock,
	Code,
	ExternalLink,
	Github,
	Globe,
} from 'lucide-react'
import { Link, Navigate } from 'react-router-dom'
import { ProjectDetailsSkeleton } from './ProjectDetailsSkeleton'
import type { ProjectDetailsViewProps } from './types'

export function ProjectDetailsView(props: ProjectDetailsViewProps) {
	const { project, isLoading, imageLoaded, setImageLoaded } = props

	if (isLoading) {
		return <ProjectDetailsSkeleton />
	}

	if (!project) {
		return <Navigate to={'not-found'} replace />
	}

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
			<div className="relative h-[40vh] w-full md:h-[50vh]">
				<img
					src={`${project.image?.url}?w=1200&q=80`}
					alt={project.title}
					className={`h-full w-full object-cover absolute inset-0 transition-opacity duration-500 ${
						imageLoaded ? 'opacity-100' : 'opacity-0'
					}`}
					onLoad={() => setImageLoaded(true)}
					loading="eager"
					decoding="async"
					fetchPriority="high"
				/>
				<div className="absolute inset-0 bg-black/40"></div>
				<div className="absolute bottom-0 left-0 w-full p-8">
					<div className="container mx-auto">
						<h1 className="text-4xl font-bold text-white md:text-5xl">
							{project.title}
						</h1>
						<p className="mt-2 max-w-2xl text-xl text-white/90">
							{project.excerpt}
						</p>
					</div>
				</div>
			</div>

			<div className="container mx-auto px-4 py-12">
				<div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row">
					<Link
						to="/projetos"
						className="flex w-fit items-center gap-2 rounded-md bg-gray-100 px-6 py-3 font-medium text-gray-800 transition-all hover:bg-gray-200"
					>
						<ArrowLeft size={18} /> Voltar para projetos
					</Link>

					<div className="flex flex-wrap gap-3">
						{project.siteUrl && (
							<a
								href={project.siteUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 rounded-md bg-teal-600 px-6 py-3 font-medium text-white transition-all hover:bg-teal-700"
							>
								<Globe size={18} /> Visitar site
							</a>
						)}

						{project.githubUrl && (
							<a
								href={project.githubUrl}
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
					<div className="lg:col-span-2">
						<div className="rounded-xl bg-white p-8 shadow-lg">
							<h2 className="mb-6 text-2xl font-bold text-gray-900">
								Visão Geral do Projeto
							</h2>
							<div className="mb-8 leading-relaxed text-gray-700 project-rich-text">
								<RichTextRenderer content={project.projectDetails} />
							</div>
						</div>
					</div>

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
										<p className="font-medium text-gray-900">
											{project.formattedDate || project.completionDate}
										</p>
									</div>
								</div>

								<div className="flex items-center gap-3">
									<Clock className="h-5 w-5 text-teal-600" />
									<div>
										<p className="text-sm text-gray-500">Duração</p>
										<p className="font-medium text-gray-900">
											{project.projectDuration}
										</p>
									</div>
								</div>
							</div>
						</div>

						{project.technologies && project.technologies.length > 0 && (
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

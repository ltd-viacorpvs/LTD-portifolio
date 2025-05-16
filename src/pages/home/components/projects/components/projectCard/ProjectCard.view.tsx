import {
	ArrowUpRight,
	Calendar,
	Clock,
	ExternalLink,
	Github,
	Star,
} from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { ProjectCardViewProps } from './types'

export function ProjectCardView(props: ProjectCardViewProps) {
	const { project, isHighlighted } = props

	const [useVerticalLayout] = useState(undefined)

	return (
		<div
			className={`h-fit group relative overflow-hidden rounded-xl border border-gray-100 bg-white transition-all duration-300 hover:border-gray-200 hover:shadow-xl ${
				project.isHighlighted || isHighlighted ? 'ring-2 ring-teal-400' : ''
			}`}
		>
			{(project.isHighlighted || isHighlighted) && (
				<div className="absolute top-0 right-0 z-20 p-2">
					<div className="bg-teal-500 text-white p-1 rounded-full shadow-md">
						<Star size={16} fill="white" />
					</div>
				</div>
			)}

			<div className="absolute -right-20 -top-20 z-0 h-40 w-40 rounded-full bg-gradient-to-br from-teal-100 to-teal-200 opacity-70 blur-3xl transition-all duration-500 group-hover:opacity-100"></div>
			<div className="absolute -bottom-20 -left-20 z-0 h-40 w-40 rounded-full bg-gradient-to-tr from-amber-100 to-amber-200 opacity-70 blur-3xl transition-all duration-500 group-hover:opacity-100"></div>

			<div
				className={`relative z-10 grid overflow-hidden ${
					useVerticalLayout
						? 'grid-cols-1'
						: 'grid-cols-1 sm:grid-cols-3 lg:grid-cols-1'
				}`}
			>
				<div
					className={`relative ${
						useVerticalLayout
							? 'h-60'
							: 'h-60 sm:col-span-1 sm:h-auto lg:h-60 lg:col-span-1'
					}`}
				>
					<img
						src={project.image?.url || './placeholder.jpg'}
						alt={project.title}
						className="h-full w-full object-cover "
					/>
					<div
						className={`absolute inset-0 ${
							useVerticalLayout ||
							window.innerWidth < 640 ||
							window.innerWidth >= 1024
								? 'bg-gradient-to-t from-black/40 to-transparent'
								: 'bg-gradient-to-r from-black/40 via-transparent to-transparent'
						}`}
					></div>
				</div>

				<div
					className={`flex flex-col justify-between p-4 sm:p-6 ${
						useVerticalLayout ? '' : 'sm:col-span-2 lg:col-span-1'
					}`}
				>
					<div>
						<div className="mb-1 flex flex-wrap items-center justify-between gap-2">
							<span className="text-xs font-medium text-gray-500">
								{/* O campo client não existe na interface, poderia ser extraído do título ou outro campo */}
								Projeto
							</span>
							<span className="flex items-center gap-1 text-xs font-medium text-gray-500">
								<Calendar size={12} />
								{project.formattedDate || project.completionDate}
							</span>
						</div>

						<h3 className="mb-2 text-xl font-bold text-gray-800 break-words">
							{project.title}
						</h3>
						<p className="mb-4 text-sm text-gray-600 line-clamp-3">
							{project.excerpt}
						</p>

						<div className="mb-4 flex items-center gap-4">
							<div className="flex items-center gap-1 text-xs text-gray-500">
								<Clock size={14} />
								<span>{project.projectDuration}</span>
							</div>
						</div>
					</div>

					<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
						<Link
							to={`/projetos/${project.slug}`}
							className="flex items-center gap-1 rounded-md bg-teal-600 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-teal-700"
						>
							Ver projeto <ArrowUpRight size={14} />
						</Link>

						<div className="flex flex-wrap gap-2">
							{project.siteUrl && (
								<a
									href={project.siteUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-1 rounded-md bg-gray-100 px-3 py-2 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-200"
								>
									<ExternalLink size={14} />
									Demo
								</a>
							)}
							{project.githubUrl && (
								<a
									href={project.githubUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-1 rounded-md bg-gray-100 px-3 py-2 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-200"
								>
									<Github size={14} />
									Code
								</a>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

import type { useProjectCardModel } from './ProjectCard.model'

export interface Project {
	id: string
	title: string
	description: string
	image: string
	date?: string
	duration?: string
	demoUrl?: string
	githubUrl?: string
	client?: string
}

export interface ProjectCardProps {
	project: Project
	isSingleProject: boolean
	isHighlighted?: boolean
}

export interface useProjectCardProps extends ProjectCardProps {}

export type ProjectCardViewProps = ReturnType<typeof useProjectCardModel>

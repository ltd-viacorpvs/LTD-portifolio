import type { IProject } from '@/services/projects/types'
import type { useProjectCardModel } from './ProjectCard.model'

export interface ProjectCardProps {
	project: IProject
	isSingleProject: boolean
	isHighlighted?: boolean
}

export interface useProjectCardProps extends ProjectCardProps {}

export type ProjectCardViewProps = ReturnType<typeof useProjectCardModel>

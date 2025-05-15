import { useProjectCardModel } from './ProjectCard.model'
import { ProjectCardView } from './ProjectCard.view'
import type { ProjectCardProps } from './types'

export function ProjectCard(prop: ProjectCardProps) {
	const props = useProjectCardModel({ ...prop })
	return <ProjectCardView {...props} />
}

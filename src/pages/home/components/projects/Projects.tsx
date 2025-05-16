import { projectsServices } from '@/services/projects/ProjectsServices'
import { useProjectsModel } from './Projects.model'
import { ProjectsView } from './Projects.view'

export function Projects() {
	const props = useProjectsModel({
		projectsServices: projectsServices,
	})
	return <ProjectsView {...props} />
}

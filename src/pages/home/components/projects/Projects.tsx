import { useProjectsModel } from './Projects.model'
import { ProjectsView } from './Projects.view'

export function Projects() {
	const props = useProjectsModel({})
	return <ProjectsView {...props} />
}

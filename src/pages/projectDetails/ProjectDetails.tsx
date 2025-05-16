import { projectsServices } from '@/services/projects/ProjectsServices'
import { useParams } from 'react-router-dom'
import { useProjectDetailsModel } from './ProjectDetails.model'
import { ProjectDetailsView } from './ProjectDetails.view'

export function ProjectDetails() {
	const { slug } = useParams()

	const props = useProjectDetailsModel({
		slug: slug || '',
		projectsServices,
	})
	return <ProjectDetailsView {...props} />
}

import { useParams } from 'react-router-dom'
import { useProjectDetailsModel } from './ProjectDetails.model'
import { ProjectDetailsView } from './ProjectDetails.view'

export function ProjectDetails() {
	const { slug } = useParams()

	const props = useProjectDetailsModel({ slug: slug || '' })
	return <ProjectDetailsView {...props} />
}

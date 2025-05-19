import type { IProjectsServices } from '@/services/projects/IProjectsServices'
import type { useProjectDetailsModel } from './ProjectDetails.model'

export type useProjectDetailsProps = {
	/** Add props here */
	slug: string
	projectsServices: IProjectsServices
}

export type ProjectDetailsViewProps = ReturnType<typeof useProjectDetailsModel>

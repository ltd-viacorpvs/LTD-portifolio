import type { IProjectsServices } from '@/services/projects/IProjectsServices'
import type { useProjectsModel } from './Projects.model'

export type useProjectsProps = {
	/** Add props here */
	projectsServices: IProjectsServices
}

export type ProjectsViewProps = ReturnType<typeof useProjectsModel>

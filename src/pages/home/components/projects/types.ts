import type { useProjectsModel } from './Projects.model'

export type useProjectsProps = {
	/** Add props here */
	a?: string
}

export type ProjectsViewProps = ReturnType<typeof useProjectsModel>

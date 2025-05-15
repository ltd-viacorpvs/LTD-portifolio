import type { useProjectDetailsModel } from './ProjectDetails.model'

export type useProjectDetailsProps = {
	/** Add props here */
	slug: string
}

export type ProjectDetailsViewProps = ReturnType<typeof useProjectDetailsModel>

import type { Document } from '@contentful/rich-text-types'

export interface IProject {

	id: string
	title: string
	slug: string


	excerpt: string
	projectDetails: Document


	completionDate: string
	formattedDate?: string
	projectDuration: string


	siteUrl?: string
	githubUrl?: string


	isHighlighted: boolean


	technologies: string[]


	image: {
		url: string
		title: string
		description: string
		width: number
		height: number
	}
}

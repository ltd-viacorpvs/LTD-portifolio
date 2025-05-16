import type { Document } from '@contentful/rich-text-types'

export interface IProject {
	// Identificação
	id: string
	title: string
	slug: string

	// Descrições
	excerpt: string
	projectDetails: Document

	// Metadados
	completionDate: string
	formattedDate?: string // Data formatada para exibição
	projectDuration: string

	// Links externos
	siteUrl?: string
	githubUrl?: string

	// Classificação
	isHighlighted: boolean

	// Tecnologias
	technologies: string[]

	// Imagem
	image: {
		url: string
		title: string
		description: string
		width: number
		height: number
	}
}

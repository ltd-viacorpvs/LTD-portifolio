import { client } from '@/lib/contentful'
import type { Document } from '@contentful/rich-text-types'
import type { IProjectsServices } from './IProjectsServices'
import type { IProject } from './types'

export const projectsServices: IProjectsServices = {
	fetchProjects: async () => {
		const response = await client.getEntries({
			content_type: 'projeto',
			include: 2,
		})

		console.log(JSON.stringify(response, null, 2))

		return adaptProjectsFromContentful(response)
	},

	getFeaturedProjects: async () => {
		const response = await client.getEntries({
			content_type: 'projeto',
			include: 2,
			'fields.isHighlighted': true,
			limit: 6,
		})

		return adaptProjectsFromContentful(response)
	},

	getProjectBySlug: async (slug: string) => {
		const response = await client.getEntries({
			content_type: 'projeto',
			'fields.slug': slug,
			include: 2,
		})

		if (!response.items.length) {
			return null
		}

		return adaptProjectFromContentful(response.items[0])
	},
}

export function adaptProjectFromContentful(item: any): IProject {
	// Garante que item.fields existe
	if (!item?.fields) {
		throw new Error('Formato de dados inválido: campos não encontrados')
	}

	const { fields, sys } = item

	// Formatar a data de conclusão (opcional)
	const rawDate = fields.completionDate ? new Date(fields.completionDate) : null
	const formattedDate = rawDate
		? rawDate.toLocaleDateString('pt-BR', {
				day: 'numeric',
				month: 'long',
				year: 'numeric',
			})
		: undefined

	// Extrair dados da imagem com segurança
	const imageUrl = fields.thumb?.fields?.file?.url
		? `https:${fields.thumb.fields.file.url}`
		: 'https://placehold.com/600x400'

	const imageWidth = fields.thumb?.fields?.file?.details?.image?.width || 0
	const imageHeight = fields.thumb?.fields?.file?.details?.image?.height || 0

	return {
		// Identificação
		id: sys.id,
		title: fields.title || '',
		slug: fields.slug || '',

		// Descrições
		excerpt: fields.excerpt || '',
		projectDetails: fields.projectDetails || {
			nodeType: 'document',
			data: {},
			content: [],
		},

		// Metadados
		completionDate: fields.completionDate || '',
		formattedDate,
		projectDuration: fields.projectDuration || '',

		// Links externos
		siteUrl: fields.siteUrl || undefined,
		githubUrl: fields.githubUrl || undefined,

		// Classificação
		isHighlighted: fields.isHighlighted || false,

		// Tecnologias
		technologies: fields.technologies || [],

		// Imagem
		image: {
			url: imageUrl,
			title: fields.thumb?.fields?.title || '',
			description: fields.thumb?.fields?.description || '',
			width: imageWidth,
			height: imageHeight,
		},
	}
}

export function adaptProjectsFromContentful(response: any): IProject[] {
	if (!response?.items || !Array.isArray(response.items)) {
		return []
	}

	return response.items.map((item: unknown) => adaptProjectFromContentful(item))
}

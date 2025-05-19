import type { IProject } from './types'

export interface IProjectsServices {
	fetchProjects: () => Promise<IProject[]>
	getFeaturedProjects: () => Promise<IProject[]>
	getProjectBySlug: (slug: string) => Promise<IProject | null>
}

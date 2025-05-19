import type { IProject } from '@/services/projects/types'
import { useQuery } from '@tanstack/react-query'
import type { useProjectsProps } from './types'

export function useProjectsModel({ projectsServices }: useProjectsProps) {
	const {
		data: projects = [],
		isLoading,
		error,
	} = useQuery<IProject[], Error>({
		queryKey: ['projects', 'highlights'],
		queryFn: () => projectsServices.getFeaturedProjects(),
		staleTime: 1000 * 60 * 60 * 12, // 1 hora
		refetchOnWindowFocus: false,
		refetchOnMount: false,
		retry: 1,
	})

	return {
		projects,
		isLoading,
		error,
	}
}

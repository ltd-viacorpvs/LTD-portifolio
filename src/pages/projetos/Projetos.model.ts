import type { IProject } from '@/services/projects/types'
import { useQuery } from '@tanstack/react-query'
import type { useProjetosProps } from './types'

export function useProjetosModel({ projectsServices }: useProjetosProps) {
	const {
		data: projects = [],
		isLoading,
		error,
	} = useQuery<IProject[], Error>({
		queryKey: ['projects', 'all'],
		queryFn: () => projectsServices.fetchProjects(),
		staleTime: 1000 * 60 * 60 * 12,
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

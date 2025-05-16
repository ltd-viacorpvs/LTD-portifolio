import type { IProject } from '@/services/projects/types'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import type { useProjectDetailsProps } from './types'

export function useProjectDetailsModel({
	slug,
	projectsServices,
}: useProjectDetailsProps) {
	const [imageLoaded, setImageLoaded] = useState(false)

	const {
		data: project,
		isLoading,
		error,
	} = useQuery<IProject | null, Error>({
		queryKey: ['projects', slug],
		queryFn: () => projectsServices.getProjectBySlug(slug),
		staleTime: 1000 * 60 * 60 * 12, // 1 hora
		refetchOnWindowFocus: false,
		refetchOnMount: false,
		retry: 1,
	})

	return {
		project,
		isLoading,
		error,
		imageLoaded,
		setImageLoaded,
	}
}

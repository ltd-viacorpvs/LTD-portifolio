import type { IBlogPostDetail } from '@/services/types'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import type { usePostDetailModelProps } from './types'

export function usePostDetailModel({
	blogPostsService,
	slug,
}: usePostDetailModelProps) {
	const navigate = useNavigate()

	const {
		data: post,
		isLoading,
		error,
		refetch,
		isRefetching,
	} = useQuery<IBlogPostDetail | null, Error>({
		queryKey: ['post', slug],
		queryFn: () => blogPostsService.getPostBySlug(slug),

		staleTime: 1000 * 60 * 60 * 24, // 1 day
		refetchOnWindowFocus: false,
		refetchOnMount: false,
		retry: 1,
		enabled: !!slug,
	})

	useEffect(() => {
		if (!isLoading && !isRefetching) {
			if (error || post === null) {
				navigate('/not-found')
			}
		}
	}, [error, post, isLoading, isRefetching, navigate])

	return {
		post,
		isLoading: isLoading || isRefetching,
		error,
		refetch,
	}
}

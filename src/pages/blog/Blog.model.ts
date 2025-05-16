import type { IBlogPost } from '@/services/blogPost/types'
import { useQuery } from '@tanstack/react-query'
import type { UseBlogModelProps } from './types'

export function useBlogModel({ blogPostsService }: UseBlogModelProps) {
	const {
		data: posts = [],
		isLoading,
		error,
		refetch,
		isRefetching,
	} = useQuery<IBlogPost[], Error>({
		queryKey: ['posts'],
		queryFn: () => blogPostsService.fetchPosts(),
		staleTime: 1000 * 60 * 60, // 1 hora
		refetchOnWindowFocus: false,
		refetchOnMount: false,
		retry: 1,
	})

	return {
		posts,
		isLoading: isLoading || isRefetching,
		error,
		refetch,
	}
}

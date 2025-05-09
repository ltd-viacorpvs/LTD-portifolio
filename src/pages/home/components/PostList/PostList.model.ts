import type { IBlogPost } from '@/services/types'
import { useQuery } from '@tanstack/react-query'
import type { UsePostListModelProps } from './types'

export function usePostListModel({ blogPostsService }: UsePostListModelProps) {
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

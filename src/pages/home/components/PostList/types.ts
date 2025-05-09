import type { IBlogPostsServices } from '@/services/IblogPostsServices'
import { type IBlogPost } from '@/services/types'
import type { usePostListModel } from './PostList.model'

export type PostListViewProps = ReturnType<typeof usePostListModel>

export interface UsePostListModelProps {
	blogPostsService: IBlogPostsServices
}

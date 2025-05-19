import type { IBlogPostsServices } from '@/services/blogPost/IblogPostsServices'
import { type IBlogPost } from '@/services/blogPost/types'
import type { usePostListModel } from './PostList.model'

export type PostListViewProps = ReturnType<typeof usePostListModel>

export interface UsePostListModelProps {
	blogPostsService: IBlogPostsServices
}

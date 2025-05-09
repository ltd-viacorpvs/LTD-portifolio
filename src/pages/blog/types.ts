import type { IBlogPostsServices } from '@/services/IblogPostsServices'
import { type IBlogPost } from '@/services/types'
import type { useBlogModel } from './Blog.model'

export type BlogViewProps = ReturnType<typeof useBlogModel>

export interface UseBlogModelProps {
	blogPostsService: IBlogPostsServices
}

import type { IBlogPostsServices } from '@/services/blogPost/IblogPostsServices'
import { type IBlogPost } from '@/services/blogPost/types'
import type { useBlogModel } from './Blog.model'

export type BlogViewProps = ReturnType<typeof useBlogModel>

export interface UseBlogModelProps {
	blogPostsService: IBlogPostsServices
}

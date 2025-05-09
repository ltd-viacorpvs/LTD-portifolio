import type { IBlogPostsServices } from '@/services/IblogPostsServices'
import type { usePostDetailModel } from './PostDetail.model'

export type PostDetailViewProps = ReturnType<typeof usePostDetailModel>

export interface usePostDetailModelProps {
	blogPostsService: IBlogPostsServices
	slug: string
}

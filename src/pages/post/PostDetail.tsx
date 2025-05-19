import { blogPostsServices } from '@/services/blogPost/blogPostsServices'
import { useParams } from 'react-router-dom'
import { usePostDetailModel } from './PostDetail.model'
import { PostDetailView } from './PostDetail.view'

export function PostDetail() {
	const { slug = '' } = useParams<{ slug: string }>()

	const props = usePostDetailModel({
		blogPostsService: blogPostsServices,
		slug,
	})

	return <PostDetailView {...props} />
}

import { blogPostsServices } from '@/services/blogPostsServices'
import { useBlogModel } from './Blog.model'
import { BlogView } from './Blog.view'

export function Blog() {
	const props = useBlogModel({
		blogPostsService: blogPostsServices,
	})

	return <BlogView {...props} />
}

import { blogPostsServices } from '@/services/blogPost/blogPostsServices'
import { usePostListModel } from './PostList.model'
import { PostListView } from './PostList.view'

export function PostList() {
	const props = usePostListModel({
		blogPostsService: blogPostsServices,
	})

	return <PostListView {...props} />
}

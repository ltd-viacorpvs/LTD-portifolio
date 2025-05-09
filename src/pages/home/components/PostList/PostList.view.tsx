import { BlogPostCardView } from '@/components/BlogPostCard/BlogPostCard'
import { BlogPostCardSkeleton } from '@/components/BlogPostCard/BlogPostCardSkeleton'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { type PostListViewProps } from './types'

export function PostListView(props: PostListViewProps) {
	const { posts, isLoading } = props

	return (
		<section className="container xl:max-w-full mx-auto px-4 xl:px-24 py-8 pt-32">
			<header className="text-center mb-12 flex justify-between items-center">
				<h2 className="text-2xl font-bold mb-4">Blog</h2>
				<Link to={'/blog'}>
					<button
						className="px-14 py-4 bg-[#EE325D] rounded-full text-white font-bold 
					hover:bg-[#EE325D]/80 transition duration-300 ease-in-out
					flex items-center justify-center gap-2 cursor-pointer
					"
					>
						<span className="text-base">Lê mais artigos</span>
						<ArrowRight size={24} />
					</button>
				</Link>
			</header>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{posts?.map((post) => (
					<BlogPostCardView
						key={post.id}
						category={post.category}
						title={post.title}
						excerpt={post.excerpt}
						slug={post.slug}
						id={post.id}
						coverImage={post.coverImage}
						readTime={post.readTime}
					/>
				))}
				{posts?.map((post) => (
					<BlogPostCardView
						key={post.id}
						category={post.category}
						title={post.title}
						excerpt={post.excerpt}
						slug={post.slug}
						id={post.id}
						coverImage={post.coverImage}
						readTime={post.readTime}
					/>
				))}
				{posts?.map((post) => (
					<BlogPostCardView
						key={post.id}
						category={post.category}
						title={post.title}
						excerpt={post.excerpt}
						slug={post.slug}
						id={post.id}
						coverImage={post.coverImage}
						readTime={post.readTime}
					/>
				))}
				{isLoading &&
					Array.from({ length: 3 }, (_, index) => index + 1).map((item) => (
						<BlogPostCardSkeleton key={item} />
					))}
			</div>
		</section>
	)
}

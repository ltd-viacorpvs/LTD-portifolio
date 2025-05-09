import { BlogPostCardView } from '@/components/BlogPostCard/BlogPostCard'
import { BlogPostCardSkeleton } from '@/components/BlogPostCard/BlogPostCardSkeleton'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { type BlogViewProps } from './types'

export function BlogView(props: BlogViewProps) {
	const { posts, isLoading } = props

	return (
		<main className="min-h-screen">
			<div className="mb-16 sm:mb-24 md:mb-32 flex flex-col px-6 sm:px-10 md:px-14 pt-10 sm:pt-16 md:pt-20">
				<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 sm:mb-10 md:mb-14">
					Blog
				</h1>
				<div className="bg-[#0F62FE] w-full h-0.5 mb-12 sm:mb-16 md:mb-20" />
				<p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center px-4">
					"Conhecimento só faz sentido quando é compartilhado."
				</p>
			</div>

			<div
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6
                container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 
                py-8 pt-0"
			>
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
					Array.from({ length: 6 }, (_, index) => index + 1).map((item) => (
						<BlogPostCardSkeleton key={item} />
					))}
			</div>
		</main>
	)
}

import { Link } from 'react-router-dom'
import { type BlogPostCardProps } from './types'

export function BlogPostCardView(props: BlogPostCardProps) {
	const { id, category, title, excerpt, slug, coverImage, readTime } = props

	return (
		<Link to={`/blog/post/${slug}`}>
			<div key={id} className="h-[450px] flex flex-col">
				<div className="relative w-full h-60 overflow-hidden">
					<img
						src={coverImage.url}
						alt={title}
						className="w-full h-full object-cover rounded-lg"
					/>
				</div>

				<div className="p-4 flex flex-col h-full ">
					<div className="flex flex-col flex-1">
						<div className="mb-3">
							<span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
								{category}
							</span>
						</div>

						<h2 className="text-xl font-bold mb-2">{title}</h2>

						<p className="text-gray-600 flex-1 line-clamp-6 ">{excerpt}</p>
					</div>

					<div className="flex items-center justify-between pt-3 border-t">
						<span className="text-sm text-gray-500">{readTime}</span>
					</div>
				</div>
			</div>
		</Link>
	)
}

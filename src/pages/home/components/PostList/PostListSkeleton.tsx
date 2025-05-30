import React from 'react'
import { BlogPostCardSkeleton } from '@/components/BlogPostCard/BlogPostCardSkeleton'

export function PostListSkeleton() {
  return (
    <section id="blog" className="container xl:max-w-full mx-auto px-4 xl:px-24 py-8 pt-32">
      <header className="text-center mb-12 flex justify-between items-center">
        {/* Título skeleton */}
        <div className="h-8 w-24 bg-gray-200 animate-pulse rounded-md"></div>
        
        {/* Botão skeleton */}
        <div className="h-14 w-44 bg-[#EE325D]/30 animate-pulse rounded-full"></div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Usamos o BlogPostCardSkeleton existente para exibir o loading state */}
        {Array.from({ length: 3 }, (_, index) => index + 1).map((item) => (
          <BlogPostCardSkeleton key={item} />
        ))}
      </div>
    </section>
  )
}

export default PostListSkeleton
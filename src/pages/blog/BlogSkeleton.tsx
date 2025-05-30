import { BlogPostCardSkeleton } from '@/components/BlogPostCard/BlogPostCardSkeleton'
import React from 'react'

export function BlogSkeleton() {
  return (
    <main className="min-h-screen">
      <div className="mb-16 sm:mb-24 md:mb-32 flex flex-col px-6 sm:px-10 md:px-14 pt-10 sm:pt-16 md:pt-20">
        {/* Título skeleton */}
        <div className="h-12 sm:h-14 md:h-16 bg-gray-200 animate-pulse rounded-md w-1/3 mb-8 sm:mb-10 md:mb-14" />
        
        {/* Linha azul skeleton */}
        <div className="bg-gray-200 animate-pulse w-full h-0.5 mb-12 sm:mb-16 md:mb-20" />
        
        {/* Texto de citação skeleton */}
        <div className="flex flex-col items-center gap-3 px-4">
          <div className="h-8 md:h-10 bg-gray-200 animate-pulse rounded-md w-3/4" />
          <div className="h-8 md:h-10 bg-gray-200 animate-pulse rounded-md w-1/2" />
        </div>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6
                container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 
                py-8 pt-0"
      >
        {/* Posts skeletons */}
        {    Array.from({ length: 6 }, (_, index) => index + 1).map((item) => (
                                <BlogPostCardSkeleton key={item} />
                            ))}
      </div>
    </main>
  )
}
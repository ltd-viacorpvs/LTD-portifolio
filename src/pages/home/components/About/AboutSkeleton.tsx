import React from 'react'

export function AboutSkeleton() {
  return (
    <section className="bg-white py-8 md:py-16 lg:py-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-10 lg:gap-16">
          <div className="flex flex-col gap-6 md:gap-8 flex-1">
            {/* Título skeleton */}
            <div className="h-10 md:h-12 lg:h-14 bg-gray-200 animate-pulse rounded-md w-1/3"></div>
            
            {/* Parágrafo skeleton */}
            <div className="space-y-3">
              <div className="h-5 md:h-6 bg-gray-200 animate-pulse rounded-md w-full"></div>
              <div className="h-5 md:h-6 bg-gray-200 animate-pulse rounded-md w-full"></div>
              <div className="h-5 md:h-6 bg-gray-200 animate-pulse rounded-md w-4/5"></div>
            </div>

            {/* Imagem skeleton */}
            <div className="relative w-full aspect-[4/5] mt-4 md:mt-6 shadow-lg rounded-lg overflow-hidden bg-gray-200 animate-pulse"></div>
          </div>

          <div className="flex flex-col gap-6 md:gap-8 flex-1 mt-8 lg:mt-0">
            {/* Imagem skeleton */}
            <div className="relative w-full aspect-[5/4] shadow-lg rounded-lg overflow-hidden order-2 lg:order-1 bg-gray-200 animate-pulse"></div>

            {/* Parágrafos skeleton */}
            <div className="space-y-3 order-1 lg:order-2 mt-0 lg:mt-6">
              <div className="h-5 md:h-6 bg-gray-200 animate-pulse rounded-md w-full"></div>
              <div className="h-5 md:h-6 bg-gray-200 animate-pulse rounded-md w-full"></div>
              <div className="h-5 md:h-6 bg-gray-200 animate-pulse rounded-md w-5/6"></div>
            </div>

            <div className="space-y-3 order-3">
              <div className="h-5 md:h-6 bg-gray-200 animate-pulse rounded-md w-full"></div>
              <div className="h-5 md:h-6 bg-gray-200 animate-pulse rounded-md w-full"></div>
              <div className="h-5 md:h-6 bg-gray-200 animate-pulse rounded-md w-4/5"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

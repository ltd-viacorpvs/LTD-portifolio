import React from 'react'

export const HeroSectionSkeleton = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background skeleton */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-gray-800 to-gray-700 animate-pulse"></div>

      <div className="container mx-auto px-6 md:px-10 lg:px-16 relative z-10 flex flex-col justify-between min-h-screen py-10 md:py-16">
        <div className="max-w-3xl mb-8 md:mb-0">
          {/* Título skeleton */}
          <div className="h-10 sm:h-12 md:h-14 bg-gray-400/30 rounded-lg mb-6 w-4/5"></div>
          <div className="h-10 sm:h-12 md:h-14 bg-gray-400/30 rounded-lg mb-6 w-3/5"></div>
          
          {/* Parágrafo skeleton */}
          <div className="h-6 md:h-7 bg-gray-400/30 rounded-lg mb-3 max-w-2xl w-full"></div>
          <div className="h-6 md:h-7 bg-gray-400/30 rounded-lg mb-8 max-w-2xl w-4/5"></div>

          {/* Botões skeleton */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <div className="h-12 bg-teal-500/50 rounded-lg w-36 sm:w-40"></div>
            <div className="h-12 bg-white/10 rounded-lg w-36 sm:w-40"></div>
          </div>
        </div>

        {/* Features skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-4 mt-12 md:mt-0">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="flex items-center gap-4">
              {/* Ícone skeleton */}
              <div className="w-12 h-12 bg-gray-400/30 rounded-md shrink-0"></div>
              {/* Texto skeleton */}
              <div className="h-7 bg-gray-400/30 rounded-lg w-24"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HeroSectionSkeleton
import React from 'react'

export function WhyJoinUsSkeleton() {
  return (
    <div className="py-24 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        {/* Título e subtítulo skeleton */}
        <div className="text-center mb-14">
          <div className="h-10 bg-gray-200 animate-pulse rounded-md w-3/4 max-w-md mx-auto mb-4"></div>
          <div className="h-1 w-20 rounded-full bg-teal-500/50 animate-pulse mx-auto"></div>
          <div className="mt-4 h-5 bg-gray-200 animate-pulse rounded-md w-full max-w-lg mx-auto"></div>
          <div className="mt-2 h-5 bg-gray-200 animate-pulse rounded-md w-2/3 max-w-md mx-auto"></div>
        </div>

        {/* Banner com cartões skeleton */}
        <div className="relative rounded-xl overflow-hidden mb-16 bg-gray-700 animate-pulse">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 p-8 md:p-12">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                {/* Ícone skeleton */}
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-5">
                  <div className="w-8 h-8 bg-teal-400/30 rounded-md"></div>
                </div>
                
                {/* Título skeleton */}
                <div className="h-7 bg-white/30 animate-pulse rounded-md w-3/4 mb-3"></div>
                
                {/* Texto skeleton */}
                <div className="space-y-2">
                  <div className="h-4 bg-white/20 animate-pulse rounded-md w-full"></div>
                  <div className="h-4 bg-white/20 animate-pulse rounded-md w-full"></div>
                  <div className="h-4 bg-white/20 animate-pulse rounded-md w-4/5"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action box skeleton */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white p-8 rounded-xl shadow-lg">
          <div className="text-center md:text-left">
            <div className="h-8 bg-gray-200 animate-pulse rounded-md w-48 md:w-64 mb-2"></div>
            <div className="h-8 bg-gray-200 animate-pulse rounded-md w-40 md:w-56"></div>
          </div>

          {/* Botão skeleton */}
          <div className="h-12 w-40 bg-teal-500/50 animate-pulse rounded-full"></div>
        </div>

        {/* Logos skeleton */}
        <div className="mt-16 flex flex-col md:flex-row justify-evenly items-center gap-10">
          <div className="h-16 md:h-20 w-32 md:w-40 bg-gray-200 animate-pulse rounded-md"></div>
          <div className="h-16 md:h-20 w-32 md:w-40 bg-gray-200 animate-pulse rounded-md"></div>
        </div>
      </div>
    </div>
  )
}

export default WhyJoinUsSkeleton
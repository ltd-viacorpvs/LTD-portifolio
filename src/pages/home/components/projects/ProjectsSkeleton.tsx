import React from 'react'
import { ProjectCardSkeleton } from './components/projectCard/ProjectCardSkeleton'

export function ProjectsSkeleton() {
  return (
    <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 py-20">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="relative mb-16">
          {/* Título skeleton */}
          <div className="h-10 w-48 bg-white/20 animate-pulse rounded-md"></div>
          {/* Linha decorativa skeleton */}
          <div className="mt-2 h-1 w-20 rounded-full bg-teal-500/50 animate-pulse"></div>
          {/* Descrição skeleton */}
          <div className="mt-4 max-w-xl">
            <div className="h-5 w-full bg-white/20 animate-pulse rounded-md mb-2"></div>
            <div className="h-5 w-3/4 bg-white/20 animate-pulse rounded-md"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Usamos o ProjectCardSkeleton existente para exibir o loading state */}
          {Array.from({ length: 4 }, (_, index) => index + 1).map((item) => (
            <ProjectCardSkeleton key={item} />
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          {/* Botão "Ver mais projetos" skeleton */}
          <div className="w-44 h-12 bg-teal-600/50 animate-pulse rounded-lg"></div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsSkeleton
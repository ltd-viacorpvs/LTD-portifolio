import { AboutSkeleton } from "./components/About/AboutSkeleton"
import HeroSectionSkeleton from "./components/HeroSection/HeroSectionSkeleton"
import PostListSkeleton from "./components/PostList/PostListSkeleton"
import ProjectsSkeleton from "./components/projects/ProjectsSkeleton"
import WhyJoinUsSkeleton from "./components/WhyJoinUs/WhyJoinUsSkeleton"

export function HomeSkeleton() {
  return (
    <div className="min-h-screen">
      {/* Hero Section Skeleton */}
      <HeroSectionSkeleton />

      {/* About Section Skeleton */}
      <AboutSkeleton />

      {/* Projects Section Skeleton */}
      <ProjectsSkeleton />

      {/* Post List Section Skeleton */}
      <PostListSkeleton />

      {/* Why Join Us Section Skeleton */}
      <WhyJoinUsSkeleton />
    </div>
  )
}

export default HomeSkeleton
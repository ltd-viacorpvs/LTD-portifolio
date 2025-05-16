import { About } from './components/About'
import { HeroSection } from './components/HeroSection'
import { PostList } from './components/PostList/PostList'
import { Projects } from './components/projects'

export const Home = () => {
	return (
		<>
			<HeroSection />
			<About />
			<Projects />
			<PostList />
		</>
	)
}

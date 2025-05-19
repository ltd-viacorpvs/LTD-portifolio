import { About } from './components/About'
import { HeroSection } from './components/HeroSection'
import { PostList } from './components/PostList/PostList'
import { WhyJoinUs } from './components/WhyJoinUs'
import { Projects } from './components/projects'

export const Home = () => {
	return (
		<>
			<HeroSection />
			<About />
			<Projects />
			<PostList />
			<WhyJoinUs />
		</>
	)
}

import { About } from './components/About'
import { PostList } from './components/PostList/PostList'
import { Projects } from './components/projects'

export const Home = () => {
	return (
		<>
			<About />
			<Projects />
			<PostList />
		</>
	)
}

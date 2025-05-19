import { createBrowserRouter } from 'react-router-dom'
import { NotFound } from './components/notFound/notFound'
import { AppLayout } from './layouts/AppLayout'
import { Blog } from './pages/blog/Blog'
import { Home } from './pages/home/Home'
import { PostDetail } from './pages/post/PostDetail'
import { ProjectDetails } from './pages/projectDetails/ProjectDetails'
import { Projetos } from './pages/projetos/Projetos'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <AppLayout />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/blog',
				element: <Blog />,
			},
			{
				path: '/blog/post/:slug',
				element: <PostDetail />,
			},
			{
				element: <Projetos />,
				path: 'projetos',
			},
			{
				element: <ProjectDetails />,
				path: 'projetos/:slug',
			},
			{
				element: <NotFound />,
				path: '*',
			},
		],
	},
])

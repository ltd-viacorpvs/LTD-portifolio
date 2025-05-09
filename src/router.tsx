import { createBrowserRouter } from 'react-router-dom'
import { NotFound } from './components/notFound/notFound'
import { AppLayout } from './layouts/AppLayout'
import { Blog } from './pages/blog/Blog'
import { Home } from './pages/home/Home'
import { PostDetail } from './pages/post/PostDetail'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <AppLayout />,
		children: [
			{
				index: true,
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
				element: <NotFound />,
				path: '*',
			},
		],
	},
])

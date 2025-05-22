import React, { Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { SpinnerLoading } from './components/SpinnerLoading/SpinnerLoading'
import { NotFound } from './components/notFound/notFound'
import { AppLayout } from './layouts/AppLayout'

const Home = React.lazy(async () => {
	const module = await import('./pages/home/Home')
	return { default: module.Home }
})

const Blog = React.lazy(async () => {
	const module = await import('./pages/blog/Blog')
	return { default: module.Blog }
})

const PostDetail = React.lazy(async () => {
	const module = await import('./pages/post/PostDetail')
	return { default: module.PostDetail }
})

const Projetos = React.lazy(async () => {
	const module = await import('./pages/projetos/Projetos')
	return { default: module.Projetos }
})

const ProjectDetails = React.lazy(async () => {
	const module = await import('./pages/projectDetails/ProjectDetails')
	return { default: module.ProjectDetails }
})

const Contacts = React.lazy(async () => {
	const module = await import('./pages/contacts')
	return { default: module.Contacts }
})

export const router = createBrowserRouter([
	{
		path: '/',
		element: <AppLayout />,
		children: [
			{
				path: '/',
				element: (
					<Suspense fallback={<SpinnerLoading />}>
						<Home />
					</Suspense>
				),
			},
			{
				path: '/blog',
				element: (
					<Suspense fallback={<SpinnerLoading />}>
						<Blog />
					</Suspense>
				),
			},
			{
				path: '/blog/post/:slug',
				element: (
					<Suspense fallback={<SpinnerLoading />}>
						<PostDetail />
					</Suspense>
				),
			},
			{
				path: 'projetos',
				element: (
					<Suspense fallback={<SpinnerLoading />}>
						<Projetos />
					</Suspense>
				),
			},
			{
				path: 'projetos/:slug',
				element: (
					<Suspense fallback={<SpinnerLoading />}>
						<ProjectDetails />
					</Suspense>
				),
			},
			{
				path: 'contato',
				element: (
					<Suspense fallback={<SpinnerLoading />}>
						<Contacts />
					</Suspense>
				),
			},
			{
				path: '*',
				element: (
					<Suspense fallback={<SpinnerLoading />}>
						<NotFound />
					</Suspense>
				),
			},
		],
	},
])

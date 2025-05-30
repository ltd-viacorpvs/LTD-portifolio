import React, { Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute.tsx'
import { SpinnerLoading } from './components/SpinnerLoading/SpinnerLoading'
import { NotFound } from './components/notFound/notFound'
import { AdminLayout } from './layouts/AdminLayout/AdminLayout'
import { AppLayout } from './layouts/AppLayout'
import { ContactsViewSkeleton } from './pages/admin/contacts/ContactsViewSkeleton.tsx'
import { BlogSkeleton } from './pages/blog/BlogSkeleton.tsx'
import { PostDetailSkeleton } from './pages/post/PostDetailSkeleton.tsx'
import { ProjetosSkeleton } from './pages/projetos/ProjetosSkeleton.tsx'
import { ProjectDetailsSkeleton } from './pages/projectDetails/ProjectDetailsSkeleton.tsx'
import HomeSkeleton from './pages/home/HomeSkeleton.tsx'


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

// Auth Pages
const Login =  React.lazy(async () => {
	const module = await import('./pages/login/login.tsx')
	return { default: module.login }
})

// Admin Pages
const ContactsAdmin = React.lazy(async () => {
	const module = await import('./pages/admin/contacts/Contacts.tsx')
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
					<Suspense fallback={<HomeSkeleton />}>
						<Home />
					</Suspense>
				),
			},
			{
				path: '/blog',
				element: (
					<Suspense fallback={<BlogSkeleton/>}>
						<Blog />
					</Suspense>
				),
			},
			{
				path: '/blog/post/:slug',
				element: (
					<Suspense fallback={<PostDetailSkeleton/>}>
						<PostDetail />
					</Suspense>
				),
			},
			{
				path: 'projetos',
				element: (
					<Suspense fallback={<ProjetosSkeleton />}>
						<Projetos />
					</Suspense>
				),
			},
			{
				path: 'projetos/:slug',
				element: (
					<Suspense fallback={<ProjectDetailsSkeleton />}>
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
		],
	},

	
	{
		path: '/login',
		element: (
			<Suspense fallback={<SpinnerLoading />}>
				<Login />
			</Suspense>
		),
	},

	{
		path: '/admin',
		element: (
			<ProtectedRoute>
				<AdminLayout />
			</ProtectedRoute>
		),
		children: [
			{
				path: '',
				element: (
					<Suspense fallback={<ContactsViewSkeleton />}>
						<ContactsAdmin />
					</Suspense>
				),
			},
		
		],
	},

	{
		path: '*',
		element: (
			<Suspense fallback={<SpinnerLoading />}>
				<NotFound />
			</Suspense>
		),
	},
])

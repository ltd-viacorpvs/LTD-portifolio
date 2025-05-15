import { Footer } from '@/components/footer'
import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

export const AppLayout = () => {
	const { pathname } = useLocation()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])

	return (
		<div className="flex min-h-screen flex-col antialiased">
			<Outlet />
			<Footer />
		</div>
	)
}

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Sidebar } from '@/components/sidebar'
import { useAnalytics } from '@/hooks/useAnalytics/useAnalytics'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

export const AppLayout = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false)
	const { pathname } = useLocation()

	useAnalytics()

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen)
	}

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])

	return (
		<div className="flex min-h-screen flex-col antialiased">
			<Header toggleSidebar={toggleSidebar} />
			<Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
			<main className="flex-1">
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}

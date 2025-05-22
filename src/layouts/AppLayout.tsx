import { Footer } from '@/components/footer'
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
			<header className="bg-white p-4 border-b border-gray-200 shadow-md">
				<div className="container mx-auto flex justify-between items-center">
					<div className="flex items-center space-x-4">
						<p>LOGO</p>
					</div>

					{/* Desktop Navigation - Mantido original */}
					<nav className="hidden md:flex space-x-6 md:items-center">
						<a href="#" className="text-gray-800 hover:text-blue-600">
							Home
						</a>
						<a href="#sobre" className="text-gray-800 hover:text-blue-600">
							Sobre
						</a>
						<a href="#projetos" className="text-gray-800 hover:text-blue-600">
							Projetos
						</a>
						<a href="#blog" className="text-gray-800 hover:text-blue-600">
							Blog
						</a>
						<a
							href="#contate-nos"
							className="text-white bg-[#ee325d] p-4 rounded-4xl font-medium flex items-center"
						>
							Contate-nos <span className="ml-1">→</span>
						</a>
					</nav>

					{/* Mobile Hamburger Button */}
					<button
						className="md:hidden text-gray-800 focus:outline-none"
						onClick={toggleSidebar}
					>
						<Menu size={24} />
					</button>
				</div>
			</header>

			{/* Mobile Sidebar - Estilização moderna */}
			<div
				className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}
			>
				<div className="h-full flex flex-col">
					<div className="p-4 flex justify-between items-center border-b border-gray-200">
						<p className="text-xl font-semibold">LOGO</p>
						<button
							className="text-gray-800 hover:bg-gray-100 p-2 rounded-full transition-colors"
							onClick={toggleSidebar}
						>
							<X size={24} />
						</button>
					</div>

					<nav className="flex-1 flex flex-col p-4 space-y-2 overflow-y-auto">
						<a
							href="#"
							className="text-gray-700 hover:bg-gray-200 bg-gray-100 px-4 py-3 rounded-lg font-medium transition-all flex items-center"
							onClick={toggleSidebar}
						>
							<span className="w-2 h-2 bg-[#ee325d] rounded-full mr-3"></span>
							Home
						</a>
						<a
							href="#sobre"
							className="text-gray-700 hover:bg-gray-200 bg-gray-100 px-4 py-3 rounded-lg font-medium transition-all flex items-center"
							onClick={toggleSidebar}
						>
							<span className="w-2 h-2 bg-[#ee325d] rounded-full mr-3"></span>
							Sobre
						</a>
						<a
							href="#projetos"
							className="text-gray-700 hover:bg-gray-200 bg-gray-100 px-4 py-3 rounded-lg font-medium transition-all flex items-center"
							onClick={toggleSidebar}
						>
							<span className="w-2 h-2 bg-[#ee325d] rounded-full mr-3"></span>
							Projetos
						</a>
						<a
							href="#blog"
							className="text-gray-700 hover:bg-gray-200 bg-gray-100 px-4 py-3 rounded-lg font-medium transition-all flex items-center"
							onClick={toggleSidebar}
						>
							<span className="w-2 h-2 bg-[#ee325d] rounded-full mr-3"></span>
							Blog
						</a>
						<div className="pt-4 mt-4 border-t border-gray-200">
							<a
								href="#contate-nos"
								className="text-white bg-[#ee325d] hover:bg-[#d62b53] p-4 rounded-4xl font-medium flex items-center justify-center transition-colors shadow-md hover:shadow-lg"
								onClick={toggleSidebar}
							>
								Contate-nos <span className="ml-1">→</span>
							</a>
						</div>
					</nav>
				</div>
			</div>

			<div className="flex-1">
				<Outlet />
			</div>
			<Footer />
		</div>
	)
}

import { Footer } from '@/components/footer'
import { Outlet } from 'react-router-dom'

export const AppLayout = () => {
	return (
		<div className="flex min-h-screen flex-col antialiased">
				<header className="bg-white p-4 border-b border-gray-200 shadow-md">
					<div className="container mx-auto flex justify-between items-center">
						<div className="flex items-center space-x-4">
							<p>LOGO</p>
						</div>
						
						<nav className="hidden md:flex space-x-6">
							<a href="#" className="text-gray-800 hover:text-blue-600">Home</a>
							<a href="#" className="text-gray-800 hover:text-blue-600">Sobre</a>
							<a href="#" className="text-gray-800 hover:text-blue-600">Projetos</a>
							<a href="#" className="text-gray-800 hover:text-blue-600">Blog</a>
							<a href="#" className="text-blue-600 font-medium flex items-center">
								Contact-nos <span className="ml-1">→</span>
							</a>
						</nav>
					</div>
      </header>
			<Outlet />
			<Footer />
		</div>
	)
}

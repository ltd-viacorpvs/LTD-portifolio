import React from 'react';
import { Menu } from 'lucide-react'; // Certifique-se de ter lucide-react instalado ou use outro ícone
import { Link } from "react-router-dom"

interface HeaderProps {
	toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
	return (
		<header className="bg-white p-4 border-b border-gray-200 shadow-md">
			<div className="container mx-auto flex justify-between items-center">
				<div className="flex items-center space-x-4">
					<p>LOGO</p>
				</div>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex space-x-6 md:items-center">
					<Link to="/" className="text-gray-800 hover:text-blue-600">
						Home
					</Link>
					<a href="#sobre" className="text-gray-800 hover:text-blue-600">
						Sobre
					</a>
					<a href="#projetos" className="text-gray-800 hover:text-blue-600">
						Projetos
					</a>
					<a href="#blog" className="text-gray-800 hover:text-blue-600">
						Blog
					</a>
					<Link
						to="/contato"
						className="text-white bg-[#ee325d] p-4 rounded-4xl font-medium flex items-center"
					>
						Contate-nos <span className="ml-1">→</span>
					</Link>
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
	);
};

export default Header;
export { Header }

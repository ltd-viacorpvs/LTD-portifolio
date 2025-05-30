import React from 'react';
import { X } from 'lucide-react';

interface SidebarProps {
	isSidebarOpen: boolean;
	toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, toggleSidebar }) => {
	return (
		<div
			className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl transform ${
				isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
			} transition-transform duration-300 ease-in-out md:hidden`}
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
					{[
						{ href: '#', label: 'Home' },
						{ href: '#sobre', label: 'Sobre' },
						{ href: '#projetos', label: 'Projetos' },
						{ href: '#blog', label: 'Blog' },
					].map(({ href, label }) => (
						<a
							key={label}
							href={href}
							className="text-gray-700 hover:bg-gray-200 bg-gray-100 px-4 py-3 rounded-lg font-medium transition-all flex items-center"
							onClick={toggleSidebar}
						>
							<span className="w-2 h-2 bg-[#ee325d] rounded-full mr-3"></span>
							{label}
						</a>
					))}

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
	);
};

export default Sidebar;
export { Sidebar }

import React, { useState, useEffect } from 'react';
import { Menu, ArrowRight } from 'lucide-react';
import { Link } from "react-router-dom"

interface HeaderProps {
    toggleSidebar: () => void;
}

const Header = ({ toggleSidebar }:HeaderProps) => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 80);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`transition-all duration-500 ease-in-out ${
            isSticky 
                ? 'fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 transform translate-y-0' 
                : 'relative bg-white shadow-sm border-b border-gray-50'
        }`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 lg:h-20">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center">
							<img
								src="./preview.png"
								alt="LTD Logo"
								className="h-12 md:h-14 lg:h-16 object-contain hover:scale-105 transition-transform duration-300 "
							/>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                                           
                        <Link 
                            to="/" 
                            className="relative text-gray-700 hover:text-[#0F62FE] font-medium transition-all duration-300 group"
                        >
                            Home
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0F62FE] transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <a 
                            href="#sobre" 
                            className="relative text-gray-700 hover:text-[#0F62FE] font-medium transition-all duration-300 group"
                        >
                            Sobre
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0F62FE] transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <a 
                            href="#projetos" 
                            className="relative text-gray-700 hover:text-[#0F62FE] font-medium transition-all duration-300 group"
                        >
                            Projetos
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0F62FE] transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <a 
                            href="#blog" 
                            className="relative text-gray-700 hover:text-[#0F62FE] font-medium transition-all duration-300 group"
                        >
                            Blog
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0F62FE] transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        
                        <Link
                            to="/contato"
                            className="ml-4 inline-flex items-center gap-2 bg-gradient-to-r from-[#ee325d] to-[#d12a4f] text-white px-6 py-2.5 rounded-full font-medium shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 group"
                        >
                            Contate-nos 
                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </nav>

                    {/* Mobile Navigation */}
                    <div className="lg:hidden flex items-center space-x-4">
                        <Link
                            to="/contato"
                            className="inline-flex items-center gap-1 bg-gradient-to-r from-[#ee325d] to-[#d12a4f] text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            Contato
                            <ArrowRight className="h-3 w-3" />
                        </Link>
                        
                        <button
                            className="text-gray-700 hover:text-[#ee325d] focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition-all duration-300"
                            onClick={toggleSidebar}
                        >
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
export { Header }
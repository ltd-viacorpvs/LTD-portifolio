import { ArrowRight, Code, Rocket, Smartphone } from 'lucide-react'
import { Link } from 'react-router-dom'

export const HeroSection = () => {
	return (
		<div className="relative min-h-screen flex items-center">
			<div className="absolute inset-0 z-0">
				<img
					src="/hero-cover.jpg"
					alt="LTD Cover"
					className="w-full h-full object-cover"
					loading="eager"
					fetchPriority="high"
				/>
				<div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70"></div>
			</div>

			<div className="container mx-auto px-6 md:px-10 lg:px-16 relative z-10 flex flex-col justify-between min-h-screen py-10 md:py-16">
				<div className="max-w-3xl mb-8 md:mb-0">
					<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
						Laboratório de Transformação Digital
					</h1>
					<p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
						Transformando ideias em soluções digitais impactantes para os
						desafios do mundo moderno.
					</p>

					<div className="flex flex-col sm:flex-row gap-4 mt-8">
						<Link
							to="/projetos"
							className="group flex items-center justify-center gap-2 rounded-lg bg-teal-600 px-6 py-3 text-white transition-all duration-300 hover:bg-teal-700 text-center"
						>
							<span className="font-medium">Ver projetos</span>
							<ArrowRight
								size={18}
								className="transition-transform duration-300 group-hover:translate-x-1"
							/>
						</Link>

						<Link
							to="/contato"
							className="flex items-center justify-center gap-2 rounded-lg bg-white/10 backdrop-blur-sm px-6 py-3 text-white transition-all duration-300 hover:bg-white/20 text-center"
						>
							<span className="font-medium">Entre em contato</span>
						</Link>
					</div>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-4 mt-12 md:mt-0">
					<div className="flex items-center gap-4">
						<div className="w-12 h-12 grid place-items-center bg-white rounded-md shrink-0">
							<Smartphone className="text-gray-800" size={24} />
						</div>
						<span className="text-white font-medium text-lg">Apps Mobile</span>
					</div>

					<div className="flex items-center gap-4">
						<div className="w-12 h-12 grid place-items-center bg-white rounded-md shrink-0">
							<Code className="text-gray-800" size={24} />
						</div>
						<span className="text-white font-medium text-lg">
							Desenvolvimento
						</span>
					</div>

					<div className="flex items-center gap-4">
						<div className="w-12 h-12 grid place-items-center bg-white rounded-md shrink-0">
							<Rocket className="text-gray-800" size={24} />
						</div>
						<span className="text-white font-medium text-lg">Startups</span>
					</div>
				</div>
			</div>
		</div>
	)
}

import { ArrowRight, Cpu, Handshake, Sprout } from 'lucide-react'
import { Link } from 'react-router-dom'

export const WhyJoinUs = () => {
	return (
		<div className="py-24 bg-gradient-to-br from-white to-gray-50">
			<div className="container mx-auto px-6 md:px-10 lg:px-16">
				<div className="text-center mb-14">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900">
						Por que fazer parte do LTD?
					</h2>
					<div className="mt-2 h-1 w-20 rounded-full bg-teal-500 mx-auto"></div>
					<p className="mt-4 text-gray-600 max-w-2xl mx-auto">
						Descubra como o Laboratório de Transformação Digital pode
						impulsionar seu desenvolvimento profissional e pessoal
					</p>
				</div>

				<div className="relative rounded-xl overflow-hidden mb-16">
					<div className="absolute inset-0 z-0">
						<img
							src="/meet.jpg"
							alt="Colaboração no LTD"
							className="w-full h-full object-cover"
						/>
						<div className="absolute inset-0 bg-gray-900/75"></div>
					</div>

					<div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 p-8 md:p-12">
						<div className="flex flex-col items-center text-center">
							<div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-5">
								<Handshake className="w-8 h-8 text-teal-400" />
							</div>
							<h3 className="text-xl font-semibold mb-3 text-white">
								Inovação Encontra Criatividade
							</h3>
							<p className="text-white/80">
								Faça parte de uma equipe colaborativa que prospera com inovação
								e criatividade. Incentivamos a inovação e oferecemos espaço para
								transformar ideias em realidade.
							</p>
						</div>

						<div className="flex flex-col items-center text-center">
							<div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-5">
								<Sprout className="w-8 h-8 text-teal-400" />
							</div>
							<h3 className="text-xl font-semibold mb-3 text-white">
								Crescimento Pessoal
							</h3>
							<p className="text-white/80">
								No LTD, incentivamos o crescimento contínuo. Mesmo sendo um
								projeto voluntário, oferecemos um ambiente de aprendizado e
								evolução constante.
							</p>
						</div>

						<div className="flex flex-col items-center text-center">
							<div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-5">
								<Cpu className="w-8 h-8 text-teal-400" />
							</div>
							<h3 className="text-xl font-semibold mb-3 text-white">
								Tecnologias Avançadas
							</h3>
							<p className="text-white/80">
								Trabalhe com as tecnologias mais recentes e esteja na vanguarda
								das tendências do setor. Somos movidos pela paixão em criar
								soluções inovadoras e transformadoras.
							</p>
						</div>
					</div>
				</div>

				<div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white p-8 rounded-xl shadow-lg">
					<div className="text-center md:text-left">
						<h3 className="text-2xl md:text-3xl font-bold text-gray-900">
							Quer conhecer mais
							<br className="hidden md:block" /> sobre o projeto?
						</h3>
					</div>

					<Link
						to="/contato"
						className="group flex items-center gap-2 rounded-full bg-teal-600 px-8 py-4 text-white transition-all duration-300 hover:bg-teal-700"
					>
						<span className="font-medium">Contate-nos</span>
						<ArrowRight
							size={18}
							className="transition-transform duration-300 group-hover:translate-x-1"
						/>
					</Link>
				</div>

				<div className="mt-16 flex flex-col md:flex-row justify-evenly items-center gap-10">
					<img
						src="./estacio-logo.png"
						alt="Estácio Logo"
						className="h-16 md:h-20 object-contain opacity-80 hover:opacity-100 transition-opacity"
					/>
					<img
						src="./ltd-logo.png"
						alt="LTD Logo"
						className="h-16 md:h-20 object-contain opacity-80 hover:opacity-100 transition-opacity"
					/>
				</div>
			</div>
		</div>
	)
}

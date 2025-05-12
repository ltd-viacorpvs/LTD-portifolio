import { FacebookIcon, InstagramIcon, TwitterIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

export const Footer = () => {
	return (
		<footer className="bg-[#001F66] w-full px-4 md:px-8 lg:px-28 py-8 lg:py-16">
			<div className="container mx-auto">
				<div className="flex flex-col lg:flex-row gap-8">
					<div className="flex-1 flex flex-col gap-4">
						<strong className="text-white text-2xl">LTD.</strong>
						<p className="text-white text-[2rem] font-bold">
							Laboratório de Transformação Digital.
						</p>

						<div className="flex gap-3">
							<a
								href="#"
								className="size-10 bg-white rounded-md p-2 grid place-items-center hover:bg-gray-100 transition-colors"
								aria-label="Facebook"
							>
								<FacebookIcon size={14} className="text-[#001F66]" />
							</a>

							<a
								href="#"
								className="size-10 bg-white rounded-md p-2 grid place-items-center hover:bg-gray-100 transition-colors"
								aria-label="Twitter"
							>
								<TwitterIcon size={14} className="text-[#001F66]" />
							</a>

							<a
								href="#"
								className="size-10 bg-white rounded-md p-2 grid place-items-center hover:bg-gray-100 transition-colors"
								aria-label="Instagram"
							>
								<InstagramIcon size={14} className="text-[#001F66]" />
							</a>
						</div>
					</div>

					<div className="flex-1 flex flex-col md:flex-row justify- gap-8">
						<nav className="flex flex-col gap-2">
							<h3 className="text-white font-semibold mb-2">Navegação</h3>
							<ul className="flex flex-col gap-2">
								<li>
									<Link
										to="/"
										className="text-gray-200 hover:text-white transition-colors"
									>
										Home
									</Link>
								</li>
								<li>
									<Link
										to="/about"
										className="text-gray-200 hover:text-white transition-colors"
									>
										Sobre nós
									</Link>
								</li>
								<li>
									<Link
										to="/projetos"
										className="text-gray-200 hover:text-white transition-colors"
									>
										Projetos
									</Link>
								</li>
								<li>
									<Link
										to="/blog"
										className="text-gray-200 hover:text-white transition-colors"
									>
										Blog
									</Link>
								</li>
								<li>
									<Link
										to="/contact"
										className="text-gray-200 hover:text-white transition-colors"
									>
										Contato
									</Link>
								</li>
							</ul>
						</nav>

						<nav className="flex flex-col gap-2">
							<h3 className="text-white font-semibold mb-2">Informações</h3>
							<ul className="flex flex-col gap-2">
								<li>
									<Link
										to="/privacidade"
										className="text-gray-200 hover:text-white transition-colors"
									>
										Política de Privacidade
									</Link>
								</li>
								<li>
									<Link
										to="/termos"
										className="text-gray-200 hover:text-white transition-colors"
									>
										Termos de Uso
									</Link>
								</li>
								<li>
									<Link
										to="/cookies"
										className="text-gray-200 hover:text-white transition-colors"
									>
										Cookies
									</Link>
								</li>
							</ul>
						</nav>
					</div>
				</div>

				<div className="border-t border-blue-800 mt-8 pt-8 text-gray-300 text-sm text-center">
					&copy; {new Date().getFullYear()} LTD. Todos os direitos reservados.
				</div>
			</div>
		</footer>
	)
}

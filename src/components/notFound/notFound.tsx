import { ChevronLeft } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export function NotFound() {
	return (
		<>
			<Helmet>
				<title>Página Não Encontrada</title>
				<meta
					name="description"
					content="A página que você está procurando não existe ou foi movida."
				/>
			</Helmet>

			<div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-16 max-w-3xl mx-auto">
				<h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>

				<h2 className="text-3xl font-bold mb-4">Oops! Página não encontrada</h2>
				<p className="text-gray-600 text-gray-400 mb-8 max-w-md">
					Parece que você encontrou um bug no código. Esta página não existe ou
					foi movida para outro endereço.
				</p>
				<Link
					to="/"
					className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors"
				>
					<ChevronLeft className="mr-2 h-5 w-5" />
					Voltar para a página inicial
				</Link>
			</div>
		</>
	)
}

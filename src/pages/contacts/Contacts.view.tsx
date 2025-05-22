import { ArrowLeft } from 'lucide-react'

import { Link } from 'react-router-dom'
import type { ContactsViewProps } from './types'

export function ContactsView(props: ContactsViewProps) {
	const {
		register,
		handleSubmit,
		errors,
		onSubmit,
		isSubmitting,
		maxMessageLength,
		messageCount,
	} = props

	return (
		<div className="bg-gradient-to-br from-gray-50 to-gray-100 py-10 min-h-screen">
			<div className="container mx-auto px-6 md:px-10 lg:px-16">
				<div className="relative mb-12">
					<Link
						to="/"
						className="mb-6 inline-flex items-center gap-1 text-teal-600 hover:text-teal-700 transition-colors"
					>
						<ArrowLeft size={16} />
						<span>Voltar para home</span>
					</Link>

					<h1 className="text-4xl font-bold text-gray-900">Entre em contato</h1>
					<div className="mt-2 h-1 w-20 rounded-full bg-teal-500"></div>
					<p className="mt-4 max-w-xl text-gray-600">
						Preencha o formulário abaixo para nos enviar uma mensagem.
						Entraremos em contato o mais breve possível.
					</p>
				</div>

				<div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
					<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div>
								<label
									htmlFor="firstName"
									className="block text-sm font-medium text-gray-700 mb-1"
								>
									Nome *
								</label>
								<input
									id="firstName"
									type="text"
									className={`w-full border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent`}
									{...register('firstName')}
								/>
								{errors.firstName && (
									<p className="mt-1 text-sm text-red-600">
										{errors.firstName.message}
									</p>
								)}
							</div>

							<div>
								<label
									htmlFor="lastName"
									className="block text-sm font-medium text-gray-700 mb-1"
								>
									Sobrenome *
								</label>
								<input
									id="lastName"
									type="text"
									className={`w-full border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent`}
									{...register('lastName')}
								/>
								{errors.lastName && (
									<p className="mt-1 text-sm text-red-600">
										{errors.lastName.message}
									</p>
								)}
							</div>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium text-gray-700 mb-1"
								>
									Email *
								</label>
								<input
									id="email"
									type="email"
									className={`w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent`}
									{...register('email')}
								/>
								{errors.email && (
									<p className="mt-1 text-sm text-red-600">
										{errors.email.message}
									</p>
								)}
							</div>

							<div>
								<label
									htmlFor="phone"
									className="block text-sm font-medium text-gray-700 mb-1"
								>
									Telefone *
								</label>
								<input
									id="phone"
									type="tel"
									placeholder="(00) 00000-0000"
									className={`w-full border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent`}
									{...register('phone')}
								/>
								{errors.phone && (
									<p className="mt-1 text-sm text-red-600">
										{errors.phone.message}
									</p>
								)}
							</div>
						</div>

						<div>
							<label
								htmlFor="message"
								className="block text-sm font-medium text-gray-700 mb-1"
							>
								Mensagem *
							</label>
							<textarea
								id="message"
								rows={5}
								maxLength={maxMessageLength}
								className={`w-full border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent`}
								{...register('message')}
							></textarea>
							<div className="flex justify-between items-center mt-1">
								{errors.message && (
									<p className="text-sm text-red-600">
										{errors.message.message}
									</p>
								)}
								<span
									className={`text-xs ${messageCount >= maxMessageLength ? 'text-red-500' : 'text-gray-400'}`}
								>
									{messageCount}/{maxMessageLength}
								</span>
							</div>
						</div>

						<div className="flex justify-end">
							<button
								type="submit"
								disabled={isSubmitting}
								className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-6 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:opacity-70 disabled:cursor-not-allowed"
							>
								{isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

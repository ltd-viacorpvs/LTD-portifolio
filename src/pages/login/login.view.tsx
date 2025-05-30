import { useAuth } from '@/hooks/useAuth/useAuth'
import { auth } from '@/lib/firebase'
import { Eye, EyeOff, Loader2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import type { LoginViewProps } from './types'


export const LoginView = (props:LoginViewProps) => {
	const 
	{
        register,
        handleSubmit,
        onSubmit,
        errors,
        showPassword,
        loading,
        error,
		togglePasswordVisibility
    }
	= props

	return (
		<>
			<Helmet>
				<title>Login - LTD</title>
			</Helmet>

			<main className="flex min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100">
				<div className="w-full max-w-md mx-auto my-auto p-8">
					<div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
						<div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-center">
							<h1 className="text-3xl font-bold text-white">LTD</h1>
							<p className="text-blue-100 mt-2">
								Bem-vindo novamente! Faça login para continuar.
							</p>
						</div>

						<div className="p-8">
							{error && (
								<div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
									{error}
								</div>
							)}

							<form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
								<div>
									<label
										htmlFor="email"
										className="block text-sm font-medium text-gray-700"
									>
										Email address
									</label>
									<div className="mt-1">
										<input
											id="email"
											type="email"
											{...register('email', {
												required: 'Email is required',
												pattern: {
													value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
													message: 'Invalid email address',
												},
											})}
											className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
											placeholder="your@email.com"
											disabled={loading}
										/>
										{errors.email && (
											<p className="mt-1 text-sm text-red-600">
												{errors.email.message}
											</p>
										)}
									</div>
								</div>

								<div>
									<label
										htmlFor="password"
										className="block text-sm font-medium text-gray-700"
									>
										Password
									</label>
									<div className="mt-1 relative">
										<input
											id="password"
											type={showPassword ? 'text' : 'password'}
											{...register('password', {
												required: 'Password is required',
												minLength: {
													value: 6,
													message: 'Password must be at least 6 characters',
												},
											})}
											className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
											placeholder="••••••••"
											disabled={loading}
										/>
										<button
											type="button"
											className="absolute inset-y-0 right-0 pr-3 flex items-center"
											onClick={() => togglePasswordVisibility()}
										>
											{showPassword ? (
												<EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-500" />
											) : (
												<Eye className="h-5 w-5 text-gray-400 hover:text-gray-500" />
											)}
										</button>
									</div>
									{errors.password && (
										<p className="mt-1 text-sm text-red-600">
											{errors.password.message}
										</p>
									)}
								</div>

								<div className="flex items-center">
									<input
										id="remember-me"
										type="checkbox"
										{...register('rememberMe')}
										className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
										disabled={loading}
									/>
									<label
										htmlFor="remember-me"
										className="ml-2 block text-sm text-gray-700"
									>
										Lembrar-me
									</label>
								</div>

								<div>
									<button
										type="submit"
										disabled={loading}
										className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
									>
										{loading ? (
											<>
												<Loader2 className="w-4 h-4 mr-2 animate-spin" />
												Entrando...
											</>
										) : (
											'Entrar'
										)}
									</button>
								</div>
							</form>
						</div>
					</div>

					<div className="mt-8 text-center text-sm text-gray-500">
						<p>© {new Date().getFullYear()} LTD. All rights reserved.</p>
					</div>
				</div>
			</main>
		</>
	)
}



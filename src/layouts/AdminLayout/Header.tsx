import { useAuth } from '@/hooks/useAuth/useAuth'
import { LogOut } from 'lucide-react'
import type { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

interface HeaderProps {
	children?: ReactNode
	title?: string
}

export const Header = ({ children, title }: HeaderProps) => {
	const { logout, loading } = useAuth()
	const navigate = useNavigate()

	const handleLogout = async () => {
		await logout()
		navigate('/auth/login')
	}

	return (
		<header className="sticky top-0 z-10 flex min-h-[56.8px] max-h-[56.8px] items-center justify-between gap-1 border-b bg-background px-4">
			<div className="flex items-center gap-1">{children}</div>

			{title && <h1 className="text-xl font-semibold">{title}</h1>}

			<button
				onClick={handleLogout}
				disabled={loading}
				className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
				title="Sair"
			>
				<LogOut className="h-4 w-4" />
				<span className="hidden sm:inline">Sair</span>
			</button>
		</header>
	)
}

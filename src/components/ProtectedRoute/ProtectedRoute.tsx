import { SpinnerLoading } from '@/components/SpinnerLoading/SpinnerLoading'
import { auth } from '@/lib/firebase'
import type { ReactNode } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate } from 'react-router-dom'

interface ProtectedRouteProps {
	children: ReactNode
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
	const [user, loading] = useAuthState(auth)

	if (loading) {
		return <SpinnerLoading />
	}

	if (!user) {
		return <Navigate to="/login" replace />
	}

	return <>{children}</>
}

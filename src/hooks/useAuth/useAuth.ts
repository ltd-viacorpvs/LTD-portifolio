import { auth } from '@/lib/firebase'
import { persistentLoginDataAtom } from '@/store/atoms/auth'
import {
	type UserCredential,
	createUserWithEmailAndPassword,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth'
import { useAtom } from 'jotai'
import { useState } from 'react'

export const useAuth = () => {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)
	const [persistentData, setPersistentData] = useAtom(persistentLoginDataAtom)

	const login = async (
		email: string,
		password: string,
		rememberMe = false,
	): Promise<UserCredential | null> => {
		setLoading(true)
		setError(null)
		try {
			const result = await signInWithEmailAndPassword(auth, email, password)

			setPersistentData({
				rememberMe,
				email: rememberMe ? email : '',
			})

			return result
		} catch (error: any) {
			setError(error.message)
			return null
		} finally {
			setLoading(false)
		}
	}

	const register = async (
		email: string,
		password: string,
	): Promise<UserCredential | null> => {
		setLoading(true)
		setError(null)
		try {
			const result = await createUserWithEmailAndPassword(auth, email, password)
			return result
		} catch (error: any) {
			setError(error.message)
			return null
		} finally {
			setLoading(false)
		}
	}

	const logout = async (): Promise<void> => {
		setLoading(true)
		try {
			await signOut(auth)

			if (!persistentData.rememberMe) {
				setPersistentData({ rememberMe: false, email: '' })
			}
		} catch (error: any) {
			setError(error.message)
		} finally {
			setLoading(false)
		}
	}

	const resetPassword = async (email: string): Promise<boolean> => {
		setLoading(true)
		setError(null)
		try {
			await sendPasswordResetEmail(auth, email)
			return true
		} catch (error: any) {
			setError(error.message)
			return false
		} finally {
			setLoading(false)
		}
	}

	return {
		login,
		register,
		logout,
		resetPassword,
		loading,
		error,
		persistentData,
		clearError: () => setError(null),
	}
}

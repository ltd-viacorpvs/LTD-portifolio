import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/lib/firebase'
import { useAuth } from '@/hooks/useAuth/useAuth'

interface LoginFormData {
    email: string
    password: string
    rememberMe: boolean
}

export const useloginModel = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [user, authLoading] = useAuthState(auth)
    const { login, loading, error, clearError, persistentData } = useAuth()
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm<LoginFormData>({
        defaultValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
    })

    useEffect(() => {
        if (persistentData.rememberMe && persistentData.email) {
            setValue('email', persistentData.email)
            setValue('rememberMe', persistentData.rememberMe)
        }
    }, [persistentData, setValue])

    useEffect(() => {
        if (user && !authLoading) {
            navigate('/admin')
        }
    }, [user, authLoading, navigate])

    const onSubmit = async (data: LoginFormData) => {
        clearError()
        const result = await login(data.email, data.password, data.rememberMe)

        if (result) {
            navigate('/admin')
        }
    }

    const togglePasswordVisibility = () => {
        setShowPassword(prev => !prev)
    }

    return {
        // Form controls
        register,
        handleSubmit,
        onSubmit,
        errors,

        // Password visibility
        showPassword,
        togglePasswordVisibility,

        // Auth states
        loading: loading || authLoading,
        error,
        clearError,

        // User state
        isAuthenticated: !!user && !authLoading,
    }
}
import { formatPhoneNumber } from '@/ultils/formatPhoneNumber'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import {
	type ICreateContactMessage,
	createContactMessageSchema,
} from './schema'
import { type useContactsProps } from './types'

export function useContactsModel({ contactsServices }: useContactsProps) {
	const [isSubmitting, setIsSubmitting] = useState(false)
	const maxMessageLength = 1000

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		setValue,
		watch,
	} = useForm<ICreateContactMessage>({
		resolver: zodResolver(createContactMessageSchema),
		mode: 'onBlur',
	})

	const phoneValue = watch('phone')

	useEffect(() => {
		if (phoneValue) {
			const formattedValue = formatPhoneNumber(phoneValue)
			if (formattedValue !== phoneValue) {
				setValue('phone', formattedValue, { shouldValidate: true })
			}
		}
	}, [phoneValue, setValue])

	const onSubmit = async (data: ICreateContactMessage) => {
		try {
			setIsSubmitting(true)
			await contactsServices.sendContactMessage({
				email: data.email,
				message: data.message,
				firstName: data.firstName,
				lastName: data.lastName,
				phone: data.phone,
			})

			toast.success('Mensagem enviada com sucesso!', {
				description: 'Entraremos em contato em breve.',
				duration: 5000,
			})

			reset()
		} catch (error) {
			console.error('Erro ao enviar mensagem:', error)

			toast.error('Erro ao enviar mensagem', {
				description: 'Por favor, tente novamente mais tarde.',
				duration: 5000,
			})
		} finally {
			setIsSubmitting(false)
		}
	}

	return {
		isSubmitting,
		onSubmit,
		register,
		handleSubmit,
		errors,
		phoneValue,
		maxMessageLength,
		messageCount: watch('message')?.length || 0,
	}
}

import { Timestamp } from 'firebase/firestore'

export type ContactMessage = {
	id?: string
	firstName: string
	lastName: string
	email: string
	phone: string
	message: string
	createdAt?: Timestamp
	read?: boolean
}

export type CreateContactMessage = Omit<
	ContactMessage,
	'id' | 'createdAt' | 'read'
>

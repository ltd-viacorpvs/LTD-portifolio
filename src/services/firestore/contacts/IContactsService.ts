import type { ContactMessage, CreateContactMessage } from './types'

export interface IContactsService {
	sendContactMessage(message: CreateContactMessage): Promise<string>

	getAllMessages(): Promise<ContactMessage[]>

	getMessageById(id: string): Promise<ContactMessage | null>

	markAsRead(id: string): Promise<void>

	deleteMessage(id: string): Promise<void>
}

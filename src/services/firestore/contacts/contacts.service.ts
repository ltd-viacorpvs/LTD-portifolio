import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	getDoc,
	getDocs,
	serverTimestamp,
	updateDoc,
} from 'firebase/firestore'
import { db } from '../../../lib/firebase'
import type { IContactsService } from './IContactsService'
import type { ContactMessage, CreateContactMessage } from './types'

export class ContactsService implements IContactsService {
	private readonly collectionName = 'contacts'

	async sendContactMessage(message: CreateContactMessage): Promise<string> {
		try {
			const docRef = await addDoc(collection(db, this.collectionName), {
				...message,
				createdAt: serverTimestamp(),
				read: false,
			})

			return docRef.id
		} catch (error) {
			console.error('Erro ao enviar mensagem de contato:', error)
			throw new Error('Falha ao enviar mensagem de contato')
		}
	}

	async getAllMessages(): Promise<ContactMessage[]> {
		try {
			const querySnapshot = await getDocs(collection(db, this.collectionName))

			return querySnapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			})) as ContactMessage[]
		} catch (error) {
			console.error('Erro ao buscar mensagens de contato:', error)
			throw new Error('Falha ao buscar mensagens de contato')
		}
	}

	async getMessageById(id: string): Promise<ContactMessage | null> {
		try {
			const docRef = doc(db, this.collectionName, id)
			const docSnap = await getDoc(docRef)

			if (docSnap.exists()) {
				return {
					id: docSnap.id,
					...docSnap.data(),
				} as ContactMessage
			}

			return null
		} catch (error) {
			console.error('Erro ao buscar mensagem de contato:', error)
			throw new Error('Falha ao buscar mensagem de contato')
		}
	}

	async markAsRead(id: string): Promise<void> {
		try {
			const docRef = doc(db, this.collectionName, id)
			await updateDoc(docRef, {
				read: true,
			})
		} catch (error) {
			console.error('Erro ao marcar mensagem como lida:', error)
			throw new Error('Falha ao atualizar mensagem de contato')
		}
	}

	async deleteMessage(id: string): Promise<void> {
		try {
			const docRef = doc(db, this.collectionName, id)
			await deleteDoc(docRef)
		} catch (error) {
			console.error('Erro ao excluir mensagem de contato:', error)
			throw new Error('Falha ao excluir mensagem de contato')
		}
	}
}

export const contactsService = new ContactsService()

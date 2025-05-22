import type { IContactsService } from '@/services/firestore/contacts'
import type { useContactsModel } from './Contacts.model'

export type useContactsProps = {
	contactsServices: IContactsService
}

export type ContactsViewProps = ReturnType<typeof useContactsModel>

import { contactsService } from '@/services/firestore/contacts'
import { useContactsModel } from './Contacts.model'
import { ContactsView } from './Contacts.view'

export function Contacts() {
	const props = useContactsModel({
		contactsService: contactsService,
	})
	return <ContactsView {...props} />
}
Contacts

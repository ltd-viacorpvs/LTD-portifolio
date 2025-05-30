import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useAppTitle } from '@/hooks/useAppTitle/useAppTitle'
import { type ContactMessage } from '@/services/firestore/contacts'
import type { useContactsProps } from './types'

const CONTACTS_QUERY_KEY = ['contacts'] as const

export function useContactsModel({ contactsService }: useContactsProps) {
    useAppTitle({
        title: 'Mensagens de Contato',
    })

    const queryClient = useQueryClient()

    const {
        data: contacts = [],
        isLoading: loading,
        error,
        refetch,
    } = useQuery({
        queryKey: CONTACTS_QUERY_KEY,
        queryFn: async () => {
            const messages = await contactsService.getAllMessages()
            return messages.sort((a, b) => {
                if (a.createdAt && b.createdAt) {
                    return b.createdAt.toMillis() - a.createdAt.toMillis()
                }
                return 0
            })
        },
    })

    const markAsReadMutation = useMutation({
        mutationFn: async (id: string) => {
            await contactsService.markAsRead(id)
            return id
        },
        onSuccess: (id) => {
            queryClient.setQueryData<ContactMessage[]>(CONTACTS_QUERY_KEY, (oldData) => {
                if (!oldData) return oldData
                return oldData.map(contact =>
                    contact.id === id ? { ...contact, read: true } : contact
                )
            })
        },
        onError: (error) => {
            console.error('Erro ao marcar como lido:', error)
        },
    })

    const deleteContactMutation = useMutation({
        mutationFn: async (id: string) => {
            await contactsService.deleteMessage(id)
            return id
        },
        onSuccess: (id) => {
            queryClient.setQueryData<ContactMessage[]>(CONTACTS_QUERY_KEY, (oldData) => {
                if (!oldData) return oldData
                return oldData.filter(contact => contact.id !== id)
            })
        },
        onError: (error) => {
            console.error('Erro ao excluir contato:', error)
        },
    })

    const handleMarkAsRead = async (id: string) => {
        try {
            await markAsReadMutation.mutateAsync(id)
        } catch (error) {
            console.error('Erro ao marcar como lido:', error)
        }
    }

    const handleDelete = async (id: string) => {


        try {
            await deleteContactMutation.mutateAsync(id)
        } catch (error) {
            console.error('Erro ao excluir contato:', error)
        }
    }

    const unreadCount = contacts.filter((contact) => !contact.read).length

    return {
        contacts,
        loading,
        error: error?.message || null,
        unreadCount,
        handleMarkAsRead,
        handleDelete,
        refetch,
        isMarkingAsRead: markAsReadMutation.isPending,
        isDeleting: deleteContactMutation.isPending,
    }
}
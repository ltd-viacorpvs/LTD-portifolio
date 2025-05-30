import {
    Mail,
    Calendar,
    Trash2,
    CheckCircle,
    User,
    MessageSquare,
    Loader2,
} from 'lucide-react'
import { useState } from 'react'
import type { ContactMessage } from '@/services/firestore/contacts'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { ConfirmationModal } from '@/components/ConfirmationModal/ConfirmationModal'

interface ContactCardProps {
    contact: ContactMessage
    onMarkAsRead: (id: string) => void
    onDelete: (id: string) => void
    isMarkingAsRead?: boolean
    isDeleting?: boolean
}

export const ContactCard = ({
    contact,
    onMarkAsRead,
    onDelete,
    isMarkingAsRead = false,
    isDeleting = false,
}: ContactCardProps) => {
    const [showDeleteModal, setShowDeleteModal] = useState(false)

    const formatDate = (timestamp: any) => {
        if (!timestamp) return 'Data não disponível'

        try {
            const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp)
            return formatDistanceToNow(date, {
                addSuffix: true,
                locale: ptBR,
            })
        } catch (_error) {
            return 'Data inválida'
        }
    }

    const handleDeleteClick = () => {
        setShowDeleteModal(true)
    }

    const handleConfirmDelete = () => {
        onDelete(contact.id)
        setShowDeleteModal(false)
    }

    const handleCloseModal = () => {
        if (!isDeleting) {
            setShowDeleteModal(false)
        }
    }

    return (
        <>
            <div
                className={`bg-white rounded-lg shadow-md border-l-4 p-6 transition-all duration-200 hover:shadow-lg ${
                    contact.read
                        ? 'border-l-gray-300 opacity-75'
                        : 'border-l-blue-500 ring-1 ring-blue-100'
                }`}
            >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                contact.read ? 'bg-gray-100' : 'bg-blue-100'
                            }`}
                        >
                            <User
                                className={`h-5 w-5 ${
                                    contact.read ? 'text-gray-600' : 'text-blue-600'
                                }`}
                            />
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900">{contact.firstName}</h3>
                            <div className="flex items-center gap-1 text-sm text-gray-500">
                                <Mail className="h-4 w-4" />
                                <span>{contact.email}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        {!contact.read && (
                            <button
                                onClick={() => onMarkAsRead(contact.id)}
                                disabled={isMarkingAsRead}
                                className="flex items-center gap-1 px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                title="Marcar como lido"
                            >
                                {isMarkingAsRead ? (
                                    <Loader2 className="h-4 w-4 animate-spin" />
                                ) : (
                                    <CheckCircle className="h-4 w-4" />
                                )}
                                <span className="hidden sm:inline">
                                    {isMarkingAsRead ? 'Marcando...' : 'Marcar como lido'}
                                </span>
                            </button>
                        )}

                        <button
                            onClick={handleDeleteClick}
                            disabled={isDeleting}
                            className="flex items-center gap-1 px-3 py-1 text-sm bg-red-100 text-red-700 rounded-full hover:bg-red-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            title="Excluir mensagem"
                        >
                            {isDeleting ? (
                                <Loader2 className="h-4 w-4 animate-spin" />
                            ) : (
                                <Trash2 className="h-4 w-4" />
                            )}
                            <span className="hidden sm:inline">
                                {isDeleting ? 'Excluindo...' : 'Excluir'}
                            </span>
                        </button>
                    </div>
                </div>

                {/* Message */}
                <div className="mb-4">
                    <div className="flex items-start gap-2">
                        <MessageSquare className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-700 leading-relaxed">{contact.message}</p>
                    </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(contact.createdAt)}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        {contact.read ? (
                            <span className="flex items-center gap-1 text-sm text-green-600">
                                <CheckCircle className="h-4 w-4" />
                                Lido
                            </span>
                        ) : (
                            <span className="flex items-center gap-1 text-sm text-blue-600 font-medium">
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                Não lido
                            </span>
                        )}
                    </div>
                </div>
            </div>

            {/* Confirmation Modal */}
            <ConfirmationModal
                isOpen={showDeleteModal}
                onClose={handleCloseModal}
                onConfirm={handleConfirmDelete}
                title="Confirmar Exclusão"
                message={`Tem certeza que deseja excluir a mensagem de ${contact.firstName}? Esta ação não pode ser desfeita.`}
                confirmText="Excluir"
                cancelText="Cancelar"
                isLoading={isDeleting}
            />
        </>
    )
}
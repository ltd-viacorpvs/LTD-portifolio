import { AlertCircle, RefreshCw } from 'lucide-react'
import { ContactCard } from './components/ContactCard/ContactCard'
import type { ContactsViewProps } from './types'
import { Helmet } from 'react-helmet-async'
import { SpinnerLoading } from '@/components/SpinnerLoading/SpinnerLoading'
import { ContactsViewSkeleton } from './ContactsViewSkeleton'

export function ContactsView(props: ContactsViewProps) {
	const {
		contacts,
		loading,
		error,
		unreadCount,
		handleMarkAsRead,
		handleDelete,
		refetch,
		isMarkingAsRead,
		isDeleting,
	} = props

	if (error) {
		return (
			<div className="flex flex-col items-center justify-center h-64 gap-4">
				<div className="flex items-center gap-2 text-red-600">
					<AlertCircle className="h-5 w-5" />
					<span>{error}</span>
				</div>
				<button
					onClick={() => refetch()}
					className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
				>
					<RefreshCw className="h-4 w-4" />
					Tentar novamente
				</button>
			</div>
		)
	}

	return (
		<>
			<Helmet>
				<title>Contatos - Admin LTD</title>
			</Helmet>

			<div className="p-6">
				<div className="mb-6 flex items-center justify-between">
					<div>
						<h2 className="text-2xl font-bold text-gray-900">
							Mensagens de Contato
						</h2>
						<p className="text-gray-600">
							Total: {contacts.length} mensagens
							{unreadCount > 0 && (
								<span className="ml-2 text-blue-600">
									({unreadCount} não lidas)
								</span>
							)}
						</p>
					</div>

					<button
						onClick={() => refetch()}
						className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
						title="Atualizar"
					>
						<RefreshCw className="h-4 w-4" />
						Atualizar
					</button>
				</div>

				{contacts.length === 0 ? (
					<div className="text-center py-12">
						<p className="text-gray-500 text-lg">
							Nenhuma mensagem de contato encontrada.
						</p>
					</div>
				) : (
					<div className="grid gap-4 md:gap-6">
						{contacts.map((contact) => (
							<ContactCard
								key={contact.id}
								contact={contact}
								onMarkAsRead={handleMarkAsRead}
								onDelete={handleDelete}
								isMarkingAsRead={isMarkingAsRead}
								isDeleting={isDeleting}
							/>
						))}
					</div>
				)}
			</div>
		</>
	)
}

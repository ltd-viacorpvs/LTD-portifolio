import { RefreshCw } from 'lucide-react'
import { ContactCardSkeleton } from './components/ContactCard/ContactCardSkeleton'
import { Helmet } from 'react-helmet-async'

export function ContactsViewSkeleton() {
    return (
        <>
            <Helmet>
                <title>Contatos - Admin LTD</title>
            </Helmet>

            <div className="p-6">
                <div className="mb-6 flex items-center justify-between">
                    <div>
                        <div className="h-8 bg-gray-200 rounded w-64 mb-2 animate-pulse"></div>
                        <div className="h-4 bg-gray-200 rounded w-48 animate-pulse"></div>
                    </div>

                    <button
                        disabled
                        className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-400 rounded-lg cursor-not-allowed"
                        title="Atualizar"
                    >
                        <RefreshCw className="h-4 w-4" />
                        Atualizar
                    </button>
                </div>

                <div className="grid gap-4 md:gap-6">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <ContactCardSkeleton key={index} />
                    ))}
                </div>
            </div>
        </>
    )
}
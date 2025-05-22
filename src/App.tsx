import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { persistQueryClient } from '@tanstack/react-query-persist-client'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'
import { queryClient } from './lib/reactQuery'
import { router } from './router'

const persister = createSyncStoragePersister({
	storage: window.localStorage,
	key: 'portfolio-ltd-cache',
})

persistQueryClient({
	queryClient,
	persister,
	maxAge: 1000 * 60 * 60 * 24,
})

const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<HelmetProvider>
				<Helmet titleTemplate="%s | title title" />
				<RouterProvider router={router} />
			</HelmetProvider>
			<Toaster richColors />
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	)
}

export default App
export { App }

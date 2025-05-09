import { Outlet } from 'react-router-dom'

export const AppLayout = () => {
	return (
		<div className="flex min-h-screen flex-col antialiased">
			<Outlet />
		</div>
	)
}

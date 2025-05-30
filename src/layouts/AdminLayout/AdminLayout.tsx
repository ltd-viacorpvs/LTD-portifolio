import { useAtom } from 'jotai'
import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import { AdminAside } from '@/layouts/AdminLayout/AdminAside'
import { Header } from '@/layouts/AdminLayout/Header'
import { SheetAppMobile } from '@/layouts/AdminLayout/SheetAppMobile'
import { cn } from '@/lib/utils'
import { titleAtom } from '@/store/atoms/titleAtom'

export function AdminLayout() {
	const [titleHeader] = useAtom(titleAtom)
	const { pathname } = useLocation()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])

	return (
		<div className="flex flex-col md:grid h-full min-h-screen w-full md:grid-cols-[min-content_1fr] md:items-start">
			<AdminAside />

			<div className="grid grid-rows-[min-content_1fr] min-h-full">
				<Header>
					<SheetAppMobile />
					<h1 className="text-xl font-semibold capitalize">{titleHeader}</h1>
				</Header>

				<Outlet />
			</div>
		</div>
	)
}

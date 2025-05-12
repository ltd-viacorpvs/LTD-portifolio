import { render, screen } from '@testing-library/react'
import type { ReactNode } from 'react'
import * as router from 'react-router-dom'
import { beforeAll, describe, expect, it, vi } from 'vitest'
import { Footer } from './Footer'
vi.mock('react-router-dom', () => ({
	Link: ({
		to,
		children,
		className,
	}: { to: string; children: ReactNode; className?: string }) => (
		<a href={to} className={className} data-testid={`link-to-${to}`}>
			{children}
		</a>
	),
}))

describe('Footer', () => {
	it('deve renderizar o logo e slogan', () => {
		render(<Footer />)

		expect(screen.getByText('LTD.')).toBeInTheDocument()
		expect(
			screen.getByText('Laboratório de Transformação Digital.'),
		).toBeInTheDocument()
	})

	it('deve renderizar os ícones de redes sociais com atributos corretos', () => {
		render(<Footer />)

		const facebook = screen.getByLabelText('Facebook')
		const twitter = screen.getByLabelText('Twitter')
		const instagram = screen.getByLabelText('Instagram')

		expect(facebook).toBeInTheDocument()
		expect(twitter).toBeInTheDocument()
		expect(instagram).toBeInTheDocument()

		expect(facebook.tagName).toBe('A')
		expect(facebook).toHaveAttribute('href', '#')

		expect(facebook.firstChild).toBeInTheDocument()
	})

	it('deve renderizar os links de navegação corretamente', () => {
		render(<Footer />)

		expect(screen.getByText('Navegação')).toBeInTheDocument()

		const homeLink = screen.getByTestId('link-to-/')
		const aboutLink = screen.getByTestId('link-to-/about')
		const projectsLink = screen.getByTestId('link-to-/projetos')
		const blogLink = screen.getByTestId('link-to-/blog')
		const contactLink = screen.getByTestId('link-to-/contact')

		expect(homeLink).toHaveAttribute('href', '/')
		expect(aboutLink).toHaveAttribute('href', '/about')
		expect(projectsLink).toHaveAttribute('href', '/projetos')
		expect(blogLink).toHaveAttribute('href', '/blog')
		expect(contactLink).toHaveAttribute('href', '/contact')

		expect(homeLink).toHaveTextContent('Home')
	})

	it('deve renderizar os links de informações', () => {
		render(<Footer />)

		expect(screen.getByText('Informações')).toBeInTheDocument()

		const privacyLink = screen.getByTestId('link-to-/privacidade')
		const termsLink = screen.getByTestId('link-to-/termos')
		const cookiesLink = screen.getByTestId('link-to-/cookies')

		expect(privacyLink).toHaveAttribute('href', '/privacidade')
		expect(termsLink).toHaveAttribute('href', '/termos')
		expect(cookiesLink).toHaveAttribute('href', '/cookies')
	})

	it('deve ter uma estrutura responsiva com classes adequadas', () => {
		const { container } = render(<Footer />)

		const footer = container.querySelector('footer')
		expect(footer).toHaveClass('bg-[#001F66]')
		expect(footer).toHaveClass('px-4')
		expect(footer).toHaveClass('md:px-8')
		expect(footer).toHaveClass('lg:px-28')

		const mainContainer = container.querySelector('.container')
		expect(mainContainer).toBeInTheDocument()

		const flexContainer = container.querySelector('.flex-col.lg\\:flex-row')
		expect(flexContainer).toBeInTheDocument()
	})
})

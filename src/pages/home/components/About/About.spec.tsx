import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { About } from './About'

describe('About', () => {
	it('deve renderizar o título corretamente', () => {
		render(<About />)

		expect(screen.getByText('Sobre')).toBeInTheDocument()
	})

	it('deve renderizar o texto de introdução', () => {
		render(<About />)

		expect(
			screen.getByText(
				/Laboratório de Transformação Digital \(LTD\) é um projeto institucional/i,
			),
		).toBeInTheDocument()
	})

	it('deve renderizar todos os parágrafos', () => {
		render(<About />)

		expect(
			screen.getByText(/espaço colaborativo onde ideias se transformam/i),
		).toBeInTheDocument()
		expect(
			screen.getByText(/aproximar o ambiente acadêmico das demandas/i),
		).toBeInTheDocument()
	})

	it('deve renderizar as imagens com atributos corretos', () => {
		render(<About />)

		const images = screen.getAllByRole('img')
		expect(images).toHaveLength(2)

		expect(images[0]).toHaveAttribute('src', 'ofice-shablau.jpg')
		expect(images[0]).toHaveAttribute(
			'alt',
			'Ambiente colaborativo no escritório do LTD',
		)
		expect(images[0]).toHaveAttribute('loading', 'lazy')

		expect(images[1]).toHaveAttribute('src', 'ofice-shablau-2.jpg')
		expect(images[1]).toHaveAttribute(
			'alt',
			'Equipe do LTD colaborando em projetos',
		)
		expect(images[1]).toHaveAttribute('loading', 'lazy')
	})

	it('deve possuir classes para responsividade', () => {
		const { container } = render(<About />)

		const section = container.querySelector('section')
		expect(section).toHaveClass('py-8')
		expect(section).toHaveClass('md:py-16')
		expect(section).toHaveClass('lg:py-24')

		const mainDiv = container.querySelector('.container')
		expect(mainDiv).toHaveClass('px-4')
		expect(mainDiv).toHaveClass('md:px-8')

		const flexContainer = container.querySelector('.flex-col.lg\\:flex-row')
		expect(flexContainer).toBeInTheDocument()
	})

	it('deve renderizar elementos na ordem correta para responsividade', () => {
		const { container } = render(<About />)

		const orderedElements = container.querySelectorAll(
			'.order-1, .order-2, .order-3',
		)
		expect(orderedElements.length).toBeGreaterThan(0)

		const secondImageContainer = container.querySelector('.aspect-\\[5\\/4\\]')
		expect(secondImageContainer).toHaveClass('order-2')
		expect(secondImageContainer).toHaveClass('lg:order-1')
	})

	it('deve renderizar o componente sem erros', () => {
		expect(() => render(<About />)).not.toThrow()
	})
})

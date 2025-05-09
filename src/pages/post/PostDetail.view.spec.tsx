import type { IBlogPostDetail } from '@/services/types'
import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { PostDetailView } from './PostDetail.view'
import { PostDetailSkeleton } from './PostDetailSkeleton'

vi.mock('./PostDetailSkeleton', () => ({
	PostDetailSkeleton: () => <div data-testid="skeleton">Loading...</div>,
}))

vi.mock('@/components/RichTextRenderer/RichTextRenderer', () => ({
	RichTextRenderer: ({ content }: { content: string }) => (
		<div data-testid="rich-text">{content}</div>
	),
}))

describe('PostDetailView', () => {
	it('deve renderizar o skeleton quando estiver carregando', () => {
		render(
			<PostDetailView
				post={null}
				isLoading={true}
				error={null}
				refetch={vi.fn()}
			/>,
		)

		expect(screen.getByTestId('skeleton')).toBeInTheDocument()
	})

	it('deve renderizar os detalhes do post quando os dados estiverem carregados', () => {
		const mockPost: IBlogPostDetail = {
			id: '1',
			title: 'Título do Post',
			content: 'Conteúdo do post para teste',
			category: 'tecnologia',
			coverImage: {
				url: 'https://example.com/image.jpg',
				description: 'Imagem do post',
			},
			sections: [
				{ id: 'section-1', title: 'Seção 1' },
				{ id: 'section-2', title: 'Seção 2' },
			],
			slug: '',
			excerpt: '',
			readTime: '',
			createdAt: '',
			updatedAt: '',
			meta: {
				title: '',
				description: '',
			},
		}

		render(
			<PostDetailView
				post={mockPost}
				isLoading={false}
				error={null}
				refetch={vi.fn()}
			/>,
		)

		expect(screen.getByText('Título do Post')).toBeInTheDocument()

		expect(screen.getByText('TECNOLOGIA')).toBeInTheDocument()

		const image = screen.getByAltText('Imagem do post')
		expect(image).toBeInTheDocument()
		expect(image).toHaveAttribute('src', 'https://example.com/image.jpg')

		expect(screen.getByTestId('rich-text')).toHaveTextContent(
			'Conteúdo do post para teste',
		)

		expect(screen.getByText('Table of Contents')).toBeInTheDocument()
		expect(screen.getByText('Seção 1')).toBeInTheDocument()
		expect(screen.getByText('Seção 2')).toBeInTheDocument()

		const sectionLinks = screen.getAllByRole('link')
		expect(sectionLinks[0]).toHaveAttribute('href', '#section-1')
		expect(sectionLinks[1]).toHaveAttribute('href', '#section-2')
	})

	it('deve exibir imagem placeholder quando não houver imagem de capa', () => {
		const mockPost: IBlogPostDetail = {
			id: '1',
			title: 'Post sem imagem',
			content: 'Conteúdo do post',
			category: 'tecnologia',
			coverImage: {
				url: '',
				description: '',
			},
			sections: [],
			slug: '',
			excerpt: '',
			readTime: '',
			createdAt: '',
			updatedAt: '',
			meta: {
				title: '',
				description: '',
			},
		}

		render(
			<PostDetailView
				post={mockPost}
				isLoading={false}
				error={null}
				refetch={vi.fn()}
			/>,
		)

		const image = screen.getByAltText('sem descrição')

		expect(image).toHaveAttribute('src', 'https://placehold.co/600x400')
	})

	it('deve lidar com posts sem seções', () => {
		const mockPost: IBlogPostDetail = {
			id: '1',
			title: 'Post sem seções',
			content: 'Conteúdo do post',
			category: 'tecnologia',
			coverImage: {
				url: 'https://example.com/image.jpg',
				description: 'Imagem do post',
			},
			sections: [],
			slug: '',
			excerpt: '',
			readTime: '',
			createdAt: '',
			updatedAt: '',
			meta: {
				title: '',
				description: '',
			},
		}

		render(
			<PostDetailView
				post={mockPost}
				isLoading={false}
				error={null}
				refetch={vi.fn()}
			/>,
		)

		expect(screen.getByText('Table of Contents')).toBeInTheDocument()
		expect(screen.queryAllByRole('link')).toHaveLength(0)
	})
})

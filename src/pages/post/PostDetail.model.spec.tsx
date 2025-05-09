import type { IBlogPostsServices } from '@/services/IblogPostsServices'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { renderHook, waitFor } from '@testing-library/react'
import type { ReactNode } from 'react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { usePostDetailModel } from './PostDetail.model'

vi.mock('react-router-dom', () => ({
	useNavigate: () => mockNavigate,
}))

const mockBlogPostsService = {
	getPostBySlug: vi.fn(),
	fetchPosts: vi.fn(),
}

const mockNavigate = vi.fn()

const createWrapper = () => {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				retry: false,
			},
		},
	})

	return ({ children }: { children: ReactNode }) => (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	)
}

describe('usePostDetailModel', () => {
	beforeEach(() => {
		vi.clearAllMocks()
	})

	it('deve retornar isLoading como true durante o carregamento', () => {
		// biome-ignore lint/suspicious/noEmptyBlockStatements: <explanation>
		mockBlogPostsService.getPostBySlug.mockReturnValue(new Promise(() => {}))

		const { result } = renderHook(
			() =>
				usePostDetailModel({
					blogPostsService: mockBlogPostsService,
					slug: 'test-slug',
				}),
			{ wrapper: createWrapper() },
		)

		expect(result.current.isLoading).toBe(true)
		expect(mockBlogPostsService.getPostBySlug).toHaveBeenCalledWith('test-slug')
	})

	it('deve retornar os dados do post quando o carregamento for concluído', async () => {
		const mockPost = {
			id: '1',
			title: 'Test Post',
			content: 'Test content',
			coverImage: {
				url: 'https://example.com/image.jpg',
				description: 'Test image',
			},
			category: 'test',
			sections: [],
		}

		mockBlogPostsService.getPostBySlug.mockResolvedValue(mockPost)

		const { result } = renderHook(
			() =>
				usePostDetailModel({
					blogPostsService: mockBlogPostsService,
					slug: 'test-slug',
				}),
			{ wrapper: createWrapper() },
		)

		await waitFor(() => expect(result.current.isLoading).toBe(false))

		expect(result.current.post).toEqual(mockPost)
		expect(result.current.error).toBeNull()
	})

	it('deve navegar para /not-found quando ocorrer um erro', async () => {
		mockBlogPostsService.getPostBySlug.mockRejectedValue(
			new Error('Post not found'),
		)

		renderHook(
			() =>
				usePostDetailModel({
					blogPostsService: mockBlogPostsService,
					slug: 'invalid-slug',
				}),
			{ wrapper: createWrapper() },
		)

		await waitFor(
			() => expect(mockNavigate).toHaveBeenCalledWith('/not-found'),
			{ timeout: 2000 },
		)
	})

	it('deve navegar para /not-found quando o post for null', async () => {
		mockBlogPostsService.getPostBySlug.mockResolvedValue(null)

		renderHook(
			() =>
				usePostDetailModel({
					blogPostsService: mockBlogPostsService,
					slug: 'non-existent-slug',
				}),
			{ wrapper: createWrapper() },
		)

		await waitFor(() => {
			expect(mockNavigate).toHaveBeenCalledWith('/not-found')
		})
	})

	it('não deve fazer a query quando slug estiver vazio', () => {
		renderHook(
			() =>
				usePostDetailModel({
					blogPostsService: mockBlogPostsService,
					slug: '',
				}),
			{ wrapper: createWrapper() },
		)

		expect(mockBlogPostsService.getPostBySlug).not.toHaveBeenCalled()
	})

	it('deve retornar uma função refetch que pode ser chamada', async () => {
		mockBlogPostsService.getPostBySlug.mockResolvedValue({
			id: '1',
			title: 'Test Post',
			content: 'Test content',
			coverImage: {
				url: 'https://example.com/image.jpg',
				description: 'Test image',
			},
			category: 'test',
			sections: [],
		})

		const { result } = renderHook(
			() =>
				usePostDetailModel({
					blogPostsService: mockBlogPostsService,
					slug: 'test-slug',
				}),
			{ wrapper: createWrapper() },
		)

		await waitFor(() => expect(result.current.isLoading).toBe(false))

		mockBlogPostsService.getPostBySlug.mockClear()

		result.current.refetch()

		await waitFor(() => {
			expect(mockBlogPostsService.getPostBySlug).toHaveBeenCalledTimes(1)
		})
	})
})

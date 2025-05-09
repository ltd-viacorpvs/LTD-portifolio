import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { renderHook, waitFor } from '@testing-library/react'
import type { ReactNode } from 'react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { usePostListModel } from './PostList.model'

const mockBlogPostsService = {
	getPostBySlug: vi.fn(),
	fetchPosts: vi.fn(),
}

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

describe('usePostListModel', () => {
	beforeEach(() => {
		vi.clearAllMocks()
	})

	it('deve retornar isLoading como true durante o carregamento', () => {
		// biome-ignore lint/suspicious/noEmptyBlockStatements: <explanation>
		mockBlogPostsService.fetchPosts.mockReturnValue(new Promise(() => {}))

		const { result } = renderHook(
			() =>
				usePostListModel({
					blogPostsService: mockBlogPostsService,
				}),
			{ wrapper: createWrapper() },
		)

		expect(result.current.isLoading).toBe(true)
		expect(mockBlogPostsService.fetchPosts).toHaveBeenCalledTimes(1)
	})

	it('deve retornar a lista de posts quando o carregamento for concluído', async () => {
		const mockPosts = [
			{
				id: '1',
				title: 'Post 1',
				excerpt: 'Resumo do post 1',
				category: 'tecnologia',
				slug: 'post-1',
				coverImage: {
					url: 'https://example.com/image1.jpg',
					description: 'Imagem do post 1',
				},
				readTime: '5 min',
			},
			{
				id: '2',
				title: 'Post 2',
				excerpt: 'Resumo do post 2',
				category: 'design',
				slug: 'post-2',
				coverImage: {
					url: 'https://example.com/image2.jpg',
					description: 'Imagem do post 2',
				},
				readTime: '3 min',
			},
		]

		mockBlogPostsService.fetchPosts.mockResolvedValue(mockPosts)

		const { result } = renderHook(
			() =>
				usePostListModel({
					blogPostsService: mockBlogPostsService,
				}),
			{ wrapper: createWrapper() },
		)

		await waitFor(() => expect(result.current.isLoading).toBe(false))

		expect(result.current.posts).toEqual(mockPosts)
		expect(result.current.error).toBeNull()
	})

	it('deve tratar erros corretamente', async () => {
		const errorMessage = 'Falha ao carregar posts'
		mockBlogPostsService.fetchPosts.mockRejectedValue(new Error(errorMessage))

		const { result } = renderHook(
			() =>
				usePostListModel({
					blogPostsService: mockBlogPostsService,
				}),
			{ wrapper: createWrapper() },
		)

		await waitFor(() => expect(result.current.error).toBeTruthy(), {
			timeout: 2000,
		})

		expect(result.current.error?.message).toBe(errorMessage)
		expect(result.current.posts).toEqual([])
	})

	it('deve retornar uma função refetch que pode ser chamada', async () => {
		mockBlogPostsService.fetchPosts.mockResolvedValue([
			{
				id: '1',
				title: 'Post 1',
				excerpt: 'Resumo do post 1',
				category: 'tecnologia',
				slug: 'post-1',
				coverImage: {
					url: 'https://example.com/image1.jpg',
					description: 'Imagem do post 1',
				},
				readTime: '5 min',
			},
		])

		const { result } = renderHook(
			() =>
				usePostListModel({
					blogPostsService: mockBlogPostsService,
				}),
			{ wrapper: createWrapper() },
		)

		await waitFor(() => expect(result.current.isLoading).toBe(false))

		mockBlogPostsService.fetchPosts.mockClear()

		result.current.refetch()

		await waitFor(() => {
			expect(mockBlogPostsService.fetchPosts).toHaveBeenCalledTimes(1)
		})
	})

	it('deve retornar um array vazio quando não houver dados', async () => {
		mockBlogPostsService.fetchPosts.mockResolvedValue([])

		const { result } = renderHook(
			() =>
				usePostListModel({
					blogPostsService: mockBlogPostsService,
				}),
			{ wrapper: createWrapper() },
		)

		await waitFor(() => expect(result.current.isLoading).toBe(false))

		expect(result.current.posts).toEqual([])
	})
})

import { z } from 'zod'

export const createContactMessageSchema = z.object({
	firstName: z
		.string()
		.min(2, { message: 'Nome deve ter pelo menos 2 caracteres' }),
	lastName: z
		.string()
		.min(2, { message: 'Sobrenome deve ter pelo menos 2 caracteres' }),
	email: z.string().email({ message: 'Email inválido' }),
	phone: z
		.string()
		.regex(
			/^(\+?\d{1,3}[-.\s]?)?\(?(\d{2,3})\)?[-.\s]?(\d{4,5})[-.\s]?(\d{4})$/,
			{ message: 'Número de telefone inválido' },
		),
	message: z
		.string()
		.min(10, { message: 'Mensagem deve ter pelo menos 10 caracteres' })
		.max(1000, { message: 'Mensagem não pode exceder 1000 caracteres' }),
})

export type ICreateContactMessage = z.infer<typeof createContactMessageSchema>

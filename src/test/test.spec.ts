import { describe, expect, it } from 'vitest'
import { sum } from './sum'

describe('sum', () => {
	it('deve somar dois numeros corretamente', () => {
		expect(sum(1, 2)).toBe(3)
	})
})

import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

export const rememberMeAtom = atomWithStorage('rememberMe', false)

export const rememberedEmailAtom = atomWithStorage('rememberedEmail', '')

export const userDataAtom = atomWithStorage('userDataEmail', null)

export const persistentLoginDataAtom = atom(
	(get) => ({
		rememberMe: get(rememberMeAtom),
		email: get(rememberedEmailAtom),
	}),
	(_, set, newValue: { rememberMe: boolean; email: string }) => {
		set(rememberMeAtom, newValue.rememberMe)
		if (newValue.rememberMe) {
			set(rememberedEmailAtom, newValue.email)
		} else {
			set(rememberedEmailAtom, '')
		}
	},
)

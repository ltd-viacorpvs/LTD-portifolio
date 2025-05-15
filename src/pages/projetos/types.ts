import type { useProjetosModel } from './Projetos.model'

export type useProjetosProps = {
	/** Add props here */
	a?: string
}

export type ProjetosViewProps = ReturnType<typeof useProjetosModel>

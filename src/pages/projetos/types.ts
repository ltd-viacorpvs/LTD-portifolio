import type { IProjectsServices } from '@/services/projects/IProjectsServices'
import type { useProjetosModel } from './Projetos.model'

export type useProjetosProps = {
	projectsServices: IProjectsServices
}

export type ProjetosViewProps = ReturnType<typeof useProjetosModel>

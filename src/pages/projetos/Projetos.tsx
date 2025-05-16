import { projectsServices } from '@/services/projects/ProjectsServices'
import { useProjetosModel } from './Projetos.model'
import { ProjetosView } from './Projetos.view'

export function Projetos() {
	const props = useProjetosModel({
		projectsServices,
	})
	return <ProjetosView {...props} />
}

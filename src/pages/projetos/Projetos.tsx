import { useProjetosModel } from './Projetos.model'
import { ProjetosView } from './Projetos.view'

export function Projetos() {
	const props = useProjetosModel({})
	return <ProjetosView {...props} />
}

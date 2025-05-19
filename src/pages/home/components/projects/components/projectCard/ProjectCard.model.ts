import type { useProjectCardProps } from './types'

export function useProjectCardModel({
	isSingleProject = false,
	isHighlighted = false,
	project,
}: useProjectCardProps) {
	const useVerticalLayout = !isSingleProject

	return {
		useVerticalLayout,
		project,
		isSingleProject,
		isHighlighted,
	}
}

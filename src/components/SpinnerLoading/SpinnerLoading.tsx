import { cn } from '@/lib/utils'
interface SpinnerLoadingProps {
	size?: 'small' | 'medium' | 'large'
	color?: string
	fullScreen?: boolean
}

export const SpinnerLoading = ({
	size = 'medium',
	color = 'primary',
	fullScreen = false,
}: SpinnerLoadingProps) => {
	const sizeMap = {
		small: 'w-6 h-6',
		medium: 'w-10 h-10',
		large: 'w-16 h-16',
	}

	const colorMap: Record<string, string> = {
		primary: 'border-t-blue-600',
		white: 'border-t-white',
		black: 'border-t-black',
		gray: 'border-t-gray-400',
		red: 'border-t-red-500',
		green: 'border-t-green-500',
		yellow: 'border-t-yellow-400',
	}

	return (
		<div
			className={cn(
				fullScreen
					? 'fixed inset-0 flex items-center justify-center bg-white/80 z-50'
					: 'flex flex-1 items-center justify-center w-full h-[75vh] min-h-[200px]',
			)}
		>
			<div
				className={cn(
					'rounded-full border-4 border-transparent animate-spin border-solid',
					sizeMap[size],
					colorMap[color] || colorMap['primary'],
				)}
			/>
		</div>
	)
}

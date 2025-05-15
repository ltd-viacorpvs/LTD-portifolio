import type { useProjetosProps } from './types'

export function useProjetosModel(props: useProjetosProps) {
	const projects = [
		{
			id: 'e-commerce-platform',
			title: 'E-commerce Platform',
			description:
				'A modern shopping experience with advanced filtering and payment processing. Built with Next.js and integrated with Stripe for secure payments.',
			image: '/images/project1.png',
			date: 'Mar 2024',
			duration: '8 weeks',
			demoUrl: 'https://example.com/demo',
			githubUrl: 'https://github.com/username/project',
			client: 'RetailTech Inc.',
			featured: true,
		},
		{
			id: 'analytics-dashboard',
			title: 'Analytics Dashboard',
			description:
				'Real-time data visualization and reporting for business intelligence. Features customizable widgets and automated reporting capabilities.',
			image: '/images/project2.png',
			date: 'Feb 2024',
			duration: '6 weeks',
			demoUrl: 'https://example.com/demo',
			githubUrl: 'https://github.com/username/project',
			client: 'DataViz Solutions',
			featured: false,
		},
	]

	return {
		projects,
	}
}

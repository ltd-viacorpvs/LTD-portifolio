import type { useProjectDetailsProps } from './types'

export function useProjectDetailsModel({ slug }: useProjectDetailsProps) {
	const project = {
		'e-commerce-platform': {
			title: 'E-commerce Platform',
			description:
				'A modern shopping experience with advanced filtering and payment processing.',
			image: '/images/project1.png',
			fullDescription:
				'This e-commerce platform provides businesses with a complete solution for selling products online. Built with Next.js for optimal performance and SEO, it features a responsive design that works seamlessly across all devices. The platform includes product management, inventory tracking, order processing, and customer management capabilities. Payment processing is handled securely through Stripe integration, supporting multiple payment methods and currencies.',
			technologies: [
				'Next.js',
				'React',
				'TypeScript',
				'Tailwind CSS',
				'Stripe',
				'MongoDB',
			],
			date: 'March 2024',
			duration: '8 weeks',
			client: 'RetailTech Inc.',
			website: 'https://example-ecommerce.com',
			github: 'https://github.com/username/ecommerce-platform',
			features: [
				'Advanced product filtering and search',
				'User authentication and profiles',
				'Shopping cart and wishlist functionality',
				'Secure payment processing',
				'Order tracking and history',
				'Admin dashboard for inventory management',
			],
		},
		'analytics-dashboard': {
			title: 'Analytics Dashboard',
			description:
				'Real-time data visualization and reporting for business intelligence.',
			image: '/images/project2.png',
			fullDescription:
				'This analytics dashboard provides businesses with real-time insights into their performance metrics. The dashboard visualizes complex data sets in an intuitive interface, making it easy for users to understand trends and make data-driven decisions. It features customizable widgets, interactive charts, and automated reporting capabilities. The system integrates with various data sources and APIs to provide a comprehensive view of business operations.',
			technologies: [
				'React',
				'D3.js',
				'Node.js',
				'Express',
				'PostgreSQL',
				'Redis',
			],
			date: 'February 2024',
			duration: '6 weeks',
			client: 'DataViz Solutions',
			website: 'https://example-analytics.com',
			github: 'https://github.com/username/analytics-dashboard',
			features: [
				'Real-time data visualization',
				'Customizable dashboard widgets',
				'Automated report generation',
				'Data export in multiple formats',
				'User role management',
				'API integrations with popular services',
			],
		},
	}

	return {
		project: project[slug as keyof typeof project],
	}
}

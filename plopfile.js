import path from 'path'

export default function (plop) {
	plop.setGenerator('mvvm', {
		description: 'Gerar estrutura MVVM com imports automáticos',
		prompts: [
			{
				type: 'list',
				name: 'componentType',
				message: 'Qual tipo de componente você deseja criar?',
				choices: [
					{
						name: 'Componente para pasta components (raiz)',
						value: 'component',
					},
					{
						name: 'Componente de página (src/pages/...)',
						value: 'pageComponent',
					},
					{ name: 'Página completa com rota (src/pages/...)', value: 'page' },
				],
			},
			{
				type: 'input',
				name: 'path',
				message: 'Informe o path do componente (ex: ui/button):',
			},
			{
				type: 'input',
				name: 'routePath',
				message: 'Informe o caminho da rota (ex: about, products/:id):',
				when: (answers) => answers.componentType === 'page',
			},
			{
				type: 'checkbox',
				name: 'files',
				message:
					'Selecione os arquivos para gerar (todos estão selecionados por padrão):',
				choices: [
					{ name: 'ViewModel (Component)', value: 'viewmodel', checked: true },
					{ name: 'View', value: 'view', checked: true },
					{ name: 'Model', value: 'model', checked: true },
					{ name: 'Schema', value: 'schema', checked: false },
					{ name: 'Types', value: 'types', checked: true },
					{ name: 'Rota (apenas para páginas)', value: 'route', checked: true },
				],
				filter: (choices, input) => {
					// Remover a opção de rota se não for uma página
					if (input.componentType !== 'page') {
						return choices.filter((choice) => choice !== 'route')
					}
					return choices
				},
			},
		],
		actions: function (data) {
			if (!data?.path) return []

			const cleanPath = data.path.replace(/\s+/g, '-')
			const name = path.basename(cleanPath)
			data.name = name
			data.folder = cleanPath
			data.routePath = data.routePath || '*' // Default para NotFound

			let baseDir = 'src/components/'

			switch (data.componentType) {
				case 'component':
					baseDir = 'src/components/'
					break
				case 'pageComponent':
					baseDir = 'src/pages/'
					data.folder = `components/${cleanPath}`
					break
				case 'page':
					baseDir = 'src/pages/'
					data.isPage = true
					break
			}

			data.baseDir = baseDir

			const actions = []

			if (data.files.includes('viewmodel')) {
				actions.push({
					type: 'add',
					path: '{{baseDir}}{{folder}}/{{pascalCase name}}.tsx',
					templateFile: 'plop/templates/mvvm/viewmodel.hbs',
				})
			}

			if (data.files.includes('view')) {
				actions.push({
					type: 'add',
					path: '{{baseDir}}{{folder}}/{{pascalCase name}}.view.tsx',
					templateFile: 'plop/templates/mvvm/view.hbs',
				})
			}

			if (data.files.includes('model')) {
				actions.push({
					type: 'add',
					path: '{{baseDir}}{{folder}}/{{pascalCase name}}.model.tsx',
					templateFile: 'plop/templates/mvvm/model.hbs',
				})
			}

			if (data.files.includes('schema')) {
				actions.push({
					type: 'add',
					path: '{{baseDir}}{{folder}}/schema.ts',
					templateFile: 'plop/templates/mvvm/schema.hbs',
				})
			}

			if (data.files.includes('types')) {
				actions.push({
					type: 'add',
					path: '{{baseDir}}{{folder}}/types.ts',
					templateFile: 'plop/templates/mvvm/types.hbs',
				})
			}

			// Adicione o código de rota ao arquivo router.tsx se for uma página
			if (data.isPage && data.files.includes('route')) {
				actions.push({
					type: 'append',
					path: 'src/router.tsx',
					// Expressão regular simplificada para achar onde inserir a rota
					pattern: /children:\s*\[/,
					template: `children: [
            {
                element: <{{pascalCase name}} />,
                path: '{{routePath}}',
            },`,
				})

				// Adicione o import na parte superior do arquivo router.tsx
				actions.push({
					type: 'append',
					path: 'src/router.tsx',
					pattern: /import\s+.*\s+from\s+['"]react-router-dom['"]/,
					template: `import { {{pascalCase name}} } from '{{#if isPage}}@pages{{else}}@components{{/if}}/{{folder}}/{{pascalCase name}}'`,
				})
			}

			// Gerar índice para exportação
			actions.push({
				type: 'add',
				path: '{{baseDir}}{{folder}}/index.ts',
				template: `export { {{pascalCase name}} } from './{{pascalCase name}}'\n`,
			})

			return actions
		},
	})
}

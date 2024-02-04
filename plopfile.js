const inquirerDirectory = require('inquirer-directory')

module.exports = function (plop) {
	plop.setPrompt('directory', inquirerDirectory)
	plop.setGenerator('basic', {
		description: 'generate component',
		prompts: [
			{
				type: 'input',
				name: 'componentName',
				message: 'Name of your component: ',
			},
			{
				type: 'directory',
				name: 'folder',
				message: 'Where do you want the component to live: ',
				basePath: './src/components',
			},
		],
		actions: [
			{
				type: 'add',
				path: './src/components/{{folder}}/{{properCase componentName}}/index.tsx',
				template: `import {{properCase componentName}} from './style'\nexport default {{properCase componentName}}\n`,
			},
			{
				type: 'add',
				path: './src/components/{{folder}}/{{properCase componentName}}/style.tsx',
				template: `import styled from 'styled-components'\nimport {{properCase componentName}} from './{{properCase componentName}}'\n\nconst styled{{properCase componentName}} = styled({{properCase componentName}})\`\`\n\nexport default styled{{properCase componentName}}\n`,
			},
			{
				type: 'add',
				path: './src/components/{{folder}}/{{properCase componentName}}/{{properCase componentName}}.tsx',
				template:
					"import React from 'react'\nimport cx from 'classnames'\n\nexport default function {{properCase componentName}}(props:any) {\n const { className } = props\n    return <div className={cx(className)}></div>\n}",
			},
			{
				type: 'add',
				path: './src/components/{{folder}}/{{properCase componentName}}/{{properCase componentName}}.test.tsx',
				template:
					"import React from 'react'\nimport {{properCase componentName}} from './index'\nimport '@testing-library/jest-dom/extend-expect'\nimport { render, screen } from '@testing-library/react'\ndescribe('Functional Tests', () => {\n    test('it renders without errors', () => {\n        const { container } = render(<{{properCase componentName}} />)\n        expect(container).toBeInTheDocument()}\n)\n})\n",
			},
		],
	})
}
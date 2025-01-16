import globals from 'globals';
import pluginJs from '@eslint/js';

/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		rules: {
			'react/prop-types': 'off',
			'no-unused-vars': 'warn',
			semi: ['error', 'always'],
			languageOptions: { globals: globals.browser },
		},
	},
	pluginJs.configs.recommended,
];

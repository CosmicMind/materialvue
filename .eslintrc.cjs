/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
	root: true,
	env: {
		es6: true,
		node: true,
		browser: true,
	},
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@typescript-eslint/parser',
		sourceType: 'module',
		ecmaVersion: 2022,
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: [
		'vue',
		'@typescript-eslint'
	],
	extends: [
		'plugin:vue/vue3-strongly-recommended',
		'eslint:recommended',
		'@vue/eslint-config-typescript'
	],
	overrides: [
		{
			files: [ '**/*.js' ],
			rules: {
				'@typescript-eslint/no-inferrable-types': [ 0 ],
				'@typescript-eslint/explicit-function-return-type': [ 0 ]
			},
		}
	],
	rules: {
		'@typescript-eslint/no-inferrable-types': [ 2 ],
		'@typescript-eslint/explicit-function-return-type': [ 2 ],
		indent: [ 2, 'tab' ],
		eqeqeq: [ 2 ],
		camelcase: [ 2 ],
		semi: [ 2, 'never' ],
		curly: [ 2, 'all' ],
		quotes: [ 2, 'single', {
			'avoidEscape': true,
			'allowTemplateLiterals': true,
		} ],
		'comma-dangle': [ 2, {
			arrays: 'never',
			objects: 'always-multiline',
			imports: 'always-multiline',
			exports: 'always-multiline',
			functions: 'never',
		} ],
		'object-curly-spacing': [ 2, 'always' ],
		'array-bracket-spacing': [ 2, 'always' ],
		'template-curly-spacing': [ 2 ],
		'space-before-blocks': [ 2 ],
		'object-curly-newline': [ 2, {
			'multiline': true,
			'minProperties': 1,
		} ],
		'object-property-newline': [ 2 ],
		'object-shorthand': [ 2 ],
		'one-var-declaration-per-line': [ 2 ],
		'prefer-arrow-callback': [ 2 ],
		'prefer-const': [ 2 ],
		'prefer-exponentiation-operator': [ 2 ],
		'prefer-numeric-literals': [ 2 ],
		'prefer-object-spread': [ 2 ],
		'prefer-promise-reject-errors': [ 2 ],
		'prefer-template': [ 2 ],
		'prefer-rest-params': [ 2 ],
		'rest-spread-spacing': [ 2 ],
		'require-atomic-updates': [ 2 ],
		'require-await': [ 2 ],
		'no-console': [ 2 ],
		'no-lonely-if': [ 2 ],
		'no-trailing-spaces': [ 2 ],
		'no-spaced-func': [ 2 ],
		'no-param-reassign': [ 2 ],
		'no-extra-parens': [ 2 ],
		'no-return-await': [ 2 ],
		'no-self-compare': [ 2 ],
		'no-unused-expressions': [ 2 ],
		'no-use-before-define': [ 2, {
			functions: false,
		} ],
		'no-useless-backreference': [ 2 ],
		'no-useless-call': [ 2 ],
		'no-useless-computed-key': [ 2 ],
		'no-useless-concat': [ 2 ],
		'no-useless-constructor': [ 2 ],
		'no-useless-rename': [ 2 ],
		'no-useless-return': [ 2 ],
		'no-var': [ 2 ],
		'no-mixed-spaces-and-tabs': [ 2 ],
		'no-unexpected-multiline': [ 2 ],
		'nonblock-statement-body-position': [ 2 ],
	},
}

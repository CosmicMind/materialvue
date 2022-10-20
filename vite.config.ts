import fg from 'fast-glob'

import {
	URL,
	fileURLToPath,
} from 'node:url'

import {
	defineConfig,
	LibraryFormats,
	Plugin,
} from 'vite'

import dts from 'vite-plugin-dts'
import vue from '@vitejs/plugin-vue'

const packageName = process.env.npm_package_name
const packageVersion = JSON.stringify(process.env.npm_package_version)

const external = [
	'@cosmicmind/foundation'
]
const globals = {}
const emptyOutDir = true
const formats: LibraryFormats[] = [ 'es' ]

function CustomHmr(): Plugin {
	return {
		name: 'watch-external', // https://stackoverflow.com/questions/63373804/rollup-watch-include-directory/63548394#63548394
		async buildStart(): Promise<void> {
			const files = await fg([
				'./public/**/*'
			])
			for(const file of files) {
				this.addWatchFile(file)
			}
		},
	}
}

export default defineConfig(() => {
	return {
		define: {
			'__PACKAGE_NAME__': packageVersion,
			'__PACKAGE_VERSION__': packageVersion,
		},
		resolve: {
			alias: {
				'@': fileURLToPath(new URL('./src', import.meta.url)),
			},
		},
		plugins: [
			CustomHmr(),
			vue(),
			dts()
		],
		build: {
			emptyOutDir,
			lib: {
				name: packageName,
				entry: './src/index.ts',
				formats,
				fileName: 'lib.es',
			},
			rollupOptions: {
				external,
				output: {
					globals,
				},
			},
		},
	}
})
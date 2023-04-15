import {
	fileURLToPath,
	URL
} from 'node:url'

import {
	defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue';


// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src/*',
				import.meta.url))
		}
	},
	server: {
		watch: {
			usePolling: true //отвечает за рендер в браузере изменений в режиме dev
		},
		host: true,
		strictPort: true,
		port: 3000
	}
})
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
/*import adapter from '@sveltejs/adapter-auto';*/

/** @type {import('@sveltejs/kit').Config} */
//const config = {kit: {adapter: adapter()}};

import adapter from '@sveltejs/adapter-static';
const config = {
	kit: {
		appDir: 'app',
		adapter: adapter(),
		paths: {
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
		}
	},
	preprocess: vitePreprocess()
};

export default config;

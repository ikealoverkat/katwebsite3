import { mdsvex } from 'mdsvex';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-auto';
import type { Config } from '@sveltejs/kit';

const config: Config = {
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex()],
	kit: {
		adapter: adapter()
	}
};

export default config;
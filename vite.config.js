import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sentrySvelteKit({
			sourceMapsUploadOptions: {
				org: 'ionicisere',
				project: 'newsletter-sveltekit'
			}
		}),
		sveltekit()
	]
});

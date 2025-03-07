import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit(), tailwindcss()],
	server: {
		host: '127.0.0.1',
		allowedHosts: ['6476-93-155-227-109.ngrok-free.app']
  }
});

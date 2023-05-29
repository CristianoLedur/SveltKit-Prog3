import vercel from '@sveltejs/adapter-vercel';
import { resolve } from 'path';
 
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // adapter: adapter(),
	adapter: vercel(),
	vite: {
		resolve: {
			alias: {
				$src: resolve('./src'),
				$components: resolve('./src/components'),
				$sections: resolve('./src/sections')
			}
		}
	}
  },
};
 
export default config;
import { images } from './data.js';

export function load() {
	return {
		image: images.map((img) => ({
			url: img.url,
			alt: img.alt
		}))
	};
}

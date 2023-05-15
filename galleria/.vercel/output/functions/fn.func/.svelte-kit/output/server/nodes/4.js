import * as server from '../entries/pages/exemplos/_page.server.js';

export const index = 4;
export const component = async () => (await import('../entries/pages/exemplos/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/exemplos/+page.server.js";
export const imports = ["_app/immutable/nodes/4.4586739f.js","_app/immutable/chunks/index.0a230d69.js"];
export const stylesheets = ["_app/immutable/assets/4.5224b6ca.css"];
export const fonts = [];

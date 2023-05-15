export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["bars.svg","favicon.png","Img-Email.svg","ImgArrow-up.svg","ImgPhone.svg","ImgSend.svg","ImgSvelte.svg","ImgUser.svg"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.bc771965.js","app":"_app/immutable/entry/app.5a61a855.js","imports":["_app/immutable/entry/start.bc771965.js","_app/immutable/chunks/index.8a1cb405.js","_app/immutable/chunks/singletons.98c9b298.js","_app/immutable/entry/app.5a61a855.js","_app/immutable/chunks/index.8a1cb405.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js'),
			() => import('../output/server/nodes/5.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/contato",
				pattern: /^\/contato\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/fotos",
				pattern: /^\/fotos\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/sobre",
				pattern: /^\/sobre\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

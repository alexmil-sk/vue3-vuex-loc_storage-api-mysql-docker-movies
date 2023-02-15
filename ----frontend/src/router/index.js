import {
	createRouter,
	createWebHistory
} from 'vue-router';

const routes = [{
		path: "/login",
		component: () => import("../pages/Login.vue"),
		alias: "/"
	},
	{
		path: "/home",
		component: () => import("../pages/Home.vue"),
		meta: {
			requiresAuth: true
		},
		children: [{
			path: ":id",
			component: () => import("../pages/Team.vue"),
			props: true
		}, ]
	},
	{
		path: "/catalog",
		component: () => import("../pages/Catalog.vue"),
		meta: {
			requiresAuth: true
		},
	},
	{
		path: "/registration",
		component: () => import("../pages/Registration.vue"),
	},
	{
		path: "/forget",
		component: () => import("../pages/Forget.vue"),
	},
	{
		path: "/form",
		component: () => import("../pages/Form.vue"),
		meta: {
			requiresAuth: true
		},
	},
	{
		path: '/:notFound(.*)',
		component: () => import("../pages/NotFound.vue"),

	}

]

export const router = createRouter({
	routes,
	history: createWebHistory(),
	linkActiveClass: 'active',
	linkExactActiveClass: 'active'
});

router.beforeEach((to, _, next) => {
	let isAuthenticated = !false;
	if (to.meta.requiresAuth && !isAuthenticated) return next('/login');
	next();
});




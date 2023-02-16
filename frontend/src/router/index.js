import {
	createRouter,
	createWebHistory
} from 'vue-router';

const routes = [
	{
		path: "/",
		component: () => import("../pages/Home.vue"),
		meta: {
			layout: 'main'
		}
	},
	{
		path: "/contacts",
		component: () => import("../pages/Contacts.vue"),
		meta: {
			requiresAuth: true,
			layout: 'main'
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
			requiresAuth: true,
			layout: 'main'
		},
	},
	{
		path: "/form",
		component: () => import("../pages/Form.vue"),
		meta: {
			requiresAuth: true,
			layout: 'main'
		},
	},
	{
		path: "/login",
		component: () => import("../pages/Login.vue"),
		meta: {
			layout: 'auth'
		}
	},
	{
		path: "/registration",
		component: () => import("../pages/Registration.vue"),
		meta: {
			layout: 'auth'
		}
	},
	{
		path: "/forget",
		component: () => import("../pages/Forget.vue"),
		meta: {
			layout: 'auth'
		}
	},
	{
		path: '/:notFound(.*)',
		component: () => import("../pages/NotFound.vue"),
		layout: 'main'
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
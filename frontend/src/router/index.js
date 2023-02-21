import {
	createRouter,
	createWebHistory
} from 'vue-router';
import store from "../store";
import Toaster from "@meforma/vue-toaster";


const routes = [{
		path: "/",
		component: () => import("../pages/Home.vue"),
		meta: {
			requiresAuth: true,
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
			requiresAuth: false,
			layout: 'auth'
		}
	},
	{
		path: "/registration",
		component: () => import("../pages/Registration.vue"),
		meta: {
			requiresAuth: false,
			layout: 'auth'
		}
	},
	{
		path: "/forget",
		component: () => import("../pages/Forget.vue"),
		meta: {
			requiresAuth: false,
			layout: 'auth'
		}
	},
	{
		path: '/:notFound(.*)',
		component: () => import("../pages/NotFound.vue"),
		requiresAuth: false,
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

	let isAuthenticated = store.getters['auth/isAuthenticated'];
	if (to.meta.requiresAuth && !isAuthenticated) return next('/login?message=login_error')
	next();
});
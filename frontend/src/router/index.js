import {
	createRouter,
	createWebHistory
} from 'vue-router';

const routes = [

	{
		path: "/catalog",
		component: () => import("../pages/Catalog.vue"),
	},
	{
		path: "/login",
		component: () => import("../pages/Login.vue"),
		alias: "/"
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
	}

]


export const router = createRouter({
	routes,
	history: createWebHistory(),
	linkActiveClass: 'active',
	linkExactActiveClass: 'active'
})
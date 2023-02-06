import {
	createRouter,
	createWebHistory
} from 'vue-router';

const routes = [
	{
		path: "/",
		component: () => import("")
	},
	{
		path: "/login",
		component: () => import("../pages/Login.vue")
	},

]


export const router = createRouter({
	routes,
	history: createWebHistory()
})

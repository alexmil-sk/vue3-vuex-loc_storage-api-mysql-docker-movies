import {
	createApp
} from 'vue';
import store from "./store";
import App from './App.vue';
import Toaster from "@meforma/vue-toaster";
import {router} from './router';
import './assets/styles/base.css'

createApp(App)
	.use(Toaster, {
	position: "top",
	pauseOnHover: true,
	duration: 2000
	})
	.use(router)
	.use(store)
	.mount('#app')


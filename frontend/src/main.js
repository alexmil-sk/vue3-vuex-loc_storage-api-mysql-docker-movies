import {
	createApp
} from 'vue';
import App from './App.vue';
import Toaster from "@meforma/vue-toaster";
import './assets/base.css'

createApp(App).use(Toaster, {
	position: "top",
	pauseOnHover: true,
	duration: 2000
}).mount('#app')
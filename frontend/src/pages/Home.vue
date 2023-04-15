<template>
	<div class="container-home">
		<ButtonUI @action="reloadMysqlArray" color="lightblue" class="ButtonUI">
			<img :src="reloadIcon" />
		</ButtonUI>
		<h1 v-if="mysqlFilms.length">Films Database (Mysql)</h1>
		<router-link to="/form" v-else="!mysqlFilms?.length">
			<h1>Add Films</h1>
		</router-link>
		<div v-if="isLoadingMysql" class="loader">
			<LoaderComp />
		</div>
		<div v-else class="container-home_flex">
			<h2 v-if="!mysqlFilms.length" :key="true">MySQL Database Is Empty...</h2>
			<FilmsMysqlArray v-else/>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ButtonUI from "../components/UI/ButtonUi.vue";
import FilmsMysqlArray from '../components/FilmsMysql/FilmsMysqlArray.vue';
import LoaderComp from "../components/LoaderComp/LoaderComp.vue";


export default {
	name: "Home",
	components: { FilmsMysqlArray, LoaderComp, ButtonUI },
	data() {
		return {
			reloadKey: 0,
			reloadIcon: this.$store.state.mysql.reloadIcon
		}
	},
	mounted() {		
		this.reloadMysqlArray();
	},
	methods: {
		...mapActions('mysql', ['fetchMysqlMoviesAsync']),

		reloadMysqlArray() {
			this.fetchMysqlMoviesAsync();
			setTimeout(() => {
				this.$toast.show("<h3>Films has been loaded successfully!</h3>", {
					type: "info",
				});
			}, 2500)
		}
	},
	computed: {
		...mapGetters('mysql', ['mysqlFilms', 'isLoadingMysql']),
	}
}

</script>

<style lang="css" scoped>
.container-home {
	min-height: 50vh;
	min-width: 600px;
	border: 5px solid rgba(255, 255, 255, 0.7);
	border-radius: 40px;
	box-shadow: 0px 0px 10px 15px rgba(225, 229, 234, 0.3);
	padding: 25px;
	background-color: #1f2937;
	color: #ccc;
}

.ButtonUI {
	position: relative;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 50px;
	height: 50px;
	border: 1px solid rgba(132, 190, 215, 0.95);
	box-shadow: 0 0 10px 10px rgba(154, 109, 111, 0.9);
	transform: scale(1);
	transition: transform 300ms linear;
}

.ButtonUI:after {
	position: absolute;
	width: max-content;
	content: 'Reload Films';
	font-size: 1.2rem;
	left: 150%;
	text-shadow: 1px 1px 2px red, 0 0 1em rgba(154, 109, 111, 0.9), 0 0 0.2em rgba(154, 109, 111, 0.9);
	color: #ccc;
}

.ButtonUI:hover {
	transform: scale(1.1);
}

.ButtonUI:active {
	box-shadow: 0 0 10px 5px rgba(154, 109, 111, 0.9);
}

.container-home h1 {
	text-shadow: 1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue;
	-webkit-text-fill-color: lightslategrey;
	-webkit-text-stroke: .5px lightcoral;

}

.container-home a {
	display: block;
}

.container-home a h1 {
	border: 1px solid white;
	width: max-content;
	margin: 0 auto 10px;
	padding: 0 15px;
	border-radius: 15px;
	border: none;
	box-shadow: inset 0 0 8px 2px white;
	transition: all 600ms linear;
}

.container-home a h1:hover {
	color: #ccc;
}


.container-home_flex {
	display: flex;
	gap: 5px;
	flex-wrap: wrap;
	min-height: 50vh;
	padding: 20px;
	background-color: rgba(42, 44, 65, 0.9);
	border-radius: 25px;
	box-shadow: inset 0px 0px 10px 2px rgba(225, 229, 234, 0.6);
}

.loader {
	position: absolute;
	top: 200px;
	left: 50%;
}
</style>

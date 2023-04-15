<template>
	<div class="container-item" v-if="film">
		<div class="film-id">{{ film.id }}</div>
		<div class="container-item_buttons">
			<router-link :to="{ path: `/edit/${film.id}`}">
				<img :src="editIcon"  @click="() => editFilm(film.id)">
			</router-link>
			<ButtonUi @action="() => deleteFilm(film.id)" color="btn-block_delete" class="red">&times;
			</ButtonUi>
		</div>
		<img :src="film.image" alt @click="(e) => getFilmInfo(film.id)" />
		<span name="title">{{ film.title }}</span>
		<div class="rating-block">
			<div class="rating-result" v-for="(r, idx) in new Array(film.rating)" :key="idx">
				<span class="active" >{{ r }}</span>
			</div>
			<div class="rating-result" v-for="(r, idx) in new Array(10 - film.rating)" :key="idx">
				<span>{{ r }}</span>
			</div>
			<span>{{ film.year }}</span>
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ButtonUi from "../../components/UI/ButtonUi.vue";

export default {
	name: "FilmsMysqlItem",
	components: { ButtonUi },
	props: ['film'],
	data() {
		return {
			editIcon: this.$store.state.mysql.editIcon,
		}
	},
	computed: {
		...mapGetters('mysql', ['mysqlFilmItem', '-'])
	},
	methods: {
		...mapActions('mysql', ['deleteMysqlMovieItemAsync', 'getMysqlMovieItemAsync']),

		deleteFilm(id) {
			this.deleteMysqlMovieItemAsync(id);
			this.$toast.show("<h3>Film has been deleted!</h3>", {
				type: "error",
			});
		},

		getFilmInfo(id) {
			this.$router.push(`/info/${id}`)
		},
		editFilm(id) {
			this.getMysqlMovieItemAsync(id);
		}
	}
}
</script>

<style lang="css" scoped>

.film-id {
	position: absolute;
	display: flex;
	align-items: flex-end;
	justify-content: flex-end;
	right: 20px;
	bottom: 60px;
	width: 100%;
	height: 100%;
	font-size: 4rem;
	color: #fff;
	opacity: .6;
	z-index: 100;
}
.container-item {
	position: relative;
	background-color: #222;
	display: block;
	width: 210px;
	min-height: 350px;
	float: left;
	margin: 2px;
	text-align: center;
	font-size: 16px;
	padding-top: 5px;
	border: 1px solid #222;
	border-radius: 10px;
	color: #bbb;
	/* cursor: pointer; */
}

.container-item:hover {
	background-color: #333;
	border: 1px solid #999;
}

.container-item img {
	width: 200px;
	height: 300px;
	border-radius: 5px;
}

.container-item span[name='title'] {
	word-wrap: break-word;
}

.rating-block {
	display: flex;
	align-items: center;
	width: 100%;
}

.rating-block span {
	font-size: 16px;
	margin: 0 auto;
	color: crimson;
	font-weight: bold;
}

.rating-result {
	width: max-content;
}

.rating-result>span {
	padding: 0;
	font-size: 0.85rem;
	margin: 2px;
	line-height: 1;
	color: lightgrey;
	text-shadow: 1px 1px #bbb;
}

.rating-result>span:before {
	content: '★';
}

.rating-result>span.active {
	color: gold;
	text-shadow: 1px 1px #c60;
}

.container-item_buttons {
	position: absolute;
	display: flex;
	align-items: center;
	width: 100%;
	height: max-content;
	justify-content: space-between;
	top: 0;
	padding: 10px;
	z-index: 100;
}

.container-item_buttons a {
	display: flex;
	justify-content: center;
	padding: 3px;
	width: 35px;
	height: 35px;
	border-radius: 50%;
	background-color: rgb(228, 183, 22);
	box-shadow: 0 0 10px 1px white;

}

.container-item_buttons a img {
	width: 26px;
	height: 25px;
}

.btn-block_delete {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 35px;
	height: 35px;
	border: none;
	border-radius: 50%;
	box-shadow: 0 0 10px 1px white;
	font-size: 25px;
	color: white;
	cursor: pointer;
}
</style>
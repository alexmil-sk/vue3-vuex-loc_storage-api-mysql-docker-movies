<template>
  <div class="container">
    <form @submit.prevent="createFilmCard" class="card">
			<h2>Adding Film Card</h2>
			<div class="form-control">
				<label for="id">Film Title</label>
				<input type="text" id="id" v-model.trim="id" :disabled="id.length"/>
			</div>
			<div class="form-control">
				<label for="title">Input Film Title</label>
				<input type="text" id="title" v-model.trim="title"/>
			</div>
			<div class="form-control">
				<label for="poster">Input Film Poster Url</label>
				<input type="text" id="poster" v-model.trim="posterUrl"/>
			</div>
			<button
				type="submut"
				class="btn primary"
				:disabled="!title.length || !posterUrl.length"
				>SEND</button>
		</form>
  </div>
</template>
<script>
export default {
	name: {FilmForm},
	data() {
		return {
			id: '',
			title: '',
			posterUrl: ''
		}
	}, methods: {
		createFilmCard() {
			this.$toast.show('Film card was sending', { type: 'success' });
		}
	}
};
</script>

<style lang="css" scoped>
@import "../../assets/styles/theme_form.css";
</style>
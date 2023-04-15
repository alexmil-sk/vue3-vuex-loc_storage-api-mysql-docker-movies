<template>
	<div class="container">
		<form @submit.prevent="addHandler" class="card">
			<!-- ========================================================= -->
			<h2>Add Film (MySQL DB)</h2>

			<!-- ========================================================= -->
			<InputValidUiNumber label="Film ID" :mysqlFilmItemId="movie.id" :isSubmitting="isSubmitting" :isEditing="true"
				:errorsFieldId="errors.fieldId" v-model:modelNumber.number="movie.id" />

			<!-- ========================================================= -->
			<InputValidUiText label="Insert Film Title" :mysqlFilmItemTitle="movie.title" :isSubmitting="isSubmitting"
				:isEditing="true" :errorsFieldTitle="errors.fieldTitle" v-model:modelText.trim="movie.title" />

			<!-- ========================================================= -->
			<InputValidUiText label="Insert Film Poster Url" :mysqlFilmItemTitle="movie.image" :isSubmitting="isSubmitting"
				:isEditing="true" :errorsFieldTitle="errors.fieldImage" v-model:modelText.trim="movie.image" />

			<!-- ========================================================= -->
			<InputValidUiNumber label="Input Film Year" :mysqlFilmItemId="movie.year" :isSubmitting="isSubmitting"
				:isEditing="true" :errorsFieldId="errors.fieldYear" v-model:modelNumber="movie.year" />
			<!-- ========================================================= -->
			<div class="form-control">
				<label for="rating-select">Insert Film Rating</label>
				<select name="rating" id="rating-select" v-model.number="movie.rating" :disabled="isSubmitting" :style="movie.rating
					? 'box-shadow: inset 0 0 1px 2px lightgreen'
					: 'box-shadow: inset 0 0 8px 2px rgb(243, 76, 76)'">
					<option :value="r" v-for="(r, idx) in 10" :key="idx">{{ r }}</option>
				</select>
			</div>
			<!-- ========================================================= -->
			<div class="block-submit">
				<router-link :to="{ path: `/` }">
					<button type="button" class="btn-submit danger" :disabled="isSubmitting">Back
					</button>
				</router-link>
				<button type="submit" class="btn-submit primary" :disabled="isSubmitting || !trueValid">
					<p v-if="!isSubmitting">Add Film</p>
					<p v-else class="loader"></p>
				</button>
			</div>
			<!-- ========================================================= -->
		</form>
	</div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import formIsValid from "../utils/validateAddFrom.js";
import InputValidUiNumber from '../components/UI/InputValidUiNumber.vue';
import InputValidUiText from '../components/UI/InputValidUiText.vue';


export default {
	name: "Form",
	components: { InputValidUiNumber, InputValidUiText },
	data() {
		return {
			movie: { ...this.$store.state.mysql.mysqlFilmItemDefault, id: this.$store.state.mysql.mysqlFilms.length + 1 },
			isSubmitting: false,
			errors: {
				fieldId: null,
				fieldTitle: null,
				fieldYear: null,
				fieldImage: null,
			},
			trueValid: () => formIsValid()
		}
	},
	computed: {
		...mapGetters('mysql', ['mysqlFilms']),
	},
	methods: {

		...mapActions('mysql', ['addMysqlMovieItemAsync']),

		addHandler() {
			const movie = this.movie;
			const errors = this.errors;
			const params = null;

			if (this.mysqlFilms.find(item => item.id === this.movie.id)) {
				setTimeout(() => {
					this.$toast.show("<h3>This _ID_ already exist!</h3>", {
						type: "error",
					});
				}, 1000)
				return;
			} else if (formIsValid(movie, errors, params)) {

				this.isSubmitting = true;
				setTimeout(() => {
					this.addMysqlMovieItemAsync(this.movie);
					this.$toast.show("<h3>Film has been added successfully!</h3>", {
						type: "success",
					});
					this.isSubmitting = false;
					this.$router.push('/')
				}, 2000)
			}
		}
	}

};

</script>

<style lang="css" scoped>
h1,
h2,
h3,
h4,
h5,
h6 {
	font-weight: 500;
	line-height: 1.45;
	margin-bottom: 10px;
}

h1 {
	font-size: 2.2rem;
	font-weight: 600;
	text-align: center;
}

h2 {
	font-size: 1.65rem;
	padding-bottom: 0.3rem;
	text-align: center;
}

h3 {
	font-size: 1.35rem;
}

.block-submit {
	display: flex;
	justify-content: center;
	margin-top: 2rem;
}

.btn-submit {
	color: #42b983;
	position: relative;
	place-content: center;
	place-items: center;
	width: 200px;
	height: 40px;
	border-radius: 99px;
	letter-spacing: 0.05em;
	border: 1px solid #42b983;
	text-decoration: none;
	text-transform: uppercase;
	margin-right: 10px;
	padding: 0.5rem 1.5rem;
	white-space: nowrap;
	font-weight: 700;
	outline: none;
	background: #fff;
	transition: all 0.22s;
}

.btn-submit:hover {
	cursor: pointer;
	border: 1px solid white;
	box-shadow: 0 0 15px 3px rgba(255, 255, 255, 0.9);

	transform: translateY(-5px);
}

.btn-submit.primary:disabled {
	background: #8ec0a9;
	cursor: not-allowed;
	transform: translateY(0);
	border: none;
	box-shadow: none;
}

.btn-submit:active {
	box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.3);
	transform: translateY(0);

}

.btn-submit.primary {
	background: #42b983;
	color: #fff;
}

.btn-submit.danger {
	background: #e53935;
	color: #fff;
	border-color: #e53935;
}

.btn.warning {
	background: #c25205;
	color: #fff;
	border-color: #c25205;
}

.container {
	margin: 0 auto;
	max-width: 1000px;
}

.pt-2 {
	padding-top: 2rem;
}

.pt-1 {
	padding-top: 1rem;
}

.pt-5 {
	padding-top: 5rem;
}

.form-control {
	position: relative;
	margin-bottom: 0.5rem;
}

.form-control input {
	margin: 0;
	outline: none;
	border: 2px solid #ccc;
	display: block;
	width: 100%;
	color: #2c3e50;
	padding: 0.5rem 1.5rem;
	border-radius: 3px;
	font-size: 1.2rem;
}

.form-control select {
	margin: 0;
	outline: none;
	border: 2px solid #ccc;
	display: block;
	width: max-content;
	color: #2c3e50;
	padding: 0.5rem 1.5rem;
	border-radius: 3px;
	font-size: 1.2rem;
}

.form-control small {
	color: #e9cecd;
	font-size: 1rem;
}


.form-checkbox {
	margin-bottom: 1rem;
}

.form-checkbox .label {
	display: block;
	margin: 0 0 0.3rem 0.3rem;
	font-weight: 500;
}

.form-checkbox .checkbox input {
	margin-right: 1rem;
}

.form-control label {
	display: block;
	margin: 0 0 0.3rem 0.3rem;
	font-weight: 500;
	font-size: 1.2rem;

}

.form-control input:active,
.form-control input:focus {
	transition: border 0.22s;
	border: 2px solid #42b983;
}

.card {
	width: 500px;
	padding: 1rem;
	margin: 10px auto;
	margin-bottom: 1rem;
	border-radius: 10px;
	box-shadow: 2px 3px 15px 10px rgba(255, 255, 255, 0.9);
	color: #fff;
	background-color: rgba(0, 0, 0, .7);
}

.card.marked {
	border: 4px solid #42b983;
}

.card.center {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.list {
	margin: 0;
	padding: 0;
	list-style: none;
}

.list-item {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0.5rem 0;
}

.alert {
	padding: 1rem 1.5rem;
	border-left-width: .5rem;
	border-left-style: solid;
	margin: 1rem 0;
	position: relative;
	border-bottom-right-radius: 2px;
	border-top-right-radius: 2px;
}

.alert.primary {
	border-color: #42b983;
	background-color: #f8f8f8;
}

.alert.danger {
	border-color: #e53935;
	background-color: #f8f8f8;
}

.alert.warning {
	border-color: #c25205;
	background-color: #f8f8f8;
}

.alert.info {
	border-color: #0000ff;
	background-color: #f8f8f8;
}

.alert p {
	color: #222;
	line-height: 1.7;
}

.alert-title {
	text-transform: uppercase;
	font-weight: 600;
	margin-bottom: -.4rem;
	color: #222;
}

.modal {
	position: fixed;
	top: 60px;
	width: 600px;
	padding: 1rem;
	background: #fff;
	z-index: 1000;
	left: 50%;
	border-radius: 10px;
	transform: translateX(-50%);
	box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.2);
}

.modal-backdrop {
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	background: rgba(0, 0, 0, .35);
}


.loader {
	font-size: 5px;
	margin: 0px auto;
	text-indent: -9999em;
	width: 5em;
	height: 5em;
	border-radius: 50%;
	background: #ffffff;
	background: -moz-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
	background: -webkit-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
	background: -o-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
	background: -ms-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
	background: linear-gradient(to right, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
	position: relative;
	-webkit-animation: load3 1.4s infinite linear;
	animation: load3 1.4s infinite linear;
	-webkit-transform: translateZ(0);
	-ms-transform: translateZ(0);
	transform: translateZ(0)
}

.loader:before {
	width: 50%;
	height: 50%;
	background: #ffffff;
	border-radius: 100% 0 0 0;
	position: absolute;
	top: 0;
	left: 0;
	content: '';
}

.loader:after {
	background: #2c3e50;
	width: 75%;
	height: 75%;
	border-radius: 50%;
	content: '';
	margin: auto;
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
}

@-webkit-keyframes load3 {
	0% {
		-webkit-transform: rotate(0deg);
		transform: rotate(0deg);
	}

	100% {
		-webkit-transform: rotate(360deg);
		transform: rotate(360deg);
	}
}

@keyframes load3 {
	0% {
		-webkit-transform: rotate(0deg);
		transform: rotate(0deg);
	}

	100% {
		-webkit-transform: rotate(360deg);
		transform: rotate(360deg);
	}
}
</style>
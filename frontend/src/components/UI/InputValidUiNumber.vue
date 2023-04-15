<template>
	<div class="form-control" :class="errorsFieldId ? 'invalid' : 'valid'">
		<label for="id-ui-valid" v-text="label"></label>
		<div v-if="isEditing">
			<input
				type="number"
				name="id"
				id="id-ui-valid"
				:disabled="isSubmitting"
				:placeholder="mysqlFilmItemId"
				:value="modelNumber" @input="change" />
			<small v-if="errorsFieldId">{{ errorsFieldId }}</small>
		</div>
		<div v-else class="before-edit">
			<p>{{ mysqlFilmItemId }}</p>
		</div>
	</div>
</template>

<script>
export default {
	props: ["label", "modelNumber", "mysqlFilmItemId", "isSubmitting", "isEditing", "errorsFieldId"],
	emits: ['update:modelNumber'],
	methods: {
		change(e) {
			this.$emit('update:modelNumber', e.target.value);
		}
	}
}
</script>

<style lang="css" scoped>
.form-control {
	position: relative;
	margin-bottom: 0.5rem;
}

.form-control input {
	margin: 5px 0;
	outline: none;
	border: 2px solid #ccc;
	display: block;
	width: 100%;
	color: #2c3e50;
	padding: 0.5rem 1.5rem;
	border-radius: 3px;
	font-size: 1.2rem;
}

.form-control input::placeholder {
	color: #c9c9c9;
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

.form-control small {
	color: #e9cecd;
	font-size: 1rem;
}

.form-control.invalid input {
	box-shadow: inset 0 0 8px 2px rgb(243, 76, 76);
}

.form-control.valid input {
	box-shadow: inset 0 0 1px 2px lightgreen;
}

.before-edit {
	padding: 5px;
	margin-left: 10px;
	font-size: 1.2rem;
	color: yellow;
}
</style>
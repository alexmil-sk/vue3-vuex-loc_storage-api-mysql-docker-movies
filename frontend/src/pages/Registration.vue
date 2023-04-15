<template>
	<Form @submit="onSubmit" class="card" :validation-schema="registrationSchema">
		<h2>REGISTRATION</h2>
		<div :class="['form-control']">
			<label for="email">EMAIL</label>
			<Field name="email" type="text" id="email" />
			<ErrorMessage name="email" class="error-message" />
		</div>
		<div :class="['form-control']">
			<label for="password">PASSWORD</label>
			<Field name="password" type="password" id="password" />
			<ErrorMessage name="password" class="error-message" />
		</div>
		<div>
			<button class="btn warning" type="submit" :disabled="isSubmitting">Ragistration</button>
			<router-link to="/login">
				<button class="btn primary">Login</button>
			</router-link>
		</div>
	</Form>
</template>
<script>
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

export default {
	name: "Registration",
	components: {
		Form, Field, ErrorMessage
	},
	data() {
		return {
			minLength: 6,
			isSubmitting: false,
		}
	},
	computed: {
		registrationSchema() {
			return yup.object({
				email: yup
					.string()
					.trim()
					.required("This field is required!")
					.matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'This is not a valid email'),
				//.email('This is not a valid email'),
				password: yup
					.string()
					.trim()
					.required("This field is required!")
					.min(this.minLength, `The password cannot be shorter than ${this.minLength} characters`)
			})
		},
	},
	methods: {
		async onSubmit(values) {
			try {
				await this.$store.dispatch('auth/regAccount', values);
					this.$router.replace('/login');
			} catch (e) { }
		},
	},
};
</script>

<style lang="css" scoped>
@import "../assets/styles/reg_auth.css";
</style>
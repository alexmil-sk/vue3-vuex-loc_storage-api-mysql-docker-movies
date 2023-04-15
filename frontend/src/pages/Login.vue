<template>
	<Form @submit="onSubmit" class="card">
		<h2>LOGIN</h2>
		<div :class="['form-control', { invalid: eError }]">
			<label for="email">EMAIL</label>
			<Field name="email" type="email" id="email" :rules="validateEmail" />
			<ErrorMessage name="email" class="error-message" />
		</div>
		<div :class="['form-control', { invalid: pError }]">
			<label for="password">PASSWORD</label>
			<Field name="password" type="password" id="password" :rules="validatePass" />
			<ErrorMessage name="password" class="error-message" />
		</div>
		<div>
			<button class="btn primary" type="submit" :disabled="eError || pError || isSubmitting">Enter
			</button>
			<router-link to="/registration">
				<button class="btn warning ">
					Ragistration
				</button>
			</router-link>
			<router-link to="/forget">Forget password?</router-link>
		</div>
	</Form>
</template>
<script>
import { Field, Form, ErrorMessage } from "vee-validate";


export default {
	name: "Login",
	components: {
		Field, Form, ErrorMessage
	},
	data() {
		return {
			eError: true,
			pError: true,
			isSubmitting: false
		};
	},

	methods: {
		async onSubmit(values) {

			try {
				await this.$store.dispatch('auth/loginAccount', values);
				this.$router.replace("/");

				if (!this.$store.state.errMessage) {
					this.$toast.show("<h3>Authorization was successfull!</h3>", {
						type: "success",
					});
				}
			} catch (e) { }

		},
		validateEmail(value) {
			this.eError = true;
			const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
			
			if (!value) {
				return "This field is required!";
			}

			if (!regex.test(value)) {
				return 'This is not a valid email';
			}

			if (value && value.trim()) {
				this.eError = false;
				return true;
			}
		},
		validatePass(value) {
			this.pError = true;

			if (!value) {
				return 'This field is required!';
			} else if (value.length < 6) {
				return `You insert ${value.length} symbols. Password must contain at least 6 symbols!`;
			}
			this.pError = false;
			return true;
		}
	},
};
</script>

<style lang="css" scoped>
@import "../assets/styles/reg_auth.css";
</style>
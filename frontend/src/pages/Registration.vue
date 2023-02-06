<template>
  <form @submit.prevent="login" class="card">
    <h2>REGISTRATION</h2>
    <div class="form-control">
      <label for="email">EMAIL</label>
      <input type="text" id="email" v-model.trim="email" />
    </div>
    <div class="form-control">
      <label for="password">PASSWORD</label>
      <input type="password" id="password" v-model="password" />
    </div>
    <div class="">
      <button class="btn primary" type="submit">Enter</button>
      <button class="btn warning">Ragistration</button>
    </div>
  </form>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
	},
	computed: {
		isValid() {
			return this.email !== '' && this.password !== ''
		}
	},
	methods: {
		login() {
			if (isValid) {
				//login
			}
		}
	}
};
</script>

<style lang="css" scoped>
@import "../assets/styles/theme_auth.css";
</style>
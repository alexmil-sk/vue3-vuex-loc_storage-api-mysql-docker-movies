<template>
  <form @submit.prevent="submit" class="card">
    <h2>LOGIN</h2>
    <div class="form-control">
      <label for="email">EMAIL</label>
      <input type="text" id="email" v-model.trim="email" />
    </div>
    <div class="form-control">
      <label for="password">PASSWORD</label>
      <input type="password" id="password" v-model="password" />
    </div>
    <div>
      <button class="btn primary" type="submit">Enter</button>
      <router-link to="/registration">
        <button class="btn warning">
          Ragistration
        </button>
      </router-link>
      <router-link to="/forget">Forget password?</router-link>
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
      return this.email !== "" && this.password !== "";
    },
  },
  methods: {
    submit() {
      if (this.isValid) {
				this.login();
      }
    },
	},
	inject: ['login']
};
</script>

<style lang="css" scoped>
@import "../assets/styles/theme_auth.css";
</style>
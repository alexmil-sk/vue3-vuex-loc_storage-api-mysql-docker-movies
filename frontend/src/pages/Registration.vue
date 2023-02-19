<template>
  <form @submit.prevent="registration" class="card">
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
      <button class="btn warning" type="submit">Ragistration</button>
      <router-link to="/login">
        <button class="btn primary">Login</button>
      </router-link>
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
    registration() {
      if (this.isValid) {
				this.$toast.show("<h3>Registration was successfull!</h3>", {
					type: "success",
				});
      }
    },
  },
};
</script>

<style lang="css" scoped>
@import "../assets/styles/theme_auth.css";
</style>
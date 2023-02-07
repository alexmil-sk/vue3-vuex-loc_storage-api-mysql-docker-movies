<template>
  <div>
    <div class="wrapper">
      <div class="header" v-if="isAuth">
        <TheNavbar />
        <ModePanel />
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import ModePanel from "./components/ModePanel/ModePanel.vue";
import TheNavbar from "./components/TheNavbar/TheNavbar.vue";

export default {
  name: "App",
  components: {
    ModePanel,
    TheNavbar,
  },
  data() {
    return {
      isAuth: false,
    };
  },
  methods: {
    login() {
      this.isAuth = true;
      this.$router.replace("/catalog");
    },
    logout() {
      this.isAuth = false;
      this.$router.replace("/login");
    },
	},
	provide() {
		return {
			login: this.login,
			logout: this.logout
		}
	}
};
</script>

<style>
.header {
  display: flex;
	min-width: 450px;
  justify-content: space-between;
  padding: 5px 45px;
  margin: 0 auto 35px;
}

</style>

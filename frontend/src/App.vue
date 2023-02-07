<template>
  <div>
    <div class="wrapper">
      <div class="header">
        <TheNavbar />
        <ModePanel />
      </div>
    </div>
    <div>
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
  mounted() {
    this.isAuth = localStorage.getItem("isAuth");
  },
  methods: {
    login() {
      this.isAuth = true;
      this.$router.replace("/home");
    },
    logout() {
      this.isAuth = false;
      this.$router.replace("/login");
    },
  },
  provide() {
    return {
      login: this.login,
      logout: this.logout,
    };
  },
  watch: {
    isAuth(newValue) {
      localStorage.isAuth = newValue;
    },
  },
};
</script>

<style lang="css" scoped>
.header {
  display: flex;
  min-width: 450px;
  justify-content: space-between;
  padding: 5px 45px;
  margin: 0 auto 35px;
}
</style>

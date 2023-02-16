<template>
  <div class="wrapper">
    <div class="header">
      <TheNavbar />
      <ModePanel />
    </div>
		<router-view></router-view>
  </div>
</template>
<script>
import ModePanel from "../components/ModePanel/ModePanel.vue";
import TheNavbar from "../components/TheNavbar/TheNavbar.vue";
export default {
  name: "MainLayout",
  components: { TheNavbar, ModePanel },
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
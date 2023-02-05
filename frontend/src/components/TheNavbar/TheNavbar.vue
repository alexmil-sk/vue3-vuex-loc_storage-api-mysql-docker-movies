<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-title">
        <span class="navbar-logo">
          <img :src="logo" alt="logo" />
        </span>
        <h1 class="navbar-head">CINEMA ONLINE</h1>
      </div>
      <div class="navbar-buttons">
        <div class="navbar-nav">
          <button class="nav-link">Home</button>
          <button class="nav-link">Features</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TheNavbar",
  computed: {
    logo() {
      return this.$store.getters.logo;
    },
  },
};
</script>

<style lang="css" scoped>
.navbar {
  display: flex;
  width: 100%;
  height: 160px;
  align-items: center;
  margin-right: 20px;
}
.container {
  display: flex;
  align-items: end;
  justify-content: space-between;
  height: 100%;
  width: 100%;
}

.navbar-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1f2937;
  border-radius: 20px;
  border: 1px solid #fff;
  padding: 15px;
  box-shadow: 0 0 20px 5px rgba(255, 255, 255, 0.5);
}
.navbar-logo img {
  width: 100px;
}
.navbar-head {
  color: #fff;
  text-align: center;
}
.navbar-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1f2937;
  border-radius: 20px;
  border: 1px solid #fff;
  padding: 0px 15px;
  margin: 0 10px;
  height: 70px;
  box-shadow: 0 0 20px 5px rgba(255, 255, 255, 0.5);
}
.navbar-nav {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: center;
}
.nav-link {
  padding: 5px 10px;
  cursor: pointer;
  margin: 5px;
  font-size: 18px;
  width: 96px;
  border-radius: 5px;
  border: 1px solid gray;
  color: gray;
}
</style>
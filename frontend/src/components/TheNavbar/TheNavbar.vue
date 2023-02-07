<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-title">
        <span class="navbar-logo">
          <img :src="logo" alt="logo" @click="$router.push('/home')" />
        </span>
        <h1 class="navbar-head">CINEMA ONLINE</h1>
      </div>
      <div class="navbar-buttons">
        <ul class="navbar-menu">
          <li>
            <router-link to="/home" custom v-slot="{ navigate, href }">
              <a
                href="#"
                @click="navigate"
                :class="{ active: $route.path.indexOf(href) !== -1 }"
              >
                Home
              </a>
            </router-link>
          </li>
          <li>
            <router-link to="/catalog">Catalog</router-link>
          </li>
          <li>
            <router-link to="/form">Form</router-link>
          </li>
          <span @click="logout" class="logout">
            <router-link to="/">
              <img :src="logoutIcon" alt="logoutIcon" />
            </router-link>
          </span>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import logout_png from "../../assets/icons/logout.png";

export default {
  name: "TheNavbar",
  data() {
    return {
      logo: this.$store.state.logo,
      logoutIcon: logout_png,
    };
  },
  inject: ["logout"],
};
</script>

<style lang="css" scoped>
.navbar {
  display: flex;
  width: 100%;
  min-width: 250px;
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
@media (max-width: 820px) {
  .navbar-title {
    flex-basis: 132px;
  }
}

.navbar-logo img {
  width: 100px;
  border-radius: 50%;
  padding: 1px;
  transition: 600ms;
}
.navbar-logo img:hover {
  cursor: pointer;
  box-shadow: 0 0 20px 5px rgba(255, 255, 255, 0.5);
  background-color: #d40912;
  transform: scale(1.1);
}

.navbar-logo img:active {
  border: none;
  box-shadow: none;
  transform: scale(1);
}

.navbar-head {
  color: #fff;
  text-align: center;
  margin: 3px 0;
}
.navbar-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1f2937;
  border-radius: 20px;
  border: 1px solid #fff;
  padding: 10px 15px;
  margin: 0 10px;
  min-height: 70px;
  box-shadow: 0 0 20px 5px rgba(255, 255, 255, 0.5);
}
.navbar-menu {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  list-style: none;
  padding: 0;
}

@media (max-width: 820px) {
  .navbar-menu {
    flex-direction: column;
  }
}
.navbar-menu li {
  display: flex;

  cursor: pointer;
  margin: 5px;
  height: 33px;
  border-radius: 7px;
  border: 1px solid #fff;
  background-color: #00c4e2;
  box-shadow: inset 0 0 15px 5px #0078ba;
}
.navbar-menu span.logout {
  background-color: #fff;
  box-shadow: none;
  border: 2px solid #fff;
  border-radius: 5px;
  height: 33px;
  margin: 5px;
  border-radius: 5px;
}

.navbar-menu span.logout img {
  height: 30px;
  width: inherit;
  text-align: center;
  border-radius: 3px;
}
.navbar-menu span.logout img:hover {
  background-color: #ff9f1a;
}

.navbar-menu li a {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 18px;
  width: 96px;
  text-decoration: none;
  color: #fff;
  border-radius: 6px;
  transition: 600ms;
}
.navbar-menu li:hover {
  border: 1px solid yellow;
}
.navbar-menu li a:hover {
  color: yellow;
}

.navbar-menu li a.active {
  color: #fff;
  background-color: #d40912;
  box-shadow: inset 0 0 15px 5px #6b0001;
  border-radius: 7px;
}
</style>
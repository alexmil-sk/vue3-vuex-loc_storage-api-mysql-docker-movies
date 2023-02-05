<template>
  <div>
    <Transition name="fade">
      <div v-if="$store.getters.isOpenModal">
        <ModalPopup @goModalPopup="goModalPopup" />
      </div>
    </Transition>

    <div class="wrapper">
      <div class="header">
        <TheNavbar />
        <ModePanel @changeMode="changeMode" />
      </div>
      <div class="container">
        <div
          class="table"
          :class="$store.state.isChanged ? 'bg-green' : 'bg-red'"
        >
          <BtnBlockFetch />
          <div v-if="isLoading" class="loader">
            <LoaderComp />
          </div>

          <div v-else>
            <h1 v-if="films.length">
              Select Movie For Uploading Into The MYSQL Database
            </h1>
            <h1 v-else>Load movies...</h1>

            <FilmsArray :films="films" @chooseFilm="chooseFilm" />
          </div>
        </div>
        <Transition name="chosen">
          <div
            class="table"
            :class="$store.state.isChanged ? 'bg-red' : 'bg-green'"
            v-if="chosenMovies.length"
          >
            <BtnBlockChosen />
            <div>
              <h1>Selected Movies</h1>
              <ChosenArray @deleteChosenItem="deleteChosenItem" />
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script>
import ModePanel from "./components/ModePanel/ModePanel.vue";
import FilmsArray from "./components/Films/FilmsArray/FilmsArray.vue";
import ChosenArray from "./components/Films/ChosenArray/ChosenArray.vue";
import LoaderComp from "./components/LoaderComp/LoaderComp.vue";
import ModalPopup from "./components/ModalPopup/ModalPopup.vue";
import BtnBlockFetch from "./components/BtnBlockFetch/BtnBlockFetch.vue";
import BtnBlockChosen from "./components/BtnBlockChosen/BtnBlockChosen.vue";
import TheNavbar from "./components/TheNavbar/TheNavbar.vue";
import { fetchMovies } from "./utils/fetchMovies.js";

export default {
  components: {
    ModePanel,
    FilmsArray,
    LoaderComp,
    ChosenArray,
    ModalPopup,
    BtnBlockFetch,
    BtnBlockChosen,
    TheNavbar,
  },

  mounted() {
    this.$store.state.isChanged = JSON.parse(localStorage.getItem("isChanged"));
    this.$store.state.films = JSON.parse(localStorage.getItem("films"));
    this.$store.state.chosenMovies = JSON.parse(
      localStorage.getItem("chosenMovies")
    );
  },
  methods: {
    changeMode() {
      this.$store.commit("changeMode");

      this.$toast.show("<h3>Mode was changed!</h3>", {
        type: "info",
      });
    },

    goModalPopup(start, end) {
      this.$store.commit("closeModalPopup");
      this.$store.commit("isLoading");

      this.$toast.show("<h3>Loading is in progress...</h3>", {
        type: "info",
      });

      setTimeout(async () => {
        try {
          this.$store.state.films = await fetchMovies(start, end);

          this.$store.commit("notIsLoading");

          this.$toast.show("<h3>Movies were loaded!</h3>", {
            type: "success",
          });
        } catch (err) {
          this.$toast.show(`<h3>Server returns error: ${err}</h3>`, {
            type: "error",
          });
        }
      }, 3000);
    },
    chooseFilm(id) {
      const selectedMovie = this.films.find((item) => item.id === id);
      const isExist = this.chosenMovies.find((item) => item.id === id);

      if (isExist) {
        setTimeout(() => {
          this.$toast.show(
            `<h3>The Movie ${selectedMovie.title} already exist!</h3>`,
            {
              type: "error",
            }
          );
        }, 500);
      } else {
        this.$store.state.chosenMovies = this.$store.state.chosenMovies.concat(
          this.$store.state.films.filter((item) => item.id === id)
        );
        this.$store.state.films = this.$store.state.films.filter(
          (item) => item.id !== id
        );

        setTimeout(() => {
          this.$toast.show(
            `<h3>The Movie ${selectedMovie.title} was selected!</h3>`,
            {
              type: "default",
            }
          );
        }, 500);
      }
    },
		deleteChosenItem(movie) {
			
      this.$store.commit("deleteChosenItem", movie.id);
      this.$toast.show(
        `<h3>Movie ${movie.title} was deleted from selected!</h3>`,
        {
          type: "warning",
        }
      );
    },
  },
  computed: {
    isChanged() {
      return this.$store.getters.isChanged;
    },
    isLoading() {
      return this.$store.getters.isLoading;
    },
    isOpenModal() {
      return this.$store.getters.isOpenModal;
    },
    films() {
      return this.$store.getters.films;
    },
    chosenMovies() {
      return this.$store.getters.chosenMovies;
    },
  },
  watch: {
    isChanged(newName) {
      localStorage.isChanged = newName;
    },

    films(newArray) {
      localStorage.setItem("films", JSON.stringify(newArray || []));
    },
    chosenMovies(newArray) {
      localStorage.setItem("chosenMovies", JSON.stringify(newArray || []));
    },
  },
};
</script>

<style lang="css" scoped>
.container {
  min-height: 300px;
  width: 100%;
  border: 5px solid rgba(109, 64, 8, 0.9);
  border: 5px solid rgba(255, 255, 255, 0.7);
  border-radius: 40px;
  box-shadow: 0px 0px 15px 20px rgba(109, 64, 8, 0.5);
  padding: 25px;
  /* background: rgba(251, 4, 20, 1); */
  background-color: #1f2937;
}

.header {
  display: flex;
  justify-content: space-between;
  padding: 5px 45px;
  margin: 0 auto 35px;
}
.table {
  min-height: 300px;
  border-radius: 25px;
  border: 3px solid rgba(255, 255, 255, 0.8);
  box-shadow: inset 0px 0px 15px 10px rgba(0, 0, 0, 0.5);
  padding: 25px;
  color: var(--vt-c-white);
  text-align: center;
  font-weight: 900;
  margin: 10px;
}

.bg-green {
  background: url("./assets/images/green_background-2.png") repeat;
  transition: 600ms;
}
.bg-red {
  background: url("./assets/images/red_background-2.png") repeat;
  transition: 600ms;
}

.loader {
  margin: 60px auto;
}

/* transition */

/* fade */

.fade-enter-from {
  z-index: 0;
}

.fade-enter-to {
  z-index: 101;
}

.fade-leave-from {
  z-index: 101;
}
.fade-leave-to {
  z-index: 0;
}

.fade-enter-active {
  transition: all 2s ease;
}
.fade-leave-active {
  transition: all 1s ease;
}

/* chosenMovies */

.chosen-enter-active,
.chosen-leave-active {
  transition: opacity 500ms ease;
}

.chosen-enter-from,
.chosen-leave-to {
  opacity: 0;
}
</style>

<template>
  <div>
    <transition name="fade">
      <div v-if="isOpenModal">
        <ModalPopup
          @goModalPopup="goModalPopup"
          @closeModalPopup="closeModalPopup"
        />
      </div>
    </transition>

    <div class="wrapper">
      <ModePanel :isChanged="isChanged" @changeMode="changeMode" />
      <div class="container">
        <div class="table" :class="isChanged ? 'bg-green' : 'bg-red'">
          <BtnBlockFetch
            @openModalPopup="openModalPopup"
            @deleteFilmsArray="deleteFilmsArray"
          />

          <div v-if="isLoading" class="loader">
            <LoaderComp />
          </div>

          <div v-else>
            <h1 v-if="films.length">
              Select Movie For Uploading Into The MYSQL Database
            </h1>
            <h1 v-else>Load movies...</h1>

            <FilmsArray
              :films="films"
              :isChanged="isChanged"
              @chooseFilm="chooseFilm"
            />
          </div>
        </div>
        <div
          class="table"
          :class="isChanged ? 'bg-red' : 'bg-green'"
          v-if="chosenMovies.length"
        >
          <BtnBlockChosen @deleteChosenMoviesArray="deleteChosenMoviesArray" />
          <div>
            <h1>Selected Movies</h1>
            <ChosenArray
              :chosenMovies="chosenMovies"
              @deleteChosenItem="deleteChosenItem"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import delete_icon from "./assets/icons/delete.png";
import download_icon from "./assets/icons/download.png";
import ModePanel from "./components/ModePanel/ModePanel.vue";
import FilmsArray from "./components/Films/FilmsArray/FilmsArray.vue";
import ChosenArray from "./components/Films/ChosenArray/ChosenArray.vue";
import LoaderComp from "./components/LoaderComp/LoaderComp.vue";
import ModalPopup from "./components/ModalPopup/ModalPopup.vue";
import BtnBlockFetch from "./components/BtnBlockFetch/BtnBlockFetch.vue";
import BtnBlockChosen from "./components/BtnBlockChosen/BtnBlockChosen.vue";
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
  },
  data() {
    return {
      isLoading: false,
      isChanged: false,
      isOpenModal: false,
      films: [],
      chosenMovies: [],
    };
  },
  provide() {
    return {
      deleteIcon: delete_icon,
      downloadIcon: download_icon,
    };
  },
  mounted() {
    this.isChanged = JSON.parse(localStorage.getItem("isChanged"));
    this.films = JSON.parse(localStorage.getItem("films"));
    this.chosenMovies = JSON.parse(localStorage.getItem("chosenMovies"));
  },
  methods: {
    changeMode() {
      this.isChanged = !this.isChanged;

      this.$toast.show("<h3>Mode was changed!</h3>", {
        type: "info",
      });
    },

    openModalPopup() {
      this.isOpenModal = true;
    },
    closeModalPopup() {
      this.isOpenModal = false;
    },
    goModalPopup(start, end) {
      this.isOpenModal = false;

      this.isLoading = true;
      this.$toast.show("<h3>Loading is in progress...</h3>", {
        type: "info",
      });

      setTimeout(async () => {
        try {
          this.films = await fetchMovies(start, end);

          this.isLoading = false;
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

    deleteFilmsArray() {
      if (this.films.length) {
        this.films = [];
        this.$toast.show("<h3>Movies were deleted from catalog...</h3>", {
          type: "warning",
        });
      }
    },
    deleteChosenMoviesArray() {
      this.chosenMovies = [];
      this.$toast.show("<h3>Selected Movies were deleted...</h3>", {
        type: "warning",
      });
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
        this.chosenMovies = this.chosenMovies.concat(
          this.films.filter((item) => item.id === id)
        );
        this.films = this.films.filter((item) => item.id !== id);

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
    deleteChosenItem(id) {
      const selectedMovie = this.chosenMovies.find((item) => item.id === id);
      const isExist = this.films.find((item) => item.id === id);

      this.chosenMovies = this.chosenMovies.filter((item) => item.id !== id);

      if (!isExist) {
        this.films.push(selectedMovie);
        localStorage.setItem("films", JSON.stringify(this.films));

        setTimeout(() => {
          this.$toast.show(
            `<h3>Movie ${selectedMovie.title} was deleted from selected!</h3>`,
            {
              type: "warning",
            }
          );
        }, 500);
      }
    },
  },
  watch: {
    isChanged(newName) {
      localStorage.isChanged = newName;
    },

    films(newArray) {
      localStorage.setItem("films", JSON.stringify(newArray));
    },
    chosenMovies(newArray) {
      localStorage.setItem("chosenMovies", JSON.stringify(newArray));
    },
  },
};
</script>

<style lang="css" scoped>
.container {
  min-height: 300px;
  width: 100%;
  border: 5px solid rgba(109, 64, 8, 0.9);
  border-radius: 40px;
  box-shadow: 0px 0px 15px 20px rgba(109, 64, 8, 0.5);
  padding: 25px;
  background: rgba(109, 64, 8, 0.5);
}
.table {
  min-height: 300px;
  border-radius: 25px;
  border: 1px solid var(--vt-c-white);
  box-shadow: inset 0px 0px 15px 10px rgba(0, 0, 0, 0.5);
  padding: 25px;
  color: var(--vt-c-white);
  text-align: center;
  font-weight: 900;
  margin: 10px;
}

.bg-green {
  background: url("./assets/images/green_background.png") 0 0 / 100% 100%
    no-repeat;
  transition: 600ms;
}
.bg-red {
  background: url("./assets/images/red_background.png") 0 0 / 100% 100%
    no-repeat;
  transition: 600ms;
}

.loader {
  margin: 60px auto;
}

/* transition */

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
</style>

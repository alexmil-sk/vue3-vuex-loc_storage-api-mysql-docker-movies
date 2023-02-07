<template>
  <div>
    <Transition name="fade">
      <div v-if="$store.getters.isOpenModal">
        <ModalPopup />
      </div>
    </Transition>
    <div class="container">
      <div class="table table_fetch" :class="isChanged ? 'bg-green' : 'bg-red'">
        <BtnBlockFetch />
        <div v-if="isLoading" class="loader">
          <LoaderComp />
        </div>

        <div v-else>
          <h1 v-if="films.length">
            Select Movie For Uploading Into The Vuex Database
          </h1>
          <h1 v-else>Load movies...</h1>

          <FilmsArray />
        </div>
      </div>
      <Transition name="chosen">
        <div
          class="table table_choose"
          :class="isChanged ? 'bg-red' : 'bg-green'"
          v-if="chosenMovies.length"
        >
          <BtnBlockChosen />
          <div>
            <h1>Vuex Database</h1>
            <ChosenArray />
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import ModalPopup from "../components/ModalPopup/ModalPopup.vue";
import FilmsArray from "../components/Films/FilmsArray/FilmsArray.vue";
import ChosenArray from "../components/Films/ChosenArray/ChosenArray.vue";
import LoaderComp from "../components/LoaderComp/LoaderComp.vue";
import BtnBlockFetch from "../components/BtnBlockFetch/BtnBlockFetch.vue";
import BtnBlockChosen from "../components/BtnBlockChosen/BtnBlockChosen.vue";
export default {
  components: {
    FilmsArray,
    LoaderComp,
    ChosenArray,
    BtnBlockFetch,
		BtnBlockChosen,
		ModalPopup
  },
  mounted() {
    this.$store.state.isChanged = JSON.parse(localStorage.getItem("isChanged"));
    this.$store.state.films = JSON.parse(localStorage.getItem("films"));
    this.$store.state.chosenMovies = JSON.parse(
      localStorage.getItem("chosenMovies")
		);
	},
	beforeRouteLeave(_, _, next) {
		let isWant = confirm('Do you really want to leave the Catalog?');
		if (isWant) return next()	

	},
  methods: {
    ...mapMutations({ changeModeMutation: "changeMode" }),
    changeMode() {
      this.changeModeMutation();
      this.$toast.show("<h3>Mode was changed!</h3>", {
        type: "info",
      });
    },
  },
  computed: {
    ...mapGetters([
      "isChanged",
      "isLoading",
      "isOpenModal",
      "films",
      "chosenMovies",
    ]),
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
  display: flex;
  min-height: 300px;
  min-width: 600px;
  border: 5px solid rgba(255, 255, 255, 0.7);
  border-radius: 40px;
  box-shadow: 0px 0px 10px 15px rgba(225, 229, 234, 0.3);
  padding: 25px;
  background-color: #1f2937;
}

.table {
  display: flex;
  flex-direction: column;
  min-height: 430px;
  border-radius: 25px;
  border: 3px solid rgba(255, 255, 255, 0.8);
  box-shadow: inset 0px 0px 15px 10px rgba(0, 0, 0, 0.5);
  padding: 25px;
  color: var(--vt-c-white);
  text-align: center;
  font-weight: 900;
  margin: 10px;
}
.table_fetch {
  flex: 1 1 70%;
}
.table_choose {
  flex: 1 1 30%;
}
.bg-green {
  background: url("../assets/images/green_background-2.png") repeat;
  transition: 600ms;
}
.bg-red {
  background: url("../assets/images/red_background-2.png") repeat;
  transition: 600ms;
}
.loader {
  margin: 60px auto;
}

/* transition */
/* fade */
.fade-enter-from,
.fade-leave-to {
  z-index: 0;
}
.fade-enter-to,
.fade-leave-from {
  z-index: 101;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 2s ease;
}

/* transition */

/* chosenMovies */

.chosen-enter-from,
.chosen-leave-to {
  opacity: 0;
}

.chosen-enter-to,
.chosen-leave-from {
  opacity: 1;
}

.chosen-enter-active,
.chosen-leave-active {
  transition: opacity 500ms ease;
}
</style>

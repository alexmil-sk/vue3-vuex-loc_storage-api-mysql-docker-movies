<template>
  <div class="btn-block_chosen">
    <ButtonUi @action="clear" :color="'btn-block_delete'">
      <img :src="deleteIcon" />
    </ButtonUi>
  </div>
</template>

<script>
import ButtonUi from "../UI/ButtonUi.vue";
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: "BtnBlockChosen",
  components: { ButtonUi },
  data() {
    return {
      deleteIcon: this.$store.state.films.deleteIcon,
    };
  },
	methods: {
		...mapMutations('films', ['deleteChosenMoviesArray']),
    clear() {
      if (this.chosenMovies.length) {
        this.deleteChosenMoviesArray();
        this.$toast.show("<h3>Selected Movies were deleted...</h3>", {
          type: "attention",
        });
      }
    },
	},
	computed: {
		...mapGetters('films', ['chosenMovies'])
	}
};
</script>

<style lang="css" scoped>
.btn-block_chosen {
  display: flex;
  justify-content: space-between;
  margin: 10px 10px;
}
.btn-block_chosen {
  justify-content: end;
}
.btn-block_chosen button {
  border-radius: 50%;
  border: 1px solid rgb(46, 46, 46);
  box-shadow: 0px 0px 5px 5px hsla(0, 0%, 99%, 0.5);
  cursor: pointer;
  padding: 2px 5px;
}
.btn-block_chosen button:hover {
  box-shadow: inset 0px 0px 5px 5px hsla(0, 100%, 3%, 0.5);
}
.btn-block_chosen button:active {
  box-shadow: 0px 0px 5px 5px hsla(0, 0%, 99%, 0.5);
}
.btn-block_delete {
  background-color: rgb(255, 159, 26);
}

/* transition */

/* fade */

.transform-enter-to,
.transform-leave-from {
  transform: translateY(0);
}

.transform-enter-from,
.transform-leave-to {
  transform: translateY(-50%);
}

.transform-enter-active,
.transform-leave-active {
  transition: all 1.5s ease;
}
</style>
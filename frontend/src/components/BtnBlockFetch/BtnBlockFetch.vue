<template>
  <div class="btn-block">
    <ButtonUi @action="openModalPopup" :color="'btn-block_download'">
      <img :src="downloadIcon" />
    </ButtonUi>
    <Transition name="fade">
      <ButtonUi
        @action="clear"
        :color="'btn-block_delete'"
        v-if="films.length"
      >
        <img :src="deleteIcon" />
      </ButtonUi>
    </Transition>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import ButtonUi from "../UI/ButtonUi.vue";

export default {
  name: "BtnBlockFetch",
  components: { ButtonUi },
  data() {
    return {
      downloadIcon: this.$store.state.films.downloadIcon,
      deleteIcon: this.$store.state.films.deleteIcon,
    };
  },
	methods: {
		...mapMutations('films', ['openModalPopup', 'deleteFilmsArray']),
    clear() {
      if (this.films.length) {
        this.deleteFilmsArray();
        this.$toast.show("<h3>Movies were deleted from catalog...</h3>", {
          type: "attention",
        });
      }
    },
  },
  computed: {
    ...mapGetters('films', ["films"]),
  },
};
</script>
<style lang="css" scoped>
.btn-block {
  display: flex;
  justify-content: space-between;
  margin: 10px 10px;
}
.btn-block button {
  border-radius: 50%;
  border: 1px solid rgb(46, 46, 46);
  box-shadow: 0px 0px 5px 5px hsla(0, 0%, 99%, 0.5);
  cursor: pointer;
  padding: 2px 5px;
}
.btn-block button:hover {
  box-shadow: inset 0px 0px 5px 5px hsla(0, 100%, 3%, 0.5);
}
.btn-block button:active {
  box-shadow: 0px 0px 5px 5px hsla(0, 0%, 99%, 0.5);
}
.btn-block_delete {
  background-color: rgb(255, 159, 26);
}

.btn-block_download {
  background-color: rgb(136, 236, 60);
}

/* transition */

/* fade */

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
	transform: translateY(0)

}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
	transform: translateY(-50%)
}

.fade-enter-active, .fade-leave-active {
  transition: all 1s ease;
}
</style>
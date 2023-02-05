<template>
  <div class="btn-block">
    <ButtonUi @action="open" :color="'btn-block_download'">
      <img :src="$store.state.downloadIcon" />
    </ButtonUi>
    <ButtonUi @action="clear" :color="'btn-block_delete'">
      <img :src="$store.state.deleteIcon" />
    </ButtonUi>
  </div>
</template>
<script>
import ButtonUi from "../UI/ButtonUi.vue";

export default {
  name: "BtnBlockFetch",
  components: { ButtonUi },
  methods: {
    open() {
      this.$store.commit("openModalPopup");
    },
    clear() {
      if (this.$store.getters.films.length) {
        this.$store.commit("deleteFilmsArray");
        this.$toast.show("<h3>Movies were deleted from catalog...</h3>", {
          type: "attention",
        });
      }
    },
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
</style>
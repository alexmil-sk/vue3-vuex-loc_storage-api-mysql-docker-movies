<template>
  <div class="btn-block_chosen">
    <ButtonUi @action="$emit('deleteChosenMoviesArray')" :color="'btn-block_delete'">
      <img :src="$store.state.deleteIcon" />
    </ButtonUi>
  </div>
</template>

<script>
import ButtonUi from "../UI/ButtonUi.vue";

export default {
  components: { ButtonUi },
  emits: ["deleteChosenMoviesArray"],
};
</script>
<style lang="css">
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
</style>
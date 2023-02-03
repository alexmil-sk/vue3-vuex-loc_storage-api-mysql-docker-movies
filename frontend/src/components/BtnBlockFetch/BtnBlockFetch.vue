<template>
  <div class="btn-block">
    <button @click="$emit('openModalPopup')" class="btn-block_download">
      <img :src="downloadIcon" />
    </button>
    <button @click="$emit('deleteFilmsArray')" class="btn-block_delete">
      <img :src="deleteIcon" />
    </button>
  </div>
</template>
<script>
export default {
	inject: ['deleteIcon', 'downloadIcon'],
	emits: ['deleteFilmsArray', 'openModalPopup']
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
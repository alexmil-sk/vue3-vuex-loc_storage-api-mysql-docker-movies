<template>
  <div class="container-btn">
    <button class="btn" @click="$emit('changeMode')">
      <img :src="$store.state.isChanged ? left : right" />
    </button>
  </div>
</template>

<script>
export default {
  emits: ["changeMode"],
  computed: {
    right() {
      return this.$store.state.joinRight;
    },
    left() {
      return this.$store.state.joinLeft;
    },
  },
};
</script>

<style lang="css" scoped>
.container-btn {
  display: flex;
  align-items: end;
}
.btn {
  display: block;
  width: 64px;
  height: 64px;
  padding: 3px 4px;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid white;
  z-index: 90;
}

.btn img {
  width: 100%;
}

.btn {
  background-color: rgba(225, 232, 235, 1);
}

.btn:hover {
  background-color: rgba(225, 232, 235, 1);
}
</style>

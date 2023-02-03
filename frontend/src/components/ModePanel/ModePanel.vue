<template>
  <button
    class="btn"
    :class="isChanged ? 'light' : 'dark'"
    @click="$emit('changeMode')"
  >
    <img :src="isChanged ? left : right" />
  </button>
</template>

<script>
import joinRight from "../../assets/mode/join_right_red.png";
import joinLeft from "../../assets/mode/join_left_green.png";

export default {
	props: {
		isChanged: Boolean
	},
	emits: ['changeMode'],
  data() {
    return {
      right: joinRight,
      left: joinLeft,
    };
  },
};
</script>

<style lang="css">
.btn {
  display: block;
  position: absolute;
  top: -72px;
  right: 0;
  padding: 3px 5px;
  padding-bottom: 1px;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid white;
  z-index: 90;
}

.btn img {
  width: 40px;
}

.btn {
  background-color: rgba(225, 232, 235, 1);
}

.btn:hover {
  background-color: rgba(225, 232, 235, 1);
}
</style>

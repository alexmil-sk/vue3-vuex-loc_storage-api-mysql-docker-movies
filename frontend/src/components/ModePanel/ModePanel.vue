<template>
  <div class="container-wrapper">
    <div class="container-btn">
      <button class="btn" @click="change">
        <img :src="isChanged ? left : right" />
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "ModePanel",
  data() {
    return {
      left: this.$store.state.joinLeft,
      right: this.$store.state.joinRight,
    };
  },
  computed: mapGetters(["isChanged"]),
  methods: {
    ...mapMutations(["changeMode"]),

    change() {
      this.changeMode();
      this.$toast.show("<h3>Mode was changed!</h3>", {
        type: "info",
      });
    },
  },
};
</script>

<style lang="css" scoped>
.container-wrapper {
  display: flex;
  align-self: end;
  align-items: center;
  justify-content: center;
  justify-self: center;
}

.container-btn {
  border: 2px solid white;
  border-radius: 50%;
  padding: 3px;
}
.btn {
  width: 60px;
  height: 60px;
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

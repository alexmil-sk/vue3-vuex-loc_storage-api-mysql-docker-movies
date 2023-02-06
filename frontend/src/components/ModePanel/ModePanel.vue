<template>
  <div class="container-btn">
    <button class="btn" @click="change">
      <img :src="isChanged ? left : right" />
    </button>
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
.container-btn {
  display: flex;
  align-self: end;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  border-radius: 50%;
  width: 80px;
  height: 72px;
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

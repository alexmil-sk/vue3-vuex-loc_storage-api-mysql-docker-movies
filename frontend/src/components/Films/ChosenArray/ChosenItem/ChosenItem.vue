<template>
  <div class="card" :class="isChanged ? 'bg-for-red' : 'bg-for-green'">
    <img :src="movie.posterURL" width="100" height="156" :alt="movie.title" />
    <button class="del-btn" @click="deleteItem(movie)">&times;</button>
  </div>
</template>


<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: "ChosenItem",
  props: {
    movie: Object,
  },
	methods: {
		...mapMutations('films', ['deleteChosenItem']),
    deleteItem(movie) {
      this.deleteChosenItem(movie.id);
      setTimeout(() => {
        this.$toast.show(
          `<h3>Movie ${movie.title} was deleted from selected!</h3>`,
          {
            type: "warning",
          }
        );
      }, 600);
    },
  },
  computed: {
    ...mapGetters('films', ["isChanged"]),
  },
};
</script>


<style lang="css" scoped>
.card {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  min-height: 180px;
  padding: 15px;
  margin: 15px;
  border: 1px solid var(--vt-c-white);
  border-radius: 10px;
  box-shadow: 0 0 15px 5px var(--vt-c-white);
}

.card img {
  border-radius: 5px;
}

.card.bg-for-green {
  background-color: #67e667;
  transition: 500ms;
}

.card.bg-for-red {
  background-color: #ff7373;
  transition: 500ms;
}
.del-btn {
  position: absolute;
  top: -16px;
  right: -16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background: rgb(250, 2, 2);
  border-radius: 50%;
  border: 1px solid var(--vt-c-white);
  cursor: pointer;
  color: var(--vt-c-white);
  font-size: 25px;
  transition: 600ms;
}

.del-btn:hover {
  box-shadow: 0 0 15px 5px var(--vt-c-white);
  background: var(--vt-c-white);
  border: 1px solid rgb(250, 2, 2);
  color: rgb(250, 2, 2);
  transition: 600ms;
}
.del-btn:active {
  box-shadow: none;
  background: rgb(250, 2, 2);
  color: var(--vt-c-white);
}
</style>
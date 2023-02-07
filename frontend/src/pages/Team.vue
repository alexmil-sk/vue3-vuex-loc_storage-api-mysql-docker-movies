<template>
  <div class="container">
    <div class="table">
      <h1>Our Team</h1>

      <h1 v-if="$route.params.id">
				ID: {{ $route.params.id }}</h1>

      <h1 v-else>Choose the id</h1>

      <button @click="$router.go(-1)">Back</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Team",
  props: ["id"],
};
</script>

<style lang="css" scoped>
.container {
  display: flex;
  min-height: 300px;
  min-width: 600px;
  border: 5px solid rgba(255, 255, 255, 0.7);
  border-radius: 40px;
  box-shadow: 0px 0px 10px 15px rgba(225, 229, 234, 0.3);
  padding: 25px;
  background-color: #1f2937;
}

.table {
  display: flex;
  flex-direction: column;
  flex: 1 1 100%;
  min-height: 430px;
  border-radius: 25px;
  border: 3px solid rgba(255, 255, 255, 0.8);
  box-shadow: inset 0px 0px 15px 10px rgba(0, 0, 0, 0.5);
  padding: 25px;
  color: var(--vt-c-white);
  text-align: center;
  font-weight: 900;
  margin: 10px;
}
</style>

<template>
  <button @click="$emit('action')" :class="color">
    <slot />
  </button>
</template>
<script>
export default {
  props: ["color"],
};
</script>
<style lang="css" scoped>
</style>
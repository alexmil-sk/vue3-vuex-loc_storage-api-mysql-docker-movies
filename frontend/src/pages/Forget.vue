<template>
  <div class="card">
    <h2>Forget password?</h2>
    <div class="form-control">
      <button class="btn primary" @click="$router.push('/login')">Login</button>
      <button class="btn info">Change password</button>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="css" scoped>
@import "../assets/styles/reg_auth.css";
</style>
<template>
  <div class="container">
    <div class="table">
      <h1>404 Not Found</h1>

      <router-link to="/">
        Back
      </router-link>
    </div>
  </div>
</template>

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

.btn {
  color: #42b983;
  position: relative;
  place-content: center;
  place-items: center;
  width: fit-content;
  border-radius: 99px;
  letter-spacing: 0.05em;
  border: 1px solid #42b983;
  text-decoration: none;
  text-transform: uppercase;
  margin-right: 10px;
  padding: 0.5rem 1.5rem;
  white-space: nowrap;
  font-weight: 700;
  outline: none;
  background: #fff;
  transition: all 0.22s;
}

.btn:hover {
  cursor: pointer;
  opacity: 0.8;
}

.btn:disabled {
  cursor: not-allowed;
  opacity: 1 !important;
  background: #eee !important;
  border-color: #ddd !important;
  color: #999 !important;
}

.btn:active {
  box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.3);
}

.btn.primary {
  background: #42b983;
  color: #fff;
}

.btn.danger {
  background: #e53935;
  color: #fff;
  border-color: #e53935;
}

.btn.warning {
  background: #c25205;
  color: #fff;
  border-color: #c25205;
}
</style>

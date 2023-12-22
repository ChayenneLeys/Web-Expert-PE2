<template>
  <div class="navbar">
    <a href="/" class="logo">
      <img src="@/assets/logo.png" alt="logo">
      <span id="navbar-logo">Empty Corner Store</span>
    </a>
    <ul>
      <li><router-link to="/planten">Planten</router-link></li>
      <li><router-link to="/login">Log in</router-link></li>
      <li><router-link to="/winkelmand"><img src="@/assets/winkelmand.png" alt="winkelmand"></router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "navComponent"
}
</script>

<style scoped>

</style>
<template>
  <div class="navbar">
    <a href="/" class="logo">
      <img src="@/assets/logo.png" alt="logo">
      <span id="navbar-logo">Empty Corner Store</span>
    </a>
    <ul>
      <li><router-link to="/planten">Planten</router-link></li>
      <li><router-link to="/login">Log in</router-link></li>
      <li><router-link to="/winkelmand"><img src="@/assets/winkelmand.png" alt="winkelmand" :class="{ 'animate': animation}"></router-link></li>
    </ul>
  </div>
</template>

<script>
import {useAnimationStore} from "@/stores/animationStore";

export default {
  name: "navComponent",
  computed: {
    animation() {
      return useAnimationStore().animation;
    },
  },
}
</script>

<style scoped>
.animate {
  animation: animation 0.5s linear;
  animation-iteration-count: 1;

}

@keyframes animation {
  50% {
    transform: scale(130%);
  }
  100% {
    transform: scale(100%);
  }
}
</style>
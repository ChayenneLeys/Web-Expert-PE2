<template>
<!--  <nav>-->
<!--<nav-component/>-->
<!--  </nav>-->
<!--  <main>-->
<!--    <div v-for="user in users" :key="user.id">-->
<!--      {{user.name}}-->
<!--    </div>-->
<!--  </main>-->
<!--  <footer>-->
<!--    <footer-component/>-->
<!--  </footer>-->

</template>

<script>
import NavComponent from "@/components/navComponent.vue";
import FooterComponent from "@/components/footerComponent.vue";
export default {
  name: "UsersView",
  components: {FooterComponent, NavComponent}
}
</script>

<style scoped>

</style>
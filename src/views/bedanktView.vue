<template>
<nav>
  <nav-component/>
</nav>
  <main class="main-bedankt">
      <h1>Bedankt voor uw aankoop!</h1>
    <p>Nog vragen over uw bestelling? Neem contact met ons op.</p>
    <button type="button" class="button"><a href="mailto:chayenne.leys@student.pxl.be">Contact</a></button>
  </main>
  <footer>
    <footer-component/>
  </footer>
</template>

<script>
import NavComponent from "@/components/navComponent.vue";
import FooterComponent from "@/components/footerComponent.vue";
export default {
  name: "bedanktView",
  components: {FooterComponent, NavComponent}
}
</script>

<style scoped>

</style>
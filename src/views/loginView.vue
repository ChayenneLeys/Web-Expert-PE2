<template>
  <nav><NavComponent/></nav>
  <main class="main-login">
    <aanmeldComponent/>
    <registreerComponent/>
  </main>
  <footer><FooterComponent/></footer>
</template>

<script>
import NavComponent from "@/components/navComponent.vue";
import FooterComponent from "@/components/footerComponent.vue";
import AanmeldComponent from "@/components/aanmeldComponent.vue";
import RegistreerComponent from "@/components/registreerComponent.vue";
import { useUserStore } from "@/stores/userStore";

export default {
  name: "loginView",
  components: {
    RegistreerComponent,
    AanmeldComponent,
    FooterComponent,
    NavComponent
  },

};
</script>

<style scoped>

</style>
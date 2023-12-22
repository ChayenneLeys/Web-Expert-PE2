<template>
  <div class="registreren">
    <h1>Nog geen account?</h1>
    <p>Maak er nu een aan en geniet van een persoonlijke ervaring.</p>
    <form @submit.prevent="register">
      <label for="vnaam">Voornaam</label><br/>
      <input class="rounded" type="text" id="vnaam" name="vnaam" v-model="firstName" required><br/>
      <label for="naam">Naam</label><br/>
      <input class="rounded" type="text" id="naam" name="naam" v-model="lastName" required><br/>
      <label for="email">E-mailadres</label><br/>
      <input class="rounded" type="email" id="email" name="email" v-model="email" required><br/>
      <label for="wachtwoord">Wachtwoord</label><br/>
      <input class="rounded" type="password" id="wachtwoord" name="wachtwoord" v-model="password" required><br/>
      <input type="checkbox" id="privacy" name="privacy" v-model="agreePrivacy">
      <label for="privacy">Ik ga akkoord met het privacy-beleid en de algemene voorwaarden.</label><br/>
      <input type="submit" value="Maak een account" class="button" id="maak-account" required>
    </form>
  </div>
</template>

<script>
import { useUserStore } from "@/stores/userStore";

export default {
  name: "registreerComponent",
};
</script>


<style scoped>

</style>
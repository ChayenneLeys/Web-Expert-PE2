<template>
  <div class="aanmelden">
    <h1>Log in</h1>
    <p>Meld je aan om de plant te vinden die echt bij je past.</p>
    <form @submit.prevent="login">
      <label for="mailadres">E-mail</label><br/>
      <input class="rounded" type="email" id="mailadres" name="email" v-model="email" required><br/>
      <label for="password">Wachtwoord</label><br/>
      <input class="rounded" type="password" id="password" name="wachtwoord" v-model="password" required><br/>
      <input type="submit" value="Aanmelden" class="button">
      <a id="wachtwoord-vergeten" href="#" style="margin-left: 2rem">Wachtwoord vergeten?</a>
    </form>
  </div>
</template>

<script>
import { useUserStore } from "@/stores/userStore";

export default {
  name: "aanmeldComponent",
};
</script>

<style scoped>

</style>
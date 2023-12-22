<template>
  <div class="aanmelden">
    <h1>Log in</h1>
    <p>Meld je aan om de plant te vinden die echt bij je past.</p>
    <v-form v-model="valid">
      <label for="mailadres">e-mail</label><br/>
      <input class="rounded" type="email" id="mailadres" name="email" required><br/>
      <label for="password">Wachtwoord</label><br/>
      <input class="rounded" type="password" id="password" name="wachtwoord" required><br/>
      <input type="submit" value="Aanmelden" class="button">
      <a id="wachtwoord-vergeten" href="#" style="margin-left: 2rem">Wachtwoord vergeten?</a>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "aanmeldComponent"
}
</script>

<style scoped>

</style>
<template>
  <div class="registreren">
    <h1>Nog geen account?</h1>
    <p>Maak er nu een aan en geniet van een persoonlijke ervaring.</p>
    <form>
      <label for="vnaam">Voornaam</label><br/>
      <input class="rounded" type="text" id="vnaam" name="vnaam" required><br/>
      <label for="naam">Naam</label><br/>
      <input class="rounded" type="text" id="naam" name="naam" required><br/>
      <label for="geslacht">Geslacht</label>
      <select class="rounded" name="geslacht" id="geslacht">
        <option value="X" selected>X</option>
        <option value="V">Vrouw</option>
        <option value="M">Man</option>
      </select><br/>
      <label for="email">e-mailadress</label><br/>
      <input class="rounded" type="email" id="email" name="email"><br/>
      <label for="wachtwoord">Wachtwooord</label><br/>
      <input class="rounded" type="password" id="wachtwoord" name="wachtwoord"><br/>
      <input type="checkbox" id="privacy" name="privacy">
      <label for="privacy">Ik ga akkoord met het privacy-beleid en de algemene voorwaarden.</label><br/>
      <input type="submit" value="Maak een account" class="button" id="maak-account" required>
    </form>
  </div>
</template>

<script>
export default {
  name: "registreerComponent"
}
</script>

<style scoped>

</style>
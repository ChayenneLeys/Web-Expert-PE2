<template>
  <nav>
    <nav-component/>
  </nav>

  <main class="main-winkelmand">

    <div v-if="cartItems.length === 0">
      <h1>This corner is empty</h1>
      <p class="lege-winkelmand">Oeps, je winkelmand is leeg. Wil je een kijkje nemen in ons aanbod? </p>
      <router-link :to="'/planten'">
        <button type="button" class="button bekijk-btn">Bekijk onze producten</button>
      </router-link>
    </div>

    <div v-else>
      <h1>Winkelmand</h1>
      <div v-for="item in cartItems" :key="item.id">
        <cart-item-component :item="item"/>
      </div>

      <router-link :to="'/bedankt'">
        <button type="button" class="button bestel-btn" v-on:click="leegmaken()">Bestellen</button>
      </router-link>

      <div class="cart-buttons">
        <router-link :to="'/planten'">
          <button type="button" class="button verder-btn">Verder winkelen</button>
        </router-link>
        <button type="button" class="button leegmaken-btn" v-on:click="leegmaken()">Winkelmand leegmaken</button>
      </div>
    </div>
  </main>

  <footer>
    <footer-component/>
  </footer>
</template>

<script>
import NavComponent from "@/components/navComponent.vue";
import FooterComponent from "@/components/footerComponent.vue";
import CartItemComponent from "@/components/cartItemComponent.vue";
import {useWinkelStore} from "@/stores/winkelStore";

export default {
  name: "winkelMandView",
  components: {
    CartItemComponent,
    FooterComponent,
    NavComponent
  },
  computed: {
    cartItems() {
      const winkelStore = useWinkelStore();
      return winkelStore.items;
    }
  },
  methods: {
    leegmaken() {
      const winkelmand = useWinkelStore();
      winkelmand.leegmaken();
    }
  },
}
</script>

<style scoped>

</style>
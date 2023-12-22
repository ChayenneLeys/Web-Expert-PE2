<template>
  <nav>
    <NavComponent/>
  </nav>
  <header>
    <HeaderComponent/>
  </header>
  <main class="main-home">
    <h1>Onze favorieten</h1>
    <div class="favorieten">
      <!--      HIER MOETEN 3 CARDS KOMEN MET MEESTE STOCK -->
      <div v-for="product in favorieten" :key="product.id">
        <card :product="product"/>
      </div>
      <a href="/planten">
        <div class="card last-card">
          <img src="@/assets/meer-plant.png" alt="Bekijk alle planten">
          <h2>Bekijk al onze planten!</h2>
        </div>
      </a>
    </div>
  </main>
  <footer>
    <FooterComponent/>
  </footer>
</template>


<script>
import NavComponent from "@/components/navComponent.vue";
import HeaderComponent from "@/components/headerComponent.vue";
import FooterComponent from "@/components/footerComponent.vue";
import Card from "@/components/cardComponent.vue";
import {useProductStore} from "@/stores/productStore";

export default {
  name: "homeView",
  components: {
    NavComponent,
    HeaderComponent,
    FooterComponent,
    Card
  },
  data() {
    return {
      store: useProductStore(),
    }
  },
  computed: {
    favorieten(){
      return this.store.getFirstThree();
    }
  }
}
</script>

<style lang="scss">
</style>

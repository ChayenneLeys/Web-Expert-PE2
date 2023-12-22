<script>
import NavComponent from "@/components/navComponent.vue";
import FooterComponent from "@/components/footerComponent.vue";
import {useProductStore} from "@/stores/productStore.js";
import {useWinkelStore} from "@/stores/winkelStore";
import {useAnimationStore} from "@/stores/animationStore";

export default {
  name: "itemView",
  components: {
    FooterComponent,
    NavComponent,
  },
  data(){
    return{
      store: useProductStore(),
      productId: 0,
      products:[],
      producten:{},
    }
  },
  mounted(){
    this.products= this.store.getProducts();
    this.productId= parseInt(this.$route.params.id);
    this.producten= this.products.find(p => p.id === this.productId);
    console.log(this.producten);
    },
  methods: {
    addToCart(item){
      const winkelStore= useWinkelStore();
      winkelStore.addToCart(item);
    },
    animateElement(){
      useAnimationStore().setElementAnimating(true);
    }
  }
}
</script>

<template>
  <nav>
    <nav-component/>
  </nav>
  <main class="main-item">
    <router-link :to="'/planten'">
      <button type="button" class="button terug-btn">Terug</button>
    </router-link>
    <div class="item-picture">
      <img :src="this.producten.afbeelding" :alt="producten.titel">
    </div>
    <div class="item-info">
      <h1>{{producten.titel}}</h1>
      <p>{{producten.subtitel}}</p>
      <p>{{producten.korteOmschrijving}}</p>
      <p>{{producten.diervriendelijk}}</p>
      <div class="details">
      <div class="meer-info">
        <p><img src="@/assets/staanplaats.png" alt="staanplaats">{{producten.staanplaats}}</p>
        <p><img src="@/assets/water.png" alt="water">{{producten.water}}</p>
        <p><img src="@/assets/hoogte.png" alt="hoogte">{{producten.grote}}</p>
      </div>
      <div class="prijskaartje">
        <p class="pricetag">€ {{parseInt(producten.prijs).toFixed(2)}}</p>
      </div>
      </div>
      <div class="toevoegen">
        <button class="button" v-on:click="addToCart(this.producten); animateElement()">+ <img src="@/assets/winkelmand.png" alt="voeg toe aan winkelmand"><span
            class="button-winkelmand-text"> Voeg toe aan je winkelmand</span></button>
      </div>
    </div>
  </main>
  <footer>
    <footer-component/>
  </footer>
</template>


<style scoped>

</style>
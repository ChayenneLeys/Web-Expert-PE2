<template>
<div class="cart-item">
  <img :src="item.afbeelding" alt="item.titel">
  <p class="item-titel">{{ item.titel }}</p>
  <input class="rounded" type="number" min="1" :max="item.stock" step="1" id="aantal" :value="1" v-model="hoeveel">
  <label for="aantal"></label>
  <p>€ {{ totalePrijs }}</p>
  <button type="button" class="button verwijder-btn" v-on:click="verwijderen(item.id)"><img src="@/assets/verwijder.png" alt="verwijder item"></button>
</div>
</template>

<script>
import {useProductStore} from "@/stores/productStore";
import {useWinkelStore} from "@/stores/winkelStore";

export default {
  name: "cartItemComponent",
  props:{
    item: Object,
  },
  data(){
    return{
      store: useProductStore(),
      hoeveel: 1,
    }
  },
  computed: {
    totalePrijs(){
      return (this.hoeveel * this.item.prijs).toFixed(2);
    }
  },
  methods: {
    verwijderen(itemId){
      const winkelStore= useWinkelStore();
      winkelStore.verwijderen(itemId);
    }
  }
}
</script>

<style scoped>

</style>
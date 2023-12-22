<template>
  <router-link :to="'/item/' + product.id" >
    <div class="card">
      <img :src="product.afbeelding" :alt="product.titel">
      <h2>{{ product.titel }}</h2>
      <p>{{ product.subtitel}}</p>
      <p class="pricetag">€ {{ product.prijs.toFixed(2) }}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "card",
  props:{
    product: Object,
  },
};
</script>

<style scoped>

</style>
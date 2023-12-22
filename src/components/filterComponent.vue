<template>
    <div class="filter">
      <h2>Filter</h2>
      <h3>Standplaats</h3>
      <input type="checkbox" id="volle-zon" name="volle-zon">
      <label for="volle-zon">Volle zon</label><br/>
      <input type="checkbox" id="daglicht" name="daglicht">
      <label for="daglicht">Normaal daglicht</label><br/>
      <input type="checkbox" id="half-schaduw" name="half-schaduw">
      <label for="half-schaduw">Half schaduw</label><br/>
      <input type="checkbox" id="schaduw" name="schaduw">
      <label for="schaduw">Schaduw</label><br/>
      <h3>Waterbehoefte</h3>
      <input type="checkbox" id="veel" name="veel">
      <label for="veel">Veel</label><br/>
      <input type="checkbox" id="gemiddeld" name="gemiddeld">
      <label for="gemiddeld">Gemiddeld</label><br/>
      <input type="checkbox" id="weinig" name="weinig">
      <label for="weinig">Weinig</label><br/>

      <button class="button" type="button" name="button" v-on:click="applyFilter()">Filter</button>
    </div>
</template>

<script>
import {ref} from "vue";
import {useProductStore} from "@/stores/productStore";

export default {
  name: "filterComponent",
  data(){
    return{
      volleZon: false,
      daglicht: false,
      halfSchaduw: false,
      schaduw: false,
      veel: false,
      gemiddeld: false,
      weinig: false,
    }
  },
  methods: {
    applyFilter() {
      const selectedFilters = {
        'volle-zon': this.volleZon,
        'daglicht': this.daglicht,
        'half-schaduw': this.half-schaduw,
        'schaduw': this.schaduw,
        'veel': this.veel,
        'gemiddeld': this.gemiddeld,
        'weinig': this.weinig,
      }
      this.$emit('onFilterApplied', selectedFilters)
    }
  }
};
</script>

<style scoped>

</style>
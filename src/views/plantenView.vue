<template>
  <nav>
    <NavComponent/>
  </nav>
  <main class="main-planten">
    <filterComponent/>
    <div class="onze-planten">
      <h1>Onze planten</h1>
      <p>Kamerplanten zijn niet alleen een leuke en groene toevoeging aan je interieur, maar hebben ook nog eens mooie
        eigenschappen. Zo helpen deze planten om de lucht in huis te zuiveren, de luchtvochtigheid te verhogen en
        dragen ze bij aan het verlagen van stress. </p>
      <div class="onze-planten-lijst">
        <div v-for="product in huidigePaginaItems" :key="product.id">
          <card :product="product"/>
        </div>
      </div>
      <div class="paginanummers">
        <ul class="flex-between">
          <button v-for="i in paginatisering.length" class="button-2" :class="{'btn-success' : huidigePagina === i}" v-on:click="veranderPagina(i)">
            {{i}}
          </button>
        </ul>
      </div>
    </div>
  </main>
  <footer>
    <FooterComponent/>
  </footer>
</template>

<script>
import NavComponent from "@/components/navComponent.vue";
import FooterComponent from "@/components/footerComponent.vue";
import filterComponent from "@/components/filterComponent.vue";
import card from "@/components/cardComponent.vue";
import {useProductStore} from "@/stores/productStore.js";
import {ref} from "vue";

export default {
  name: "plantenView",
  components: {
    FooterComponent,
    NavComponent,
    filterComponent,
    card
  },
  data(){
    return {
      //planten tonen
      store: useProductStore(),
      products:{},

      //verdelen in pagina's
      huidigePagina: 1,
      itemsPerPagina: 6,
      alleItems: [],
    }
  },
  //om de producten te tonen
  mounted(){
    this.products = this.store.getProducts();
    this.alleItems = this.products;
  },

  //planten verdelen in pagina's
  computed: {
    paginatisering(){
      const result = [];
      let pagina = 1;

      for (let index = 0; index < this.alleItems.length; index += this.itemsPerPagina) {
        const items = this.alleItems.slice(index, index + this.itemsPerPagina);
        result.push({ pagina, items });
        pagina++;
      }

      return result;
    },
    huidigePaginaItems(){
      let huidigePaginaItems = this.paginatisering.find(paginas => paginas.pagina === this.huidigePagina);
      return huidigePaginaItems ? huidigePaginaItems.items: [];
    }
  },
  methods: {
    veranderPagina(paginaNummer){
      if(paginaNummer !== this.huidigePagina){
        this.huidigePagina = paginaNummer
      }
    }
  }


}
</script>


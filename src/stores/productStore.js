import {defineStore} from 'pinia'
import plantenJson from '../../plantenJson.json'

export const useProductStore = defineStore({
    id: 'producten',
    state: () => ({
        producten: plantenJson.producten,
    }),
    actions: {
        getProducts(){
            return this.producten;
        },
        getFirstThree(){
            const topDrie= [...this.producten].sort((a, b) => b.stock - a.stock);
            return topDrie.slice(0,3);
        },

        // getProductById(){
        //     const productId= this.producten.find(p => p.id === productId);
        //     return productId;
        // }
    },
    getters:{
        productAantal(state){
            return state.producten.length;
        }
    },
});
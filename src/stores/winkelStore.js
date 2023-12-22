import {defineStore} from "pinia";

export const useWinkelStore = defineStore({
    id: 'winkelmand',
    state: () => ({
        items: [],
    }),
    actions: {
        addToCart(item) {
            const oudItemIndex = this.items.findIndex(cartItem => cartItem.id === item.id);
            if (oudItemIndex !== -1) {
                alert("Het product dat u wil toevoegen zit al in de winkelmand");
                this.items[oudItemIndex].hoeveelheid += 1;
            } else {
                this.items.push({ ...item, hoeveelheid: 1 });
            }
        },
        leegmaken() {
            this.items = [];
        },
        verwijderen(itemId){
            this.items = this.items.filter(item => item.id !== parseInt(itemId));
        }
    },
});
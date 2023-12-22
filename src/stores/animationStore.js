import {defineStore} from "pinia";

export const useAnimationStore = defineStore({
    id: 'animationStore',
    state: () => ({
        animation: false,
    }),
    actions: {
        setElementAnimating(value) {
            this.animation = value;
            setTimeout(() => {
                this.animation = false;
            }, 500);
        },
    },
})
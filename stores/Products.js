import { defineStore } from 'pinia';
import productData from '@/assets/products.json';
export const useProductStore = defineStore('product', () => {
    const list = reactive(productData);
    return {
        list,
    };
});

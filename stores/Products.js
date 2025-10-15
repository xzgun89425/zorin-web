import { defineStore } from 'pinia';
import productData from '@/assets/products.json';
import productZHData from '@/assets/productsZH.json';
export const useProductStore = defineStore('product', () => {
    const { locale } = useI18n();

    const listEN = reactive(productData);
    const listZh = reactive(productZHData);

    const list = computed(() => {
        if (locale.value == 'zh-TW') {
            return listZh;
        } else {
            return listEN;
        }
    });
    return {
        list,
        listEN,
        listZh,
    };
});

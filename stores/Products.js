import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', () => {
    const list = reactive([
        {
            id: 1,
            name: 'Zorin Audio TP-S0 唱盤',
            imgs: ['/images/products/tp-s0/1.jpg', '/images/products/tp-s0/2.jpg', '/images/products/tp-s0/3.jpg'],
            content: '',
            detail: '',
        },
        {
            id: 2,
            name: 'Zorin Audio AS-1 離子產生器',
            imgs: [
                '/images/products/as-1/1.jpg',
                '/images/products/as-1/2.jpg',
                '/images/products/as-1/3.jpg',
                '/images/products/as-1/4.jpg',
                '/images/products/as-1/5.jpg',
                '/images/products/as-1/6.jpg',
            ],
            content: '',
            detail: '',
        },
        {
            id: 3,
            name: 'Zorin Audio LT-O2 氣浮正切臂',
            imgs: [
                '/images/products/lt-o2/1.jpg',
                '/images/products/lt-o2/2.jpg',
                '/images/products/lt-o2/3.jpg',
                '/images/products/lt-o2/4.jpg',
                '/images/products/lt-o2/5.jpg',
            ],
            content: '',
            detail: '',
        },
        {
            id: 4,
            name: 'Zorin Audio 氣浮臂專用幫補',
            imgs: ['/images/products/air-arm/1.jpg'],
            content: '',
            detail: '',
        },
    ])

    return {
        list,
    }
})

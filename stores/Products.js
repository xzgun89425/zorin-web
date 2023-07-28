import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', () => {
    const list = reactive([
        {
            id: 1,
            title: 'Zorin Audio TP-S0 唱盤',
            src: '/images/products/product1.jpg',
            detail: 'Galder T.T. with Odin T.A. A beautiful and elegant combination of Black Velvet finish and 24 car at gold plating.',
            content: '',
        },
        {
            id: 2,
            title: 'Zorin Audio TP-S0 唱盤',
            src: '/images/products/product1.jpg',
            detail: 'Galder T.T. with Odin T.A. A beautiful and elegant combination of Black Velvet finish and 24 car at gold plating.',
            content: '',
        },
        {
            id: 3,
            title: 'Zorin Audio TP-S0 唱盤',
            src: '/images/products/product1.jpg',
            detail: 'Galder T.T. with Odin T.A. A beautiful and elegant combination of Black Velvet finish and 24 car at gold plating.',
            content: '',
        },
        {
            id: 4,
            title: 'Zorin Audio TP-S0 唱盤',
            src: '/images/products/product1.jpg',
            detail: 'Galder T.T. with Odin T.A. A beautiful and elegant combination of Black Velvet finish and 24 car at gold plating.',
            content: '',
        },
        {
            id: 5,
            title: 'Zorin Audio TP-S0 唱盤',
            src: '/images/products/product1.jpg',
            detail: 'Galder T.T. with Odin T.A. A beautiful and elegant combination of Black Velvet finish and 24 car at gold plating.',
            content: '',
        },
    ])

    return {
        list,
    }
})

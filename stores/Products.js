import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', () => {
    const list = reactive([
        {
            id: 1,
            name: 'Zorin Audio TP-S0 唱盤',
            img: '/images/products/product1.jpg',
            content:
                'Galder T.T. with Odin T.A. A beautiful and elegant combination of Black Velvet finish and 24 car at gold plating.',
            detail: '',
        },
        {
            id: 2,
            name: 'Zorin Audio TP-S0 唱盤',
            img: '/images/products/product1.jpg',
            content:
                'Galder T.T. with Odin T.A. A beautiful and elegant combination of Black Velvet finish and 24 car at gold plating.',
            detail: '',
        },
        {
            id: 3,
            name: 'Zorin Audio TP-S0 唱盤',
            img: '/images/products/product1.jpg',
            content:
                'Galder T.T. with Odin T.A. A beautiful and elegant combination of Black Velvet finish and 24 car at gold plating.',
            detail: '',
        },
        {
            id: 4,
            name: 'Zorin Audio TP-S0 唱盤',
            img: '/images/products/product1.jpg',
            content:
                'Galder T.T. with Odin T.A. A beautiful and elegant combination of Black Velvet finish and 24 car at gold plating.',
            detail: '',
        },
        {
            id: 5,
            name: 'Zorin Audio TP-S0 唱盤',
            img: '/images/products/product1.jpg',
            content:
                'Galder T.T. with Odin T.A. A beautiful and elegant combination of Black Velvet finish and 24 car at gold plating.',
            detail: '',
        },
    ])

    return {
        list,
    }
})

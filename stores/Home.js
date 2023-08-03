import { defineStore } from 'pinia'

export const useHomeStore = defineStore('home', () => {
    const news = reactive([
        {
            id: 1,
            title: '6月30日（五）｜台北、台中、高雄展示中心營業時間調整公告',
            src: '/images/news/news1.webp',
            date: '2023/06/28',
            content: '商品突破最新技術，唱片機唱針使用最新科技，質感，音質大幅提升...',
        },
        {
            id: 2,
            title: '端午節連假｜客服中心服務時間及線上購物出貨時間調整公告',
            src: '/images/news/news1.webp',
            date: '2023/06/28',
            content: '商品突破最新技術，唱片機唱針使用最新科技，質感，音質大幅提升...',
        },
        {
            id: 3,
            title: 'Audio-Technica 與黑膠墜入愛河｜誠品信義3F音樂館',
            src: '/images/news/news1.webp',
            date: '2023/06/28',
            content: '商品突破最新技術，唱片機唱針使用最新科技，質感，音質大幅提升...',
        },
        {
            id: 4,
            title: '端午節連假｜客服中心服務時間及線上購物出貨時間調整公告',
            src: '/images/news/news1.webp',
            date: '2023/06/28',
            content: '商品突破最新技術，唱片機唱針使用最新科技，質感，音質大幅提升...',
        },
        {
            id: 5,
            title: 'Audio-Technica 與黑膠墜入愛河♡ ｜AT-SB727得獎公告',
            src: '/images/news/news1.webp',
            date: '2023/06/28',
            content: '商品突破最新技術，唱片機唱針使用最新科技，質感，音質大幅提升...',
        },
    ])

    return {
        news,
    }
})

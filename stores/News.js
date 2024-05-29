import { defineStore } from 'pinia';

export const useNewsStore = defineStore('news', () => {
    const news = reactive([
        {
            id: 1,
            title: '次旗艦唱盤S5德國慕尼黑確定參展 展期5/9-12',
            titleEn: 'Medium class turntable TP-S5 will participate in HI-END Münich 2024, held during 5/9-12',
            src: '/images/news/1/1.jpg',
            imgs: ['/images/news/1/1.jpg', '/images/news/1/2.jpg', '/images/news/1/3.jpg', '/images/news/1/4.jpg'],
            date: '2024/05/28',
            content: '次旗艦唱盤S5德國慕尼黑確定參展 展期5/9-12',
            contentEn: 'Medium class turntable TP-S5 will participate in HI-END Münich 2024, held during 5/9-12',
        },
        {
            id: 2,
            title: '首部新版S5發售 實裝測評',
            titleEn: 'New TP-S5 is now released and been delivered, installed and ready to go.',
            src: '/images/news/2/1.jpg',
            imgs: ['/images/news/2/1.jpg', '/images/news/2/2.jpg'],
            date: '2024/05/28',
            content: '首部新版S5發售 實裝測評',
            contentEn: 'New TP-S5 is now released and been delivered, installed and ready to go.',
        },
    ]);

    return {
        news,
    };
});

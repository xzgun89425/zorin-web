<script>
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/pagination'

import { Pagination } from 'swiper'
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    props: ['data'],
    setup() {
        return {
            pagination: {
                el: '.swiper-paginationHome',
                clickable: true,
                bulletClass: `swiper-paginationHome-bullet`,
                bulletActiveClass: `swiper-paginationHome-bullet-active`,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + '</span>'
                },
            },
            modules: [Pagination],
        }
    },
}
</script>

<template>
    <swiper :pagination="pagination" :modules="modules" class="mySwiper h-full w-full flex justify-center items-center">
        <swiper-slide class="" v-for="(item, idx) in data" :key="idx">
            <img :src="item.img" alt="" class="" />
        </swiper-slide>
    </swiper>
    <div class="swiper-paginationHome"></div>
</template>

<style>
.swiper-pagination-bullets {
    text-align: center;
    transition: 300ms;
    transform: translate3d(0, 0, 0);
    z-index: 10;
    position: relative;
    top: -30px;
}
.swiper-paginationHome-bullet {
    width: 20px;
    height: 2px;
    /* border-radius: 50px; */
    opacity: 1;
    background: #ffffff;
    transition: all 0.3s;
    display: inline-block;
    cursor: pointer;
    margin: 8px;
    transform: scale(1.3);
}
.swiper-paginationHome-bullet-active {
    width: 40px;
    background: #95ccf3;
}
</style>

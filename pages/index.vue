<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { Autoplay } from "swiper";

const store = useHomeStore();
const { list } = useProductStore();
// const { data: list } = await useFetch('/api/products');

</script> 

<template>
  <div class="flex flex-col w-full items-center">

    <Container>
      <Swiper :autoplay="{ delay: 3000, disableOnInteraction: false }" loop :modules="[Autoplay]">
        <SwiperSlide v-for="i in 3" :key="i">
          <div class="w-full aspect-w-16 aspect-h-6">
            <img class="object-cover object-center" src="/images/bg1.webp" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </Container>

    <Container :title="'home.newProducts'">
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 lg:p-0">
        <div v-for="i in list" :key="i._id" class="col-span-1 h-auto bg-gray-100 w-full shadow shadow-gray-400 rounded">
          <div class="aspect-w-3 aspect-h-2">
            <img :src="i.img" class="object-cover object-center" alt="">
          </div>
          <div class="p-4 flex flex-col justify-between items-end">
            <div class="space-y-3 mb-3 w-full">
              <h1 class="text-base lg:text-lg font-bold">{{ i.name }}</h1>
              <p class="text-xs h-[32px] lg:h-[48px] overflow-hidden text-ellipsis">{{ i.content }}</p>
            </div>
            <button class="bg-gray-200 hover:bg-gray-300 text-xs w-20 py-2 rounded text-gray-600">Read More</button>
          </div>
        </div>
      </div>
    </Container>

    <ContainerDiv>
      <div class="bg-gray-100 w-full flex justify-center items-start p-4 lg:p-0 border-y border-gray-200">
        <Container>
          <div class="flex flex-wrap-reverse lg:flex-nowrap justify-between items-start gap-10 relative">
            <div class="w-full lg:w-1/2">
              <div class="aspect-w-16 aspect-h-9">
                <img :src="store.news[0].src" class="" alt="" />
              </div>
            </div>
            <div class="w-full lg:w-1/2">
              <div class="text-gray-700">
                <div class="flex justify-between items-end border-b border-gray-400 mb-4 pb-4">
                  <h3 class="text-4xl tracking-widest text-primary Pacifica">Zorin
                    Audio
                  </h3>
                  <p class="text-sm index-font text-primary">{{ $t('header.sublogo') }}</p>
                </div>
                <p>
                  臺灣唱片機製造商，
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </ContainerDiv>

    <Container>
      <ContainerDiv :title="'home.theNews'">
        <div class="flex flex-col gap-4 p-4 lg:p-0">
          <NuxtLink :to="`news/${i.id}`" v-for="i in store.news" :key="i.id"
            class="bg-gray-100 flex items-center gap-4 w-full  text-primaryHover py-3 px-2 shadow-gray-400 shadow">
            <div v-timeformat="i.date"
              class="p-1 bg-primary text-white text-xs lg:text-base w-10 lg:w-14 h-10 lg:h-14 text-center shadow-gray-400 shadow">
            </div>
            <span class="font-bold text-sm lg:text-lg">{{ i.title }}</span>
          </NuxtLink>
        </div>
      </ContainerDiv>
    </Container>

    <Container>
      <ContainerDiv :title="'header.contact'">
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-10 p-16 max-w-7xl w-full">
          <div class="col-span-1 flex flex-col items-center rounded-md p-6 relative">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-10 fill-primary"
              viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path
                d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
            </svg>
            <h1 class="text-lg tracking-wider index-font mt-8">Zorin
              Audio</h1>
          </div>
          <div class="col-span-1 flex flex-col items-center rounded-md p-6 relative">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-10 fill-primary" viewBox="0 0 512 512">
              <path
                d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
            </svg>
            <h1 class="text-lg tracking-wider index-font mt-8">eel012345@yahoo.com.tw</h1>
          </div>
          <div class="col-span-1 flex flex-col items-center rounded-md p-6 relative">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-10 fill-primary"
              viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path
                d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
            </svg>
            <h1 class="text-lg tracking-wider index-font mt-8">+886 919 515 222</h1>
          </div>
          <div class="col-span-1 flex flex-col items-center rounded-md p-6 relative">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-10 fill-primary"
              viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path
                d="M311 196.8v81.3c0 2.1-1.6 3.7-3.7 3.7h-13c-1.3 0-2.4-.7-3-1.5l-37.3-50.3v48.2c0 2.1-1.6 3.7-3.7 3.7h-13c-2.1 0-3.7-1.6-3.7-3.7V196.9c0-2.1 1.6-3.7 3.7-3.7h12.9c1.1 0 2.4 .6 3 1.6l37.3 50.3V196.9c0-2.1 1.6-3.7 3.7-3.7h13c2.1-.1 3.8 1.6 3.8 3.5zm-93.7-3.7h-13c-2.1 0-3.7 1.6-3.7 3.7v81.3c0 2.1 1.6 3.7 3.7 3.7h13c2.1 0 3.7-1.6 3.7-3.7V196.8c0-1.9-1.6-3.7-3.7-3.7zm-31.4 68.1H150.3V196.8c0-2.1-1.6-3.7-3.7-3.7h-13c-2.1 0-3.7 1.6-3.7 3.7v81.3c0 1 .3 1.8 1 2.5c.7 .6 1.5 1 2.5 1h52.2c2.1 0 3.7-1.6 3.7-3.7v-13c0-1.9-1.6-3.7-3.5-3.7zm193.7-68.1H327.3c-1.9 0-3.7 1.6-3.7 3.7v81.3c0 1.9 1.6 3.7 3.7 3.7h52.2c2.1 0 3.7-1.6 3.7-3.7V265c0-2.1-1.6-3.7-3.7-3.7H344V247.7h35.5c2.1 0 3.7-1.6 3.7-3.7V230.9c0-2.1-1.6-3.7-3.7-3.7H344V213.5h35.5c2.1 0 3.7-1.6 3.7-3.7v-13c-.1-1.9-1.7-3.7-3.7-3.7zM512 93.4V419.4c-.1 51.2-42.1 92.7-93.4 92.6H92.6C41.4 511.9-.1 469.8 0 418.6V92.6C.1 41.4 42.2-.1 93.4 0H419.4c51.2 .1 92.7 42.1 92.6 93.4zM441.6 233.5c0-83.4-83.7-151.3-186.4-151.3s-186.4 67.9-186.4 151.3c0 74.7 66.3 137.4 155.9 149.3c21.8 4.7 19.3 12.7 14.4 42.1c-.8 4.7-3.8 18.4 16.1 10.1s107.3-63.2 146.5-108.2c27-29.7 39.9-59.8 39.9-93.1z" />
            </svg>
            <h1 class="text-lg tracking-wider index-font mt-8">+886 919 515 222</h1>
          </div>
        </div>
      </ContainerDiv>
    </Container>
  </div>
</template>

<style scoped></style>

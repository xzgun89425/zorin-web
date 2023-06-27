<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { Pagination, Autoplay } from "swiper";

const store = useHomeStore();
</script> 

<template>
  <Container>
    <div class="w-full">
      <Swiper
        :pagination="{
          el: '#dating-processes',
          bulletClass: 'bullet',
          bulletActiveClass: 'is-active',
          clickable: true,
        }"
        :autoplay="{ delay: 2500, disableOnInteraction: false }"
        loop
        :modules="[Pagination, Autoplay]"
      >
        <SwiperSlide v-for="i in 3" :key="i">
          <!-- <div>
                        <img class="min-h-[400px] w-full h-full object-cover" :src="item.src" alt="">
                    </div> -->
          <div class="w-full h-96 bg-primary"></div>
        </SwiperSlide>
      </Swiper>
      <div id="dating-processes" class="swiper-pagination my-2"></div>
    </div>
    <ContainerDiv :title="'About Us'">
      <div class="bg-primary w-full h-80"></div>
    </ContainerDiv>
    <ContainerDiv :title="'News'">
      <div class="flex justify-between items-center gap-4 relative">
        <div class="w-2/3 bg-primary h-[600px]"></div>
        <div
          class="absolute bottom-0 right-0 w-1/2 flex flex-col gap-4 translate-y-4"
        >
          <div
            v-for="i in store.news"
            :key="i.id"
            class="bg-white flex items-center gap-4 w-full text-primaryHover py-3 px-2 shadow-zinc-500 shadow"
          >
            <div
              v-timeformat="i.date"
              class="p-1 bg-zinc-400 text-white w-14 h-14 text-center font-bold"
            ></div>
            {{ i.title }}
          </div>
        </div>
      </div>
    </ContainerDiv>
    <ContainerDiv :title="'New Products'">
      <div class="flex justify-between gap-4">
        <div v-for="i in 3" :key="i" class="bg-primary w-full h-80"></div>
      </div>
    </ContainerDiv>
  </Container>
</template>

<style scoped></style>

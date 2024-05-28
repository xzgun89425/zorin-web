<script setup>
const open = ref(false);
const list = reactive([
  { name: "header.home", src: "/" },
  { name: "header.about", src: "/about" },
  { name: "header.news", src: "/news" },
  { name: "header.products", src: "/products" },
  { name: "header.contact", src: "/contactUs" },
]);
function openNav() {
  open.value = !open.value;
}
const vClickoutsideDirective = {
  beforeMount: (el) => {
    el.clickoutside = (event) => {
      if (!(el == event.target || el.contains(event.target))) {
        open.value = false;
      }
    };
    window.addEventListener("click", el.clickoutside);
  },
  onUnmounted: () => {
    window.removeEventListener("click", el.clickoutside);
  },
};
</script>

<template>
  <div class="w-full flex justify-center bg-white items-center text-sm index-font px-5 lg:px-20 py-2 text-gray-500">
    <div class="max-w-7xl w-full flex justify-between items-center">
      <div class="flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-3 mt-1" viewBox="0 0 512 512">
          <path
            d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
        </svg>eel012345@yahoo.com.tw
      </div>
      <div class="flex items-center gap-3">
        <a href="https://www.facebook.com/"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 mt-1"
            viewBox="0 0 448 512">
            <path
              d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
          </svg></a>
        <a href="https://www.instagram.com/"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 mt-1"
            viewBox="0 0 448 512">
            <path
              d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z" />
          </svg></a>
        <a href="https://line.me/zh-hant/"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 mt-1"
            viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M311 196.8v81.3c0 2.1-1.6 3.7-3.7 3.7h-13c-1.3 0-2.4-.7-3-1.5l-37.3-50.3v48.2c0 2.1-1.6 3.7-3.7 3.7h-13c-2.1 0-3.7-1.6-3.7-3.7V196.9c0-2.1 1.6-3.7 3.7-3.7h12.9c1.1 0 2.4 .6 3 1.6l37.3 50.3V196.9c0-2.1 1.6-3.7 3.7-3.7h13c2.1-.1 3.8 1.6 3.8 3.5zm-93.7-3.7h-13c-2.1 0-3.7 1.6-3.7 3.7v81.3c0 2.1 1.6 3.7 3.7 3.7h13c2.1 0 3.7-1.6 3.7-3.7V196.8c0-1.9-1.6-3.7-3.7-3.7zm-31.4 68.1H150.3V196.8c0-2.1-1.6-3.7-3.7-3.7h-13c-2.1 0-3.7 1.6-3.7 3.7v81.3c0 1 .3 1.8 1 2.5c.7 .6 1.5 1 2.5 1h52.2c2.1 0 3.7-1.6 3.7-3.7v-13c0-1.9-1.6-3.7-3.5-3.7zm193.7-68.1H327.3c-1.9 0-3.7 1.6-3.7 3.7v81.3c0 1.9 1.6 3.7 3.7 3.7h52.2c2.1 0 3.7-1.6 3.7-3.7V265c0-2.1-1.6-3.7-3.7-3.7H344V247.7h35.5c2.1 0 3.7-1.6 3.7-3.7V230.9c0-2.1-1.6-3.7-3.7-3.7H344V213.5h35.5c2.1 0 3.7-1.6 3.7-3.7v-13c-.1-1.9-1.7-3.7-3.7-3.7zM512 93.4V419.4c-.1 51.2-42.1 92.7-93.4 92.6H92.6C41.4 511.9-.1 469.8 0 418.6V92.6C.1 41.4 42.2-.1 93.4 0H419.4c51.2 .1 92.7 42.1 92.6 93.4zM441.6 233.5c0-83.4-83.7-151.3-186.4-151.3s-186.4 67.9-186.4 151.3c0 74.7 66.3 137.4 155.9 149.3c21.8 4.7 19.3 12.7 14.4 42.1c-.8 4.7-3.8 18.4 16.1 10.1s107.3-63.2 146.5-108.2c27-29.7 39.9-59.8 39.9-93.1z" />
          </svg></a>
      </div>
    </div>

  </div>

  <div
    class="w-full h-24 lg:h-32 text-zinc-900 bg-white sticky top-0 z-50 index-font flex justify-center items-center px-5 lg:px-20 border-y border-gray-300">
    <div class="max-w-7xl w-full flex justify-between items-center">
      <div>
        <NuxtLink to="/">
          <h3 class="text-2xl md:text-4xl lg:text-5xl tracking-widest Pacifica font-bold">Zorin Audio</h3>
          <p class="hidden md:block text-xs md:text-sm lg:text-base">{{ $t('header.sublogo') }}</p>
        </NuxtLink>
      </div>

      <div class="space-x-2 hidden md:flex items-center">
        <NuxtLink v-for="(item, i) in list" :key="i" :to="item.src" class="link-btn">{{ $t(item.name) }}</NuxtLink>
        <I18nSelect class="hidden lg:block"></I18nSelect>
      </div>

      <div class="lg:hidden flex items-center gap-4">
        <I18nSelect class="block lg:hidden"></I18nSelect>
        <Hambuger v-clickoutside-directive :open="open" @click="openNav"></Hambuger>
        <NavList :open="open" :list="list"></NavList>
      </div>
    </div>


  </div>
</template>

<style></style>

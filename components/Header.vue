<script setup>
const open = ref(false);
const list = reactive([
  { name: "About Us", src: "/about" },
  { name: "News", src: "/" },
  { name: "Products", src: "/" },
  { name: "Contact Us", src: "/" },
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
  <div
    class="w-full h-16 bg-primary text-white sticky top-0 z-50 index-font flex justify-between items-center px-5 shadow-lg shadow-zinc-600"
  >
    <div>
      <NuxtLink to="/"
        ><h3 class="text-white text-xl">Zorin Audio</h3></NuxtLink
      >
    </div>

    <div class="space-x-4 hidden md:block">
      <NuxtLink
        v-for="(item, i) in list"
        :key="i"
        :to="item.src"
        class="link-btn"
        >{{ item.name }}</NuxtLink
      >
    </div>
    <Hambuger v-clickoutside-directive :open="open" @click="openNav"></Hambuger>
  </div>
  <NavList :open="open" :list="list"></NavList>
</template>

<style></style>

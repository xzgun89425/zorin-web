<script setup>
const props = defineProps({
  open: {
    type: Boolean,
    defalut: false,
  },
});
</script>

<template>
  <div id="hamburger"
    class="flex md:hidden flex-col justify-center items-center gap-1 bg-primary active:bg-primaryHover hover:cursor-pointer hover:bg-primaryHover w-14 h-12 rounded duration-200">
    <div :class="[open ? 'rotate-45 translate-y-1' : '']" class="w-8 h-1 bg-white rounded duration-200"></div>
    <div :class="[open ? 'hidden' : 'block']" class="w-8 h-1 bg-white rounded duration-200"></div>
    <div :class="[open ? '-rotate-45 -translate-y-1' : '']" class="w-8 h-1 bg-white rounded duration-200"></div>
  </div>
</template>

<style></style>
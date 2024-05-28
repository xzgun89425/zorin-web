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
    class="flex md:hidden flex-col justify-center items-center gap-1 bg-primary active:bg-primaryHover hover:cursor-pointer hover:bg-primaryHover w-12 h-[38px] rounded duration-200">
    <div :class="[open ? 'rotate-45 translate-y-[3.5px]' : '']" class="w-6 h-[3px] bg-white rounded duration-200"></div>
    <div :class="[open ? 'hidden' : 'block']" class="w-6 h-[3px] bg-white rounded duration-200"></div>
    <div :class="[open ? '-rotate-45 -translate-y-[3.5px]' : '']" class="w-6 h-[3px] bg-white rounded duration-200">
    </div>
  </div>
</template>

<style></style>
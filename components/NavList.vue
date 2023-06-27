<script setup>
const props = defineProps({
  list: {
    type: Array,
    default: [],
  },
  open: {
    type: Boolean,
    defalut: false,
  },
});
</script>

<template>
  <CTransition :position="'top'">
    <div
      v-if="open"
      id="nav"
      class="flex flex-col items-center gap-2 md:hidden fixed top-[64px] z-50 w-full bg-primary/95 text-white p-2"
    >
      <NuxtLink
        v-for="(item, i) in list"
        :key="i"
        :to="item.src"
        class="link-btn w-full text-center"
        >{{ item.name }}</NuxtLink
      >
    </div>
  </CTransition>
</template>

<style>
</style>
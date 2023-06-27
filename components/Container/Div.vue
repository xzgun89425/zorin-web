<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: "標題",
  },
});
</script>

<template>
  <div class="w-full my-8">
    <h1 class="w-full font-bold text-3xl text-center text-primary my-12">
      {{ title }}
    </h1>
    <slot />
  </div>
</template>

<style>
</style>
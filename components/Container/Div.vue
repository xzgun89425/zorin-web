<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="w-full my-8">
    <h1 v-if="title !== ''" class="w-full index-font tracking-wider text-3xl text-center text-primary my-8 lg:my-10">
      {{ $t(title) }}
    </h1>
    <slot />
  </div>
</template>

<style></style>
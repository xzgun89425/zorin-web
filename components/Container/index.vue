<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="w-full max-w-7xl lg:p-8">
    <h1 v-if="title !== ''" class="w-full index-font tracking-wider text-3xl text-center text-primary my-8 lg:my-12">
      {{ $t(title) }}
    </h1>
    <slot />
  </div>
</template>

<style></style>
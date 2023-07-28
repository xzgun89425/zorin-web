<script setup>
const props = defineProps({
  value: {
    type: Number,
    default: 100,
  },
});
const defaultValue = ref(0);

const time = setInterval(() => {
  defaultValue.value++;
}, 10);

const addvalue = computed(() => {
  if (defaultValue.value >= props.value) {
    clearInterval(time);
    return defaultValue.value;
  } else {
    return defaultValue.value;
  }
});
</script>

<template>
  <span>{{ addvalue }}</span>
</template>

<style>
</style>
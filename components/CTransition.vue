<template>
  <transition
    enter-active-class="transition ease-out duration-100"
    :enter-from-class="`transform opacity-0 ${enterfrom}`"
    :enter-to-class="`transform opacity-100 ${enterto}`"
    leave-active-class="transition ease-in duration-100"
    :leave-from-class="`transform opacity-100 ${enterto}`"
    :leave-to-class="`transform opacity-0 ${enterfrom}`"
  >
    <slot></slot>
  </transition>
</template>

<script setup>
const props = defineProps({
  position: {
    type: String,
    default: "left",
  },
});

const enterfrom = computed(() => {
  switch (props.position) {
    case "left":
      return "-translate-x-20";
    case "right":
      return "translate-x-20";
    case "top":
      return "-translate-y-20";
    case "bottom":
      return "translate-y-20";
    default:
      break;
  }
});

const enterto = computed(() => {
  switch (props.position) {
    case "left":
      return "translate-x-0";
    case "right":
      return "translate-x-0";
    case "top":
      return "translate-y-0";
    case "bottom":
      return "translate-y-0";
    default:
      break;
  }
});
</script>

<style></style>

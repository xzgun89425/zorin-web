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
  <!-- <CTransition :position="'top'">
    <div v-if="open" id="nav"
      class="flex flex-col items-center gap-2 md:hidden absolute top-[122px] z-50 w-full bg-primary text-white p-2">
      <NuxtLink v-for="(item, i) in list" :key="i" :to="item.src" class="link-btn w-full text-center">{{ item.name }}
      </NuxtLink>
    </div>
  </CTransition> -->
  <div :class="open ? 'h-[248px] p-2' : 'h-0 p-0'" id="nav"
    class="flex flex-col items-center overflow-hidden gap-2 md:hidden absolute top-[96px] left-0 z-50 w-full bg-primary text-white  duration-200">
    <NuxtLink v-for="(item, i) in list" :key="i" :to="item.src" class="link-btn w-full text-center">{{ $t(item.name) }}
    </NuxtLink>
  </div>
</template>

<style></style>
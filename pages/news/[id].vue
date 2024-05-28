<script setup>
const route = useRoute();
const { news } = useNewsStore();
const newsItem = ref(news.filter(e => e.id == route.params.id)[0])
</script>

<template>
  <div class="w-full flex flex-col items-center">
    <div class="w-full">
      <div class="w-full h-60 flex justify-center items-center bg-gray-200 text-primary px-6">
        <h1 class="text-4xl font-bold">
          {{ newsItem.title }}
        </h1>
      </div>
    </div>
    <Container>
      <p v-html="newsItem.content"></p>
    </Container>
  </div>
</template>

<style></style>
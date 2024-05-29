<script setup>
const route = useRoute();
const { locale } = useI18n();
const { news } = useNewsStore();
const newsItem = ref(news.filter(e => e.id == route.params.id)[0])
</script>

<template>
  <div class="w-full flex flex-col items-center">
    <div class="w-full">
      <div class="w-full h-60 flex justify-center items-center bg-gray-200 text-primary px-6">
        <h1 class="text-4xl font-bold">
          {{ locale == 'zh-TW' ? newsItem.title : newsItem.titleEn }}
        </h1>
      </div>
    </div>
    <Container>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 py-4">
        <div v-for="img in newsItem.imgs" :key="img" class="w-full col-span-1 aspect-w-16 aspect-h-9">
          <img class="object-cover object-center" :src="img" alt="" />
        </div>
      </div>
      <p v-html="locale == 'zh-TW' ? newsItem.content : newsItem.contentEn" class="px-4"></p>
    </Container>
  </div>
</template>

<style></style>
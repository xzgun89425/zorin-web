<script setup>
const { locale } = useI18n();
const { news } = useNewsStore();
</script>

<template>
    <div class="w-full flex flex-col items-center">
        <Banner>{{ $t('header.news') }}</Banner>
        <Container>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 lg:p-0">
                <div v-for="i in news" :key="i.id"
                    class="col-span-1 h-auto bg-gray-100 w-full shadow shadow-gray-400 rounded">
                    <div class="aspect-w-3 aspect-h-2">
                        <img :src="i.imgs[0]" class="object-cover object-center" alt="">
                    </div>
                    <div class="p-4 flex flex-col justify-between items-end">
                        <div class="space-y-3 mb-3 w-full">
                            <h1 class="text-base lg:text-lg font-bold h-[56px] truncate">{{ locale == 'zh-TW' ? i.title
                                : i.titleEn }}</h1>
                            <p class="text-xs h-[32px] lg:h-[48px] overflow-hidden text-ellipsis">{{ locale == 'zh-TW' ?
                                i.content : i.contentEn }}</p>
                        </div>
                        <div class="w-full flex justify-between items-center">
                            <p class="text-sm text-gray-500">{{ i.date }}</p>
                            <NuxtLink :to="`news/${i.id}`"
                                class="bg-gray-200 hover:bg-gray-300 text-center text-xs w-20 py-2 rounded text-gray-600">
                                Read
                                More</NuxtLink>
                        </div>

                    </div>
                </div>
            </div>
        </Container>
    </div>
</template>

<style></style>
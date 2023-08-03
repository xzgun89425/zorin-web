<script setup>
const { list } = useProductStore();
</script>

<template>
    <div class="w-full flex flex-col items-center">
        <Banner>{{ $t('header.products') }}</Banner>
        <Container>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 lg:p-0">
                <div v-for="i in list" :key="i._id"
                    class="col-span-1 h-auto bg-gray-100 w-full shadow shadow-gray-400 rounded">
                    <div class="aspect-w-3 aspect-h-2">
                        <img :src="i.img" class="object-cover object-center" alt="">
                    </div>
                    <div class="p-4 flex flex-col justify-between items-end">
                        <div class="space-y-3 mb-3 w-full">
                            <h1 class="text-base lg:text-lg font-bold">{{ i.name }}</h1>
                            <p class="text-xs h-[32px] lg:h-[48px] overflow-hidden text-ellipsis">{{ i.content }}</p>
                        </div>
                        <button class="bg-gray-200 hover:bg-gray-300 text-xs w-20 py-2 rounded text-gray-600">Read
                            More</button>
                    </div>
                </div>
            </div>
        </Container>
    </div>
</template>

<style></style>
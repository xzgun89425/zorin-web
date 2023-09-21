<script setup>
const props = defineProps({
    items: {
        type: Array,
        default: [],
    }
})

function hoverImg(imgs, i) {
    i.thubnail = imgs[1]
}

function leaveImg(imgs, i) {
    i.thubnail = imgs[0]

}
</script>

<template>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 lg:p-0">
        <div v-for="i in items" :key="i.id" class="col-span-1 h-auto bg-gray-100 w-full shadow shadow-gray-400 rounded">
            <div class="aspect-w-3 aspect-h-2" @mousemove="hoverImg(i.imgs, i)" @mouseleave="leaveImg(i.imgs, i)">
                <img :src="i.thubnail ? i.thubnail : i.imgs[0]" class="object-cover object-center" alt="">
            </div>
            <div class="p-4 flex flex-col justify-between items-end">
                <div class="space-y-3 mb-3 w-full">
                    <h1 class="text-base lg:text-lg font-bold">{{ i.name }}</h1>
                    <p class="text-xs h-[32px] lg:h-[48px] overflow-hidden text-ellipsis">{{ i.content }}</p>
                </div>
                <NuxtLink :to="`products/${i.id}`"
                    class="bg-gray-200 hover:bg-gray-300 hover:cursor-pointer text-xs w-20 py-2 text-center rounded text-gray-600">
                    Read More
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<style></style>
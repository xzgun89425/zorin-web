<script setup>
const props = defineProps({
    items: {
        type: Array,
        default: [],
    }
})
const router = useRouter()
function hoverImg(imgs, i) {
    i.thubnail = imgs[1]
}

function leaveImg(imgs, i) {
    i.thubnail = imgs[0]
}

function goProduct(id) {
    router.push(`products/${id}`)
}
</script>

<template>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 lg:p-0">
        <div v-for="i in items" :key="i.id" class="col-span-1 h-auto bg-gray-100 w-full shadow shadow-gray-400 rounded">
            <div @click="goProduct(i.id)" class="aspect-w-3 aspect-h-2 hover:cursor-pointer"
                @mousemove="hoverImg(i.imgs, i)" @mouseleave="leaveImg(i.imgs, i)">
                <img :src="i.thubnail ? i.thubnail : i.imgs[0]" class="object-cover object-center" alt="">
            </div>
            <div class="p-4 flex flex-col justify-between items-end">
                <div class="space-y-3 mb-3 w-full">
                    <h1 class="text-base lg:text-lg font-bold truncate max-h-[56px]">{{ i.name }}</h1>
                    <p class="text-xs h-[32px] lg:h-[48px] overflow-hidden text-ellipsis" v-html="i.description"></p>
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
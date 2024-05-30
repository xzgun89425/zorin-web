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
                <img v-if="i.imgs[0]" :src="i.thubnail ? i.thubnail : i.imgs[0]" class="object-cover object-center"
                    alt="">
                <div v-else class="bg-gray-200 w-full h-full flex justify-center items-center">
                    <svg class="w-10 h-10 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512">
                        <path
                            d="M448 80c8.8 0 16 7.2 16 16V415.8l-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3V96c0-8.8 7.2-16 16-16H448zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
                    </svg>
                </div>
            </div>
            <div class="p-4 flex flex-col justify-between items-end">
                <div class="space-y-3 mb-3 w-full">
                    <h1 class="text-base lg:text-lg font-bold truncate max-h-[56px]">{{ i.name }}</h1>
                    <p class="text-xs h-[32px] lg:h-[48px] overflow-hidden text-ellipsis" v-html="i.description">
                    </p>
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
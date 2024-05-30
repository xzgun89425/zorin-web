<script setup>
const route = useRoute();
const { list } = useProductStore();
const product = ref(list.filter(e => e.id == route.params.id)[0])
const TonearmLength = computed(() => {
    return list.filter(e => e.id == route.params.id)[0].Tonearm.split(',')
});

const imgShow = ref(false)
const imgUrl = ref([])
function openImg(url) {
    imgShow.value = true;
    imgUrl.value = [url]
}
useHead({
    title: "Zorin audio",
    meta: [
        { property: "og:title", content: "Zorin audio" },
        { property: "og:url", content: "https://zorin-audio.com" },
        { property: "og:image", content: "https://zorin-audio.com/products/1/1.jpg" },
        { name: "description", content: "Zorin audio" },
        { property: "og:description", content: "Zorin audio" },
    ],
});
useSeoMeta({
    title: "Zorin audio",
    description: "Zorin audio",
    ogDescription: "Zorin audio",
    ogTitle: "Zorin audio",
    ogImage: "",
});
</script>

<template>
    <ImgDialog v-model="imgShow" :imgs="imgUrl"></ImgDialog>
    <div class="w-full flex flex-col items-center">
        <div class="w-full">
            <div class="w-full h-60 flex justify-center items-center bg-gray-200 text-primary">
                <h1 class="text-4xl font-bold">
                    {{ product.name }}
                </h1>
            </div>
        </div>
        <Container>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 px-4 lg:px-0">
                <div @click="openImg(product.imgs[0])"
                    class="w-full col-span-1 aspect-w-16 aspect-h-8 hover:cursor-pointer">
                    <img v-if="product.imgs[0]" class="object-cover object-center" :src="product.imgs[0]" alt="" />
                    <div v-else class="bg-gray-200 w-full h-full flex justify-center items-center">
                        <svg class="w-10 h-10 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512">
                            <path
                                d="M448 80c8.8 0 16 7.2 16 16V415.8l-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3V96c0-8.8 7.2-16 16-16H448zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
                        </svg>
                    </div>
                </div>
                <div class="w-full col-span-1 pl-0 md:pl-4 flex flex-col justify-between">
                    <div>
                        <h3 class="text-2xl pb-2 lg:text-3xl border-b border-gray-300">{{ product.name }}</h3>
                        <p v-html="product.description" class="py-2 leading-6"></p>
                    </div>
                    <p class="pt-2 space-x-2">
                        <span class="text-sm" v-if="product.dimensions.width"> Width：<span
                                class="font-bold text-base">{{ product.dimensions.width
                                }}</span></span>
                        <span class="text-sm" v-if="product.dimensions.depth"> Depth：<span
                                class="font-bold text-base">{{ product.dimensions.depth
                                }}</span></span>
                        <span class="text-sm" v-if="product.dimensions.height">Height：<span
                                class="font-bold text-base">{{ product.dimensions.height
                                }}</span> (mm)</span>
                        <span class="text-sm" v-show="product.dimensionsNote">{{ product.dimensionsNote }}</span>
                    </p>
                </div>
            </div>
        </Container>
        <Container v-if="product.TransformerBuiltIn">
            <p class="font-bold text-lg px-4 lg:px-0">Transformer built-in:</p>
            <p v-html="product.TransformerBuiltIn" class="mt-0 md:mt-4 px-4 lg:px-0 leading-8"></p>
        </Container>
        <Container v-if="product.Tonearmtime || TonearmLength > 0">
            <p class="font-bold text-lg px-4 lg:px-0">Tonearm:</p>
            <div class="flex flex-wrap gap-2 mt-2"> <span v-show="item" v-for="item in product.Tonearm.split(',')"
                    :key="item" class="py-1 px-2 bg-gray-200 rounded-md text-sm font-bold">{{ item }}</span></div>
            <p v-if="product.Tonearmtime" class="mt-4">Can add up to {{ product.Tonearmtime }} tonearms</p>
        </Container>
        <Container>
            <h1 class="text-3xl font-bold px-4 lg:px-0">
                {{ $t("product-img") }}
            </h1>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 lg:px-0 py-4">
                <div @click="openImg(img)" v-for="img in product.imgs" :key="img"
                    class="w-full col-span-1 aspect-w-16 aspect-h-8 hover:cursor-pointer">
                    <img class="object-cover object-center" :src="img" alt="" />
                </div>
            </div>
        </Container>
        <Container>
            <h1 class="text-3xl font-bold px-4 lg:px-0">
                {{ $t("product-Features") }}
            </h1>
            <p v-html="product.features" class="mt-0 md:mt-4 px-4 lg:px-0 leading-8"></p>
        </Container>
    </div>
</template>

<style></style>
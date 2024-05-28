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
                    class="w-full col-span-1 aspect-w-16 aspect-h-9 hover:cursor-pointer">
                    <img class="object-cover object-center" :src="product.imgs[0]" alt="" />
                </div>
                <div class="w-full col-span-1 pl-4 flex flex-col justify-between">
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
            <p class="font-bold text-lg">Transformer built-in:</p>
            <p v-html="product.TransformerBuiltIn" class="mt-0 md:mt-4 px-4 lg:px-0 leading-8"></p>
        </Container>
        <Container v-if="product.Tonearmtime || TonearmLength > 0">
            <p class="font-bold text-lg">Tonearm:</p>
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
                    class="w-full col-span-1 aspect-w-16 aspect-h-9 hover:cursor-pointer">
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
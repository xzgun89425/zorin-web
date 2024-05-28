<script setup>
const route = useRoute();
const { list } = useProductStore();
const product = ref(list.filter(e => e.id == route.params.id)[0])

</script>

<template>
    <div class="w-full flex flex-col items-center">
        <!-- <Banner>{{ $t('header.products') }}</Banner> -->
        <div class="w-full">
            <div class="w-full h-60 flex justify-center items-center bg-gray-200 text-primary">
                <h1 class="text-4xl font-bold">
                    {{ product.name }}
                </h1>
            </div>
        </div>
        <Container>
            <!-- {{ product }} -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="w-full col-span-1 aspect-w-16 aspect-h-9">
                    <img class="object-cover object-center" :src="product.imgs[0]" alt="" />
                </div>
                <div class="w-full col-span-1 divide-y divide-gray-300 px-4 lg:px-0">
                    <h3 class="text-2xl lg:text-3xl pb-2">{{ product.name }}</h3>
                    <p v-html="product.content"></p>
                </div>
            </div>
        </Container>
        <Container>
            <!-- {{ product }} -->
            <h1 class="text-3xl font-bold">
                {{ $t("product-img") }}
            </h1>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 lg:px-0 py-4">
                <div v-for="img in product.imgs" :key="img" class="w-full col-span-1 aspect-w-16 aspect-h-9">
                    <img class="object-cover object-center" :src="img" alt="" />
                </div>
            </div>
        </Container>
    </div>
</template>

<style></style>
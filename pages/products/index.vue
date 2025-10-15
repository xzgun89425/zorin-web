<script setup>
const { locale } = useI18n();
const { listEN, listZh } = useProductStore();
const list = computed(() => {
    if (locale.value == 'zh-TW') {
        return listZh;
    } else {
        return listEN;
    }
});
</script>

<template>
    <div class="w-full flex flex-col items-center">
        <Banner>{{ $t('header.products') }}</Banner>
        <Container>
            <ProductGrid :items="list"></ProductGrid>
        </Container>
    </div>
</template>

<style></style>
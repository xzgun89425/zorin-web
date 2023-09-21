<script setup>
const { list } = useProductStore();
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
<script setup>
const route = useRoute();
const { list } = useProductStore();
const product = ref(list.filter(e => e.id == route.params.id)[0])

</script>

<template>
    <div class="w-full flex flex-col items-center">
        <Banner>{{ $t('header.products') }}</Banner>
        <Container>
            {{ product }}
        </Container>
    </div>
</template>

<style></style>
<script setup>
const { locale, setLocaleCookie } = useI18n();
watch(locale, (newVal) => {
  setLocaleCookie(newVal);
});
</script>

<template>
  <div>
    <Header></Header>
    <div class="flex justify-center w-full  max-w-screen">
      <slot />
    </div>
    <Footer></Footer>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");

.index-font {
  font-family: "Oswald", sans-serif;
}
</style>

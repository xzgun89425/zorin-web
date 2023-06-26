<script setup>
// useHead({
//   title: "關於我們 About - Zorin Studio",
//   meta: [
//     { property: "og:title", content: "關於我們 About - Zorin Studio" },
//     { property: "og:url", content: "http://localhost:3000/about" },
//     { property: "og:image", content: "http://localhost:3000/share.jpg" },
//     { name: "description", content: "關於我們 About - Zorin Studio" },
//     { property: "og:description", content: "關於我們 About - Zorin Studio" },
//   ],
// });
useSeoMeta({
  title: "About - Zorin Studio",
  description: "關於我們 - Zorin Studio",
  ogDescription: "關於我們 - Zorin Studio",
  ogTitle: "About - Zorin Studio",
  ogImage: "",
});
</script>

<template>
  <div>
    Page: foo
    <AboutHeader></AboutHeader>
  </div>
</template>

<style scoped></style>

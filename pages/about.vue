<script setup>
useHead({
  title: "關於我們 About - Zorin Studio",
  meta: [
    { property: "og:title", content: "關於我們 About - Zorin Studio" },
    { property: "og:url", content: "https://zorin-studio.com/about" },
    { property: "og:image", content: "https://zorin-studio.com/share.jpg" },
    { name: "description", content: "關於我們 About - Zorin Studio" },
    { property: "og:description", content: "關於我們 About - Zorin Studio" },
  ],
});
useSeoMeta({
  title: "About - Zorin Studio",
  description: "關於我們 - Zorin Studio",
  ogDescription: "關於我們 - Zorin Studio",
  ogTitle: "About - Zorin Studio",
  ogImage: "",
});
</script>

<template>
  <div class="w-full">
    <Banner>{{ $t('aboutUs') }}</Banner>
    <ContainerDiv>
      <div class="bg-gray-50 w-full flex justify-center items-start p-4 lg:p-0">
        <Container>
          <div class="flex flex-wrap-reverse lg:flex-nowrap justify-between items-start gap-10 relative">
            <div class="w-full lg:w-1/2">
              <div class="aspect-w-16 aspect-h-9">
                <img src="/images/about.webp" class="" alt="" />
              </div>
            </div>
            <div class="w-full lg:w-1/2">
              <div class="text-gray-700">
                <div class="flex justify-between items-end border-b border-gray-400 mb-4 pb-4">
                  <h3 class="text-4xl tracking-widest text-primary Pacifica">Zorin
                    Audio
                  </h3>
                  <p class="text-sm index-font text-primary">{{ $t('header.sublogo') }}</p>
                </div>
                <p>
                  臺灣唱片機製造商，
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </ContainerDiv>

  </div>
</template>

<style scoped></style>

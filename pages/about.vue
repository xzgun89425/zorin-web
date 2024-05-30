<script setup>
useHead({
  title: "關於我們 About - Zorin audio",
  meta: [
    { property: "og:title", content: "關於我們 About - Zorin audio" },
    { property: "og:url", content: "https://zorin-audio.com/about" },
    { property: "og:image", content: "https://zorin-audio.com/images/about.webp" },
    { name: "description", content: "關於我們 About - Zorin audio" },
    { property: "og:description", content: "關於我們 About - Zorin audio" },
  ],
});
useSeoMeta({
  title: "About - Zorin audio",
  description: "關於我們 - Zorin audio",
  ogDescription: "關於我們 - Zorin audio",
  ogTitle: "About - Zorin audio",
  ogImage: "https://zorin-audio.com/images/about.webp",
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
                  {{ $t("welcomeTo") }} <span class="tracking-widest text-xl  text-primary Pacifica mx-1">Zorin
                    Audio</span><br /><br />
                  <span v-html="$t('abouts.section1')"></span>
                </p>
              </div>
            </div>
          </div>
          <div class="w-full py-4 text-gray-700">
            <span v-html="$t('abouts.section2')"></span><br /><br />
            <span v-html="$t('abouts.section3')"></span><br /><br />
            <span v-html="$t('abouts.section4')"></span><br /><br />
            <span v-html="$t('abouts.section5')"></span><br /><br />
            <span v-html="$t('abouts.section6')"></span><br /><br />
            <span v-html="$t('abouts.section7')"></span><br /><br />
          </div>
        </Container>
      </div>
    </ContainerDiv>

  </div>
</template>

<style scoped></style>

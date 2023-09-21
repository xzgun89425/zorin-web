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
                  歡迎來到<span class="tracking-widest text-primary Pacifica">Zorin
                    Audio</span>，我們是一家專注於音樂品質和音響技術的唱片機製造商，擁有多年的豐富經驗，致力於將音樂帶入您的生活。<br /><br />

                  我們的故事始於多年前，當我們的創辦人們熱愛音樂並開始探索如何將音樂的真實之美帶給人們。經過不懈的努力和技術的不斷創新，我們成功地打造了一系列優質的唱片機，每一款都是音樂藝術的極致表現。<br /><br />

                  我們的唱片機，不僅僅是一個音響設備，更是一種對音樂的熱愛和對音質的追求的體現。我們的工程師和設計師們在每一個細節上都投入了無數的心血，以確保您可以感受到音樂的深度和豐富度。<br /><br />
                </p>
              </div>
            </div>
          </div>
          <div class="w-full py-4 text-gray-700">
            我們引以為傲的是，我們的唱片機不僅具有優異的音質，還具有出色的耐用性和可靠性。我們使用高品質的材料和最先進的製造工藝，以確保每一台唱片機都能夠經受住時間的考驗，成為您音樂生活的忠實伴侶。<br /><br />

            我們的使命是將音樂帶入每個家庭，讓人們可以享受到最純粹、最動人的音樂體驗。我們深信，音樂有著獨特的力量，可以連結人們的心靈，帶來喜悅和滿足感。因此，我們致力於提供卓越的音質和設計，讓您的音樂收藏在我們的唱片機中得到最好的呈現。<br /><br />

            無論您是一位音響發燒友，還是對音樂品質有著高度要求的用戶，我們都有一款唱片機，能夠滿足您的需求。我們期待能夠與您一同享受音樂的魅力，讓我們的唱片機成為您音樂之旅的不可或缺的一部分。<br /><br />

            感謝您選擇我們，讓我們一同探索音樂的美妙世界，並為您帶來無與倫比的音樂體驗。<br /><br />

            音樂，因我們而美！
          </div>
        </Container>
      </div>
    </ContainerDiv>

  </div>
</template>

<style scoped></style>

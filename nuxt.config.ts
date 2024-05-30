// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            viewport: 'width=device-width, initial-scale=1',
            title: 'Zorin Audio',
            meta: [
                { name: 'description', content: 'Zorin Audio' },
                { property: 'og:title', content: 'Zorin Audio' },
                { property: 'og:url', content: 'https://zorin-studio.com/' },
                { property: 'og:description', content: 'Zorin Audio' },
                { property: 'og:image', content: 'https://zorin-audio.com/images/banner/bg1.webp' },
            ],
        },
    },
    css: ['~/assets/css/main.scss'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    imports: {
        dirs: ['stores'],
    },
    modules: [
        [
            '@pinia/nuxt',
            {
                autoImports: ['defineStore', 'acceptHMRUpdate'],
            },
        ],
        '@nuxtjs/i18n',
    ],
    i18n: {
        strategy: 'no_prefix',
        locales: [
            {
                code: 'en-US',
                file: 'en-US.json',
            },
            {
                code: 'zh-TW',
                file: 'zh-TW.json',
            },
        ],
        langDir: 'language',
        defaultLocale: 'en-US',
        detectBrowserLanguage: {
            useCookie: true,
        },
    },
});

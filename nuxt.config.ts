// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            viewport: 'width=500, initial-scale=1',
            title: 'Zorin Studio',
            meta: [
                { name: 'description', content: 'Zorin Studio' },
                { property: 'og:title', content: 'Zorin Studio' },
                { property: 'og:url', content: 'https://zorin-studio.com/' },
                { property: 'og:description', content: 'Zorin Studio' },
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
                code: 'zh-TW',
                file: 'zh-TW.json',
            },
            {
                code: 'en-US',
                file: 'en-US.json',
            },
        ],
        langDir: 'language',
        defaultLocale: 'en-US',
        detectBrowserLanguage: {
            useCookie: true,
        },
    },
})

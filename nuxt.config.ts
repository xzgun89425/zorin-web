// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            viewport: 'width=500, initial-scale=1',
            title: 'Zorin Studio',
            meta: [
                { name: 'description', content: 'Zorin Studio' },
                { property: 'og:title', content: 'Zorin Studio' },
                { property: 'og:url', content: 'http://localhost:3000/' },
                { property: 'og:description', content: 'Zorin Studio' },
            ],
        },
    },
    css: ['~/assets/css/main.css'],
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
    ],
})

import dayjs from 'dayjs'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('timeformat', {
        mounted(el, binding) {
            const time = dayjs(binding.value).format('MMM\nDD')
            el.innerText = time
        },
        updated(el, binding) {
            const time = dayjs(binding.value).format('MMM\nDD')
            el.innerText = time
        },
    })
})

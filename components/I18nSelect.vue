<script setup>
const { locale } = useI18n();
const open = ref(false);
const language = ref("English");
const languages = reactive([
    { name: "English", value: "en-US" },
    { name: "繁體中文", value: "zh-TW" },
]);
function showopen() {
    open.value = !open.value;
}
function choose(i) {
    language.value = i.name;
    locale.value = i.value;
    console.log(locale);
}
function onClickOutside(event) {
    open.value = false;
}
</script>

<template>
    <div>
        <div class="relative text-sm lg:text-base w-24">
            <button @click="showopen()" v-click-outside="onClickOutside"
                class="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary">
                <span class="block truncate" v-for="i in languages" :key="i.value" v-show="i.value == locale">{{ i.name
                }}</span>

                <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <!-- Heroicon name: solid/selector -->
                    <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                        fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd"
                            d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                            clip-rule="evenodd" />
                    </svg>
                </span>
            </button>

            <ul v-show="open"
                class="duration-300 absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none">
                <li v-for="i in languages" :key="i.value" @click="choose(i)"
                    class="text-gray-900 cursor-default select-none relative px-4 py-2 hover:bg-zinc-900 hover:text-white hover:cursor-pointer">
                    <span class="font-normal block truncate">{{ i.name }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<style></style>
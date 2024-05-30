<script setup>
import { onMounted, onUnmounted } from 'vue';
const emit = defineEmits(['update:modelValue']);
const props = defineProps({
    modelValue: {},
    className: {
        type: String,
        default: '',
    },
    imgs: {
        type: Array,
        default: [],
    },
});

//監聽keyup
watch(
    () => props.modelValue,
    (newV) => {
        if (newV == true) {
            window.addEventListener('keydown', keydownEscDialogActive);
        } else {
            window.removeEventListener('keydown', keydownEscDialogActive);
        }
    }
);
function keydownEscDialogActive(e) {
    if (e.key == 'Escape') {
        emit('update:modelValue', false);
    }
}
function close() {
    emit('update:modelValue', false);
}
function onClickOutside() {
    emit('update:modelValue', false);
}

const nowImg = ref('');
watch(
    () => props.modelValue,
    (newV) => {
        if (newV) {
            nowImg.value = props.imgs[0];
        }
    }
);

function prev() {
    const nowImgIdx = props.imgs.findIndex((e) => e == nowImg.value);
    if (nowImgIdx !== 0) {
        nowImg.value = props.imgs[nowImgIdx - 1];
    }
}
const prevDisabled = computed(() => {
    const nowImgIdx = props.imgs.findIndex((e) => e == nowImg.value);
    return nowImgIdx == 0 || nowImgIdx == -1 ? true : false;
});

function next() {
    const nowImgIdx = props.imgs.findIndex((e) => e == nowImg.value);
    if (nowImgIdx + 1 < props.imgs.length) {
        nowImg.value = props.imgs[nowImgIdx + 1];
    }
}
const nextDisabled = computed(() => {
    const nowImgIdx = props.imgs.findIndex((e) => e == nowImg.value);
    return nowImgIdx + 1 >= props.imgs.length ? true : false;
});

function chooseImg(i) {
    const idx = props.imgs.findIndex((e) => e == i);
    nowImg.value = props.imgs[idx];
}
</script>

<template>
    <transition enter-active-class="transition ease-out" enter-from-class="transform opacity-0"
        enter-to-class="transform opacity-100" leave-active-class="transition ease-in"
        leave-from-class="transform opacity-100" leave-to-class="transform opacity-0 ">
        <div v-show="modelValue"
            class="w-[100vw] h-[100dvh] bg-black/40 fixed top-0 left-0 z-[9998] flex justify-center items-center px-4 md:px-0">
            <div v-click-outside="onClickOutside" v-if="modelValue" class="w-full flex justify-center items-center"
                :class="className">
                <button
                    class="w-10 h-10 py-1.5 rounded-md duration-200 text-gray-600 hover:text-gray-900 absolute top-10 right-10"
                    @click="close()">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="w-8 h-8">
                        <path
                            d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                    </svg>
                </button>
                <div class="w-full flex flex-col justify-center items-center ">
                    <div class="w-full flex justify-center items-center">
                        <!-- <button :disabled="prevDisabled" @click="prev"
                            class="text-primary hover:text-primaryHover duration-200 disabled:text-gray-400 disabled:hover:text-gray-400">
                            <KSvgIcon name="angle/icon-left" className="w-12 h-12"></KSvgIcon>
                        </button> -->
                        <div class="max-h-[900px] max-w-[1440px]  bg-black/80 flex justify-center items-center ">
                            <img :src="nowImg" class="w-full h-full bg-white" alt="" />
                        </div>
                        <!-- <button :disabled="nextDisabled" @click="next"
                            class="text-primary hover:text-primaryHover duration-200 disabled:text-gray-400 disabled:hover:text-gray-400">
                            <KSvgIcon name="angle/icon-right" className="w-12 h-12"></KSvgIcon>
                        </button> -->
                    </div>
                    <div v-if="imgs.length > 1" class="flex justify-center gap-2 mt-2">
                        <button @click="chooseImg(i)" v-for="i in imgs" :key="i" class="w-14 h-14 bg-black/80">
                            <img :src="i" class="aspect-video w-full h-full bg-white" alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<style></style>

<template>
    <progress class="w-full" max="100" :value="progress"></progress>
    <div class="mb-20 mt-5 center">地表最强AI正在计算中{{ progress }}%</div>
</template>

<script setup>
import { ref } from 'vue'

const progress = ref(0)
const emit = defineEmits(['finish'])

const start = () => {
    let timer = setInterval(() => {
        progress.value += Math.random() * 5
        progress.value = +progress.value.toFixed(7)
        if (progress.value >= 100) {
            progress.value = 100
            clearInterval(timer)
            setTimeout(() => {
                progress.value = 0
                emit('finish')
            })
        }
    }, 100)
}
defineExpose({ start })
</script>

<style>
progress {
    height: 10px;
    color: #f00;
    background: #efeff4;
    border-radius: 5px;
}
/* 表示总长度背景色 */
progress::-webkit-progress-bar {
    background-color: #f2f2f2;
    border-radius: 5px;
}
/* 表示已完成进度背景色 */
progress::-webkit-progress-value {
    background: var(--main-color);
    border-radius: 5px;
}
</style>

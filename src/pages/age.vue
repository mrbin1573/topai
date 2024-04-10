<template>
    <div class="fs-18 center fw-700 mb-30">AI年龄计算器</div>

    <AppProgress ref="progressRef" @finish="finish" />

    <input :disabled="false" placeholder="请输入年龄" v-model="age" type="number" />
    <input :disabled="false" class="mt-10" placeholder="再次输入年龄" v-model="age1" type="number" />

    <button type="submit" :disabled="false" @click="progressRef.start" class="mt-20 btn-primary">开始AI计算</button>
</template>

<script setup>
import { ref } from 'vue'
import AppProgress from '../components/AppProgress.vue'

const age = ref(null)
const age1 = ref(null)

const finish = () => {
    if (!age.value || !age1.value)
        return alert(`坏消息：您未输入年龄，无法得出您的年龄，\n好消息：经地表最强AI计算，您是的憨批概率为99.99%`)

    let res = age.value
    if (age.value !== age1.value) res = `${age.value}或${age1.value}`

    alert(`恭喜：经地表最强AI计算，您的年龄为${res}`)
}

const progressRef = ref(null)
</script>

<style></style>

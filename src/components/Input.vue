<script setup lang="ts">
    import { ref } from 'vue'
    const text = ref("");

    defineProps<{ propText: string }>()

    function clickButton() {
        alert(text.value);
    }

    function f(ev: Event) {
        console.log(ev);
    }
</script>

<template>
    <p style="white-space: pre-line;">{{ text }}</p>
    <textarea v-model="text"></textarea>
    <button @click="clickButton">check</button>

    <p style="white-space: pre-line;">{{ propText }}</p>
    <textarea v-model="text" @change="$emit('updateInput', text)"></textarea>
    <button @click="">to parent</button>
</template>

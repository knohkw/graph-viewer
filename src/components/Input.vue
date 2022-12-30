<script setup lang="ts">
    import { ref } from 'vue'
    const text = ref("");

    function clickButton() {
        alert(text.value);
    }
</script>

<template>
    <p style="white-space: pre-line;">{{ text }}</p>
    <textarea v-model="text"></textarea>
    <button @click="clickButton">check</button>
</template>
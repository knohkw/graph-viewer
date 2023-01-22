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
    <p style="white-space: pre-line;">{{ propText }}</p>
    <v-textarea auto-grow v-model="text" @change="$emit('updateInput', text)"></v-textarea>
</template>

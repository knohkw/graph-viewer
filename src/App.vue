<script setup lang="ts">
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import InputVue from './components/Input.vue';
import CanvasVue from './components/Canvas.vue';
import { convertToGraph, Graph } from './graph';

const graphString = ref("");
let graph = ref(convertToGraph("0 0"));

function updateGraphString(s: string) {
  alert("TODO: update graph\n" + s);
  graph.value = convertToGraph(s);
}

</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <input-vue prop-text="xyz" @update-input="updateGraphString"/>
  <canvas-vue :graph-string="graphString" :graph="graph"/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

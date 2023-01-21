
<script setup lang="ts">
    import { Graph } from '../graph';
    import { DataSet, Network } from 'vis';

    defineProps<{ graphString: string, graph: Graph }>()

    function updateGraph() {
        let nodes = new DataSet([
            { id: 1, label: "Node 1" },
            { id: 2, label: "Node 2" },
            { id: 3, label: "Node 3" },
            { id: 4, label: "Node 4" },
            { id: 5, label: "Node 5" },]);
        let edges = new DataSet([]);

      let container = document.getElementById("graphCanvas");
      if (!container) {
        console.log("invalid canvas");
        return;
      }
      let data = {
        nodes: nodes,
        edges: edges,
      };
      let options = {};
      let _ = new Network(container, data, options);
    }
</script>

<template>
    <div id="graphCanvas">this is canvas...</div>
    <button @click="updateGraph">update graph</button>
</template>

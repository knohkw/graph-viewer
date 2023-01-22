
<script setup lang="ts">
    import { Graph } from '../graph';
    import { DataSet, Network } from 'vis';

    defineProps<{ graphString: string, graph: Graph }>()

    function updateGraph(graph: Graph) {
      let n = graph.adjacencyList.length;
      let nodes = [];
      for (let i of Array(n).keys()) {
        nodes.push({ id: i, label: i.toString(), });
      }
      let edges = [];
      for (let i = 0; i < n; i++) {
        for (let j of graph.adjacencyList[i]) {
          edges.push({ from: i, to: j });
        }
      }

      let container = document.getElementById("graphCanvas");
      if (!container) {
        console.log("invalid canvas");
        return;
      }
      let data = {
        nodes: new DataSet(nodes),
        edges: new DataSet(edges),
      };
      let options = {};
      let _ = new Network(container, data, options);
    }
</script>

<template>
    <div id="graphCanvas">this is canvas...</div>
    <button @click="updateGraph(graph)">update graph</button>
</template>

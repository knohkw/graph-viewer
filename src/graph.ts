export class Graph {
    numNodes: number;
    adjacencyList: number[][]
    constructor(adj:number[][]) {
        this.numNodes = adj.length;
        this.adjacencyList = adj;
    }
}

export function convertToGraph(str: string): Graph {
    let lines = str.split('\n');
    let nm = lines[0].split(' ').map(parseInt);
    let adj = new Array(nm[0]);
    for (let i = 0; i < nm[0]; i++) {
        adj[i] = [];
    }
    for (let i = 1; i < lines.length; i++) {
        let line = lines[i].split(' ').map(parseInt);
        let x = line[0];
        let y = line[1];
        adj[x].push(y);
        adj[y].push(x);
    }
    return new Graph(adj);
}
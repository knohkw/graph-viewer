export class Graph {
    numNodes: number;
    adjacencyList: number[][]
    constructor(adj:number[][]) {
        this.numNodes = adj.length;
        this.adjacencyList = adj;
    }
}

export function convertToGraph(str: string): Graph {
    let lines = str.trim().split('\n');
    let nm = lines[0].split(' ').map(s => parseInt(s));
    let adj = new Array(nm[0]);
    for (let i = 0; i < nm[0]; i++) {
        adj[i] = [];
    }
    for (let i = 1; i < lines.length; i++) {
        let line = lines[i].split(' ').map(s => parseInt(s));
        console.log(line);
        let x = line[0];
        let y = line[1];
        if (x >= adj.length || y >= adj.length) {
            console.log("invalid edge from: " + x + ", to: " + y);
            continue;
        }
        adj[x].push(y);
        adj[y].push(x);
    }
    return new Graph(adj);
}
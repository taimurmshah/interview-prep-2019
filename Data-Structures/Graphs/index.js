//Graphs

//Undirected graph
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  //if i wanted this graph to be directed,
  //this method would only create one
  //connection.
  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
      return this.adjacencyList[vertex1] && this.adjacencyList[vertex2];
    } else return undefined;
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(ele => {
        return ele !== vertex2;
      });
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(ele => {
        return ele !== vertex1;
      });
    }
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      let adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
}

let graph = new Graph();
graph.addVertex("New York");
graph.addVertex("Boston");
graph.addVertex("Karachi");
graph.addVertex("Islamabad");

graph.addEdge("New York", "Boston");

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

  //recursive depth-first-traversal
  //i like this one better
  rdfs(vertex) {
    //this array will track each node that is visited, as well as the order
    //in which the nodes are visited. It will be returned at the end.
    let results = [];
    //this obj keeps track of whether a vertex has been visited, so that
    //we do not repeat. A key with the value of the vertex is created
    //and set to "true," so that we can make sure a vertex has already
    //been visited, therefore not being visited again.
    let visited = {};

    let helper = vertex => {
      if (!vertex) return null;
      // console.log("hit");
      visited[vertex] = true;
      results.push(vertex);
      for (let i = 0; i < this.adjacencyList[vertex].length; i++) {
        if (!visited[this.adjacencyList[vertex][i]]) {
          helper(this.adjacencyList[vertex][i]);
        }
      }
    };
    helper(vertex);
    return results;
  }

  //iterative depth-first
  //order visited is different bc of LIFO principle of stacks
  //therefore the results array is different in the
  //iterative solution than in the recursive solution
  idfs(vertex) {
    let stack = [vertex]; //using an array as a stack
    let results = [];
    let visited = {};
    let currentVertex;

    visited[vertex] = true;
    while (stack.length > 0) {
      currentVertex = stack.pop();
      results.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(ele => {
        if (!visited[ele]) {
          visited[ele] = true;
          stack.push(ele);
        }
      });
    }
    return results;
  }

  //iterative breadth-first-traversal
  ibfs(vertex) {
    let queue = [vertex];
    let results = [];
    let visited = {};
    let currentVertex;

    // debugger;
    visited[vertex] = true;
    while (queue.length > 0) {
      currentVertex = queue.shift();
      results.push(currentVertex);
      this.adjacencyList[currentVertex].forEach(ele => {
        if (!visited[ele]) {
          visited[ele] = true;
          queue.push(ele);
        }
      });
    }
    return results;
  }
}

// let graph = new Graph();
// graph.addVertex("New York");
// graph.addVertex("Boston");
// graph.addVertex("Karachi");
// graph.addVertex("Islamabad");
//
// graph.addEdge("New York", "Boston");

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

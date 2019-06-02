class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2, weight) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push({ node: vertex2, weight });
      this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }
  }

  dijkstra(start, end) {
    let nodes = new PriorityQueue();
    let distances = {};
    let previous = {};
    let path = []; //to return at end
    let smallest;

    //build up initial distances/state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    //as long as there is something to visit
    while (nodes.values.length) {
      smallest = nodes.dequeue().value;
      if (smallest === end) {
        //we are done, need to build path to return
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          let nextNode = this.adjacencyList[smallest][neighbor];
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            //updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            //updating previous: How we got to neighbor
            previous[nextNeighbor] = smallest;
            //enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }

    return path.concat(smallest).reverse();
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  getParentIndex(index) {
    let newIndex = Math.floor((index - 1) / 2);
    return newIndex;
  }

  enqueue(value, priority) {
    let newNode = new Node(value, priority);
    this.values.push(newNode);
    if (this.values.length === 0) return this.values;
    let childIndex = this.values.length - 1;
    let parentIndex = this.getParentIndex(childIndex);
    while (this.values[childIndex] && this.values[parentIndex]) {
      if (
        this.values[childIndex].priority < this.values[parentIndex].priority
      ) {
        [this.values[childIndex], this.values[parentIndex]] = [
          this.values[parentIndex],
          this.values[childIndex]
        ];
        childIndex = parentIndex;
        parentIndex = this.getParentIndex(childIndex);
      } else break;
    }
    return this.values;
  }

  higherPriorityChild(index) {
    if (this.length <= 1) return null;
    if (this.length === 2) return 1;
    let left = this.values[2 * index + 1];
    let right = this.values[2 * index + 2];
    if (left && right) {
      return left.priority < right.priority ? 2 * index + 1 : 2 * index + 2;
    } else if (!right) {
      return 2 * index + 1;
    } else return null;
  }

  dequeue() {
    if (this.values.length === 0) return null;
    if (this.values.length === 1) {
      return this.values.shift();
    }
    let removedValue = this.values.shift();
    this.values.unshift(this.values.pop());
    let currentValue = 0;
    let highPriorityChild = this.higherPriorityChild(currentValue);
    while (this.values[currentValue] && this.values[highPriorityChild]) {
      if (
        this.values[currentValue].priority >
        this.values[highPriorityChild].priority
      ) {
        [this.values[currentValue], this.values[highPriorityChild]] = [
          this.values[highPriorityChild],
          this.values[currentValue]
        ];
        currentValue = highPriorityChild;
        highPriorityChild = this.higherPriorityChild(currentValue);
      } else break;
    }

    return removedValue;
  }
}

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

let graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

graph.dijkstra("A", "E");

'use strict';

// Represent vertex of tree
class Node {
  constructor(parent) {
    this.parent = parent;
    this.subTreeSize = 1;
  }
}


// Implementation of Disjoint-set data structure
// Complexity:
//   For all operations amortization complexity
//   is log*(N). Where N - count of elements in set,
//   log*(x) - iterable logarithm

class DSU {
  // Finding root of set where node is placed
  static findRoot(node) {
    let curr = node;
    while (curr.parent !== null) {
      curr = curr.parent;
    }
    DSU.compressRootPath(node, curr);
    return curr;
  }

  // Replace parent to root in all nodes that 
  // placed in path from nodeBase to nodeRoot
  static compressRootPath(nodeBase, nodeRoot) {
    let curr = nodeBase;
    while (curr.parent !== null) {
      let tmp = curr.parent;
      curr.parent = nodeRoot;
      curr = tmp;
    }
  }

  // Unites two sets.
  static union(node1, node2) {
    if (!DSU.isOneUnion(node1, node2)) {
      let root1 = DSU.findRoot(node1);
      let root2 = DSU.findRoot(node2);

      if (root1.subTreeSize >= root2.subTreeSize) {
        root2.parent = root1;
        root1.subTreeSize += root2.subTreeSize;
      } else {
        root1.parent = root2;
        root2.subTreeSize += root1.subTreeSize;
      }
    }
  }

  // Check is two nodes at one set.
  static isOneUnion(node1, node2) {
    return DSU.findRoot(node1) === DSU.findRoot(node2);
  }
}

// --------------------- Example of use ----------------------

// Edge of graph
class Edge {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }
}

// Generation of random edges
const edges = [];
let i, x, y;
for (i = 1; i <= 10; i++) {
  x = parseInt(Math.random() * 9 + 1);
  y = parseInt(Math.random() * 9 + 1);
  edges.push(new Edge(x, y));
}

for (let x of edges) {
  console.log(x);
}

console.log('\n---------------------------------\n');

// Create graph that contain 10 vertex without edges.
// All of vertex represent subgraph that consist of one vertex.
const vertex = [null];
for (i = 1; i <= 10; i++) {
  vertex.push(new Node(null));
}

// Adding new edges to graph
for (i = 0; i < 10; i++) {
  x = edges[i].from;
  y = edges[i].to;
  if (DSU.isOneUnion(vertex[x], vertex[y])) {
    console.log('Vertex ' + x + ' and ' + y + ' already at the same subgraph.');
  } else {
    console.log('Adding edge (' + x + ',' + y + ') to graph.');
    DSU.union(vertex[x], vertex[y]);
  }
}

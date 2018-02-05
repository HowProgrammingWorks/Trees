'use strict';

function Node(parent, name) {
  this.name = name;
  if (parent) {
    this.parent = parent;
    parent[name] = this;
  }
}

// Usage

const root = new Node(null, 'root');
const n1 = new Node(root, 'n1');
const n2 = new Node(root, 'n2');
const n3 = new Node(root, 'n3');

console.dir(root, { depth: null });

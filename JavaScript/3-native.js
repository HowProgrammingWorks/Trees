'use strict';

function Node(parent, name) {
  this.name = name;
  if (parent) {
    this.parent = parent;
    parent[name] = this;
  }
}

let root = new Node(null, 'root');
let n1 = new Node(root, 'n1' );
let n2 = new Node(root, 'n2' );
let n3 = new Node(root, 'n3' );

console.dir(root, { depth: null });

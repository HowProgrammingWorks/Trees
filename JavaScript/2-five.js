'use strict';

function Tree(data) {
  this.count = 1;
  this.root = new Node(null, data);
  this.root.tree = this;
}

function Node(parent, data) {
  this.data = data;
  this.parent = parent;
  this.count = 0;
  this.prev = null;
  this.next = null;
  this.first = null;
  this.last = null;
  if (parent) {
    this.tree = parent.tree;
    this.tree.count++;
    if (!parent.count) {
      parent.first = this;
    }
    if (parent.last) {
      parent.last.next = this;
      this.prev = parent.last;
    }
    parent.last = this;
    parent.count++;
  }
}

Node.prototype.add = function(data) {
  return new Node(this, data);
};

// Usage

const tree = new Tree({ name: 'root' });
const n1 = tree.root.add({ name: 'n1' });
const n2 = tree.root.add({ name: 'n2' });
const n3 = tree.root.add({ name: 'n3' });

console.dir(tree, { depth: null });

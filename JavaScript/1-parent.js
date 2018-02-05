'use strict';

function Node(parent, data) {
  this.parent = parent;
  this.data = data;
}

// Usage

const root = new Node(null, { name: 'root' });
const n1 = new Node(null, { name: 'n1' });

const n2 = new Node(n1, { name: 'n2' });
const n3 = new Node(n1, { name: 'n3' });
const n4 = new Node(n1, { name: 'n4' });

const n21 = new Node(n2, { name: 'n21' });
const n22 = new Node(n2, { name: 'n22' });

const n31 = new Node(n3, { name: 'n31' });
const n32 = new Node(n3, { name: 'n32' });
const n33 = new Node(n3, { name: 'n33' });
const n34 = new Node(n3, { name: 'n34' });

console.dir(n34);
console.dir(n34.parent);
console.dir(n34.parent.parent);
console.dir(n34.parent.parent.parent);

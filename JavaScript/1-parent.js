'use strict';

function Node(parent, data) {
  this.parent = parent;
  this.data = data;
}

let root = new Node(null, { name: 'root' });
let n1 = new Node(null, { name: 'n1' });

let n2 = new Node(n1, { name: 'n2' });
let n3 = new Node(n1, { name: 'n3' });
let n4 = new Node(n1, { name: 'n4' });

let n21 = new Node(n2, { name: 'n21' });
let n22 = new Node(n2, { name: 'n22' });

let n31 = new Node(n3, { name: 'n31' });
let n32 = new Node(n3, { name: 'n32' });
let n33 = new Node(n3, { name: 'n33' });
let n34 = new Node(n3, { name: 'n34' });

console.dir(n34);
console.dir(n34.parent);
console.dir(n34.parent.parent);
console.dir(n34.parent.parent.parent);

'use strict';

const tree = (data = null, left = null, right = null) => [data, left, right];
tree.data = (node, data = node[0]) => (node[0] = data, data);
tree.left = (node, data) => (data ? node[1] = tree(data) : node[1]);
tree.right = (node, data) => (data ? node[2] = tree(data) : node[2]);

// Usage

const root = tree({ name: 'A' });

const aa = tree.left(root, { name: 'A' });
const ab = tree.right(root, { name: 'B' });

const aaa = tree.left(aa, { name: 'A' });
const aab = tree.right(aa, { name: 'B' });

const aba = tree.left(ab, { name: 'A' });
const abb = tree.right(ab, { name: 'B' });

console.dir(root, { depth: 3 });
console.dir(tree.right(root), { depth: 3 });

'use strict';

// Binary Search Tree

const tree = (data = null, left = null, right = null) => [data, left, right];
tree.data = (node, data = node[0]) => (node[0] = data, data);
tree.left = (node, data) => (data ? node[1] = tree(data) : node[1]);
tree.right = (node, data) => (data ? node[2] = tree(data) : node[2]);

tree.insert = (node, data, i = data < node[0] ? 1 : 2) => (
  node[i] === null ? node[i] = tree(data) : tree.insert(node[i], data)
);

tree.search = (node, data, value = node[0]) => (
  data === value ? node : tree.search(node[data < value ? 1 : 2], data)
);

// Usage

const root = tree(5);
tree.insert(root, 7);
tree.insert(root, 9);
tree.insert(root, 2);
tree.insert(root, 3);
tree.insert(root, 1);

const node = tree.search(root, 2);
console.dir(node, { depth: 3 });

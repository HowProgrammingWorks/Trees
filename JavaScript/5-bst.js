'use strict';

// Binary Search Tree

const tree = (data = null, left = null, right = null) => [data, left, right];
tree.data = (node, data = node[0]) => (node[0] = data, data);
tree.left = (node, data) => (data ? node[1] = tree(data) : node[1]);
tree.right = (node, data) => (data ? node[2] = tree(data) : node[2]);

tree.insert = (node, data) => {
  if (data < node[0]) {
    if (node[1] === null) node[1] = tree(data);
    else tree.insert(node[1], data);
  } else {
    if (node[2] === null) node[2] = tree(data);
    else tree.insert(node[2], data);
  }
};

tree.search = (node, data) => {
  if (node === null) return null;
  const value = node[0];
  if (data === value) return node;
  if (data < value) return tree.search(node[1], data);
  return tree.search(node[2], data);
};

// Usage

const root = tree(5);
tree.insert(root, 7);
tree.insert(root, 9);
tree.insert(root, 2);
tree.insert(root, 3);
tree.insert(root, 1);

const node = tree.search(root, 2);
console.dir(node, { depth: 3 });

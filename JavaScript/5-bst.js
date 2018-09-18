'use strict';

// Binary Search Tree

const tree = (data = null, left = null, right = null) => [data, left, right];
tree.data = (node, data = node[0]) => (node[0] = data, data);
tree.left = (node, data) => (data ? node[1] = tree(data) : node[1]);
tree.right = (node, data) => (data ? node[2] = tree(data) : node[2]);

tree.insert = (root, data) => {
  if (data < root[0]) {
    if (root[1] === null) root[1] = tree(data);
    else tree.insert(root[1], data);
    return;
  }
  if (root[2] === null) root[2] = tree(data);
  else tree.insert(root[2], data);
};

tree.search = (root, data) => {
  if (root === null) return null;
  const value = root[0];
  if (data === value) return root;
  if (data < value) return tree.search(root[1], data);
  return tree.search(root[2], data);
};

// Usage

const root = tree(5);
tree.insert(root, 7);
tree.insert(root, 9);
tree.insert(root, 2);
tree.insert(root, 3);
tree.insert(root, 1);
console.dir(root);

const node = tree.search(root, 2);
console.dir(node, { depth: 3 });

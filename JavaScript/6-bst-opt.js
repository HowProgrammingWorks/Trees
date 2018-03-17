'use strict';

const tree = (data = null, left = null, right = null) => [data, left, right];
tree.data = (node, data = node[0]) => (node[0] = data, data);
tree.left = (node, data) => (data ? node[1] = tree(data) : node[1]);
tree.right = (node, data) => (data ? node[2] = tree(data) : node[2]);

tree.insert = (root, data) => {
  const i = data < root[0] ? 1 : 2;
  if (!root[i]) root[i] = tree(data);
  else tree.insert(root[i], data);
};

tree.search = (root, data) => {
  const value = root[0];
  if (data === value) return root;
  const next = root[data < value ? 1 : 2];
  return next ? tree.search(next, data) : null;
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

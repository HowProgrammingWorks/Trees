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

tree.add = (root, item) => {
  const i = item[0] < root[0] ? 1 : 2;
  if (!root[i]) root[i] = item;
  else tree.add(root[i], item);
};

tree.search = (root, data, callback) => {
  const value = root[0];
  const next = root[data < value ? 1 : 2];
  if (next) {
    const value = next[0];
    if (data === value) {
      if (callback) callback(next, root);
      return next;
    }
    return tree.search(next, data, callback);
  } else {
    if (callback) callback(null, root);
    return null;
  }
};

tree.del = (root, data) => {
  tree.search(root, data, (node, parent) => {
    const [, left, right] = node;
    const i = parent[1] === node ? 1 : 2;
    parent[i] = null;
    tree.add(parent, left);
    tree.add(parent, right);
  });
};

// Usage

const root = tree(5);
tree.insert(root, 7);
tree.insert(root, 9);
tree.insert(root, 2);
tree.insert(root, 3);
tree.insert(root, 1);

tree.search(root, 2, node => console.log(node));

const node = tree.search(root, 2);
console.dir(node, { depth: 3 });

console.dir({ before: root }, { depth: 3 });
tree.del(root, 2);
console.dir({ after: root }, { depth: 3 });

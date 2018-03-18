'use strict';

const tree = (
  key = null, value = null, parent = null, left = null, right = null
) => [
  key, value, parent, left, right
];

const data = (node, key, value) => {
  if (!key) return node[0, 1];
  node[0] = key;
  node[1] = value;
};

const parent = (node, parent) => {
  if (!parent) return node[2];
  node[2] = parent;
};

const left = (node, key, value) => {
  if (!key) return node[3];
  node[3] = tree(key, value, node);
};

const right = (node, key, value) => {
  if (!key) return node[4];
  node[4] = tree(key, value, node);
};

const insert = (root, key, value) => {
  if (root[0] === null) return tree.data(root, key, value);
  const i = key < root[0] ? 3 : 4;
  if (root[i]) tree.insert(root[i], key, value);
  else root[i] = tree(key, value, root);
};

const push = (root, node) => {
  const i = node[0] < root[0] ? 3 : 4;
  if (root[i]) {
    tree.push(root[i], node);
    return;
  }
  root[i] = node;
  node[2] = root;
};

const search = (root, key) => {
  const k = root[0];
  if (key === k) return root;
  const next = root[key < k ? 3 : 4];
  if (next) {
    if (key === next[0]) return next;
    return tree.search(next, key);
  }
};

const get = (root, key) => {
  const node = tree.search(root, key);
  if (node) return node[1];
};

const set = (root, key, value) => {
  const node = tree.search(root, key);
  if (node) node[1] = value;
  else tree.insert();
};

const del = (root, key) => {
  const node = tree.search(root, key);
  if (node) {
    const [, , parent, left, right] = node;
    const i = parent[3] === node ? 3 : 4;
    parent[i] = null;
    if (left) tree.push(parent, left);
    if (right) tree.push(parent, right);
  }
};

Object.assign(tree, {
  data, parent, left, right, insert, push, search, get, set, del
});

// Usage

const root = tree();
tree.insert(root, 'Shanghai', 24256801);
tree.insert(root, 'Beijing', 21516001);
tree.insert(root, 'Delhi', 16787942);
tree.insert(root, 'Lagos', 16060304);
tree.insert(root, 'Tianjin', 15200001);
tree.insert(root, 'Karachi', 14910353);
tree.insert(root, 'Istanbul', 14160468);
tree.insert(root, 'Tokyo', 13513735);
tree.insert(root, 'Guangzhou', 13080501);
tree.insert(root, 'Mumbai', 12442374);

console.dir({ root }, { depth: null });
console.log('search(Delhi)', tree.search(root, 'Delhi'));

console.log('delete(Karachi)');
tree.del(root, 'Karachi');
console.dir({ root }, { depth: null });

console.log('search(Karachi)', tree.search(root, 'Karachi'));

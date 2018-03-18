'use strict';

const TREE_KEY = 0;
const TREE_VALUE = 1;
const TREE_PARENT = 2;
const TREE_LEFT = 3;
const TREE_RIGHT = 4;

const tree = (
  key = null, value = null, parent = null, left = null, right = null
) => [
  key, value, parent, left, right
];

const data = (node, key, value) => {
  if (!key) return node.slice(TREE_KEY, TREE_VALUE);
  node[TREE_KEY] = key;
  node[TREE_VALUE] = value;
};

const parent = (node, parent) => {
  if (!parent) return node[TREE_PARENT];
  node[TREE_PARENT] = parent;
};

const left = (node, key, value) => {
  if (!key) return node[TREE_LEFT];
  node[TREE_LEFT] = tree(key, value, node);
};

const right = (node, key, value) => {
  if (!key) return node[TREE_RIGHT];
  node[TREE_RIGHT] = tree(key, value, node);
};

const insert = (root, key, value) => {
  if (root[TREE_KEY] === null) return tree.data(root, key, value);
  const edge = key < root[TREE_KEY] ? TREE_LEFT : TREE_RIGHT;
  if (root[edge]) tree.insert(root[edge], key, value);
  else root[edge] = tree(key, value, root);
};

const push = (root, node) => {
  const i = node[TREE_KEY] < root[TREE_KEY] ? TREE_LEFT : TREE_RIGHT;
  if (root[i]) {
    tree.push(root[i], node);
    return;
  }
  root[i] = node;
  node[TREE_PARENT] = root;
};

const search = (root, key) => {
  const k = root[TREE_KEY];
  if (key === k) return root;
  const next = root[key < k ? TREE_LEFT : TREE_RIGHT];
  if (next) {
    if (key === next[TREE_KEY]) return next;
    return tree.search(next, key);
  }
};

const get = (root, key) => {
  const node = tree.search(root, key);
  if (node) return node[TREE_VALUE];
};

const set = (root, key, value) => {
  const node = tree.search(root, key);
  if (node) node[TREE_VALUE] = value;
  else tree.insert();
};

const del = (root, key) => {
  const node = tree.search(root, key);
  if (node) {
    const [, , parent, left, right] = node;
    const i = parent[TREE_LEFT] === node ? TREE_LEFT : TREE_RIGHT;
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

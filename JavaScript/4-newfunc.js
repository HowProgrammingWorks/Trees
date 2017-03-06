'use strict';

function Node(parent, name, data) {
  this.name = name;
  this.data = data;
  if (parent) {
    this.parent = parent;
    parent[name] = this;
  }
  this.child = [];
}

function Tree(name, data) {
  this.root = new Node(null, name, data);
}

Tree.prototype.visitDepth = function(callback) {

  (function recursive(currNode) {

    const len = currNode.child.length;
    let num;
    for (num = 0; num < len; ++num) {
      recursive(currNode.child[num]);
    }

    callback(currNode);
  })(this.root);
};

Tree.prototype.isHave = function(callback) {
  this.visitDepth.call(this, callback);
};

Tree.prototype.addData = function(name, data, whereAdd) {
  let parent = null;
  const callback = function(n) {
    if (n.name === whereAdd) {
      parent = n;
    }
  };
  this.isHave(callback);

  const node = new Node(parent, name, data);
  if (parent) {
    parent.child.push(node);
    node.parent = parent;
  } else {
    throw new Error('Parent not exist!');
  }
};


const tree = new Tree('one', 1);

tree.root.child.push(new Node(tree, 'two', 2));

tree.root.child.push(new Node(tree, 'three', 3));

tree.root.child.push(new Node(tree, 'four', 4));

tree.root.child[0].child.push(new Node(tree.root.child[0], 'five', 5));

tree.root.child[0].child.push(new Node(tree.root.child[0], 'six', 6));

tree.root.child[2].child.push(new Node(tree.root.child[2], 'seven', 7));


tree.isHave(n => {
  if (n.name === 'five') {
    console.dir(n);
  }
});

tree.visitDepth(n => console.dir(n));

tree.addData('qwe', 456, 'two');
console.dir(tree);

'use strict';

function Node(parent, data) {
  this.data = data;
  this.leftChild = null;
  this.rightChild = null;
  this.parent = parent;
}

Node.prototype.output = function() {
  if (this.leftChild !== null) {
    this.leftChild.output();
  }
  console.dir(this.data);
  if (this.rightChild !== null) {
    this.rightChild.output();
  }
};

Node.prototype.search = function(key) {
  if (this.data === key) return this;
  if (key < this.data) {
    if (this.leftChild === null) return null;
    return this.leftChild.search(key);
  } else {
    if (this.rightChild === null) return null;
    return this.rightChild.search(key);
  }
};


Node.prototype.insert = function(data) {
  if (data < this.data) {
    if (this.leftChild === null) {
      this.leftChild = new Node(this, data);
      return;
    }
    this.leftChild.insert(data);
  } else {
    if (this.rightChild === null) {
      this.rightChild = new Node(this, data);
      return;
    }
    this.rightChild.insert(data);
  }
};

Node.prototype.left = function() {
  if (this.leftChild !== null) return this.leftChild.left();
  return this;
};

function BinarySearchTree() {
  this.root = null;
}

BinarySearchTree.prototype.output = function() {
  if (this.root !== null) {
    this.root.output();
  }
};

BinarySearchTree.prototype.search = function(key) {
  if (this.root !== null) {
    return this.root.search(key);
  }
  return null;
};

BinarySearchTree.prototype.min = function() {
  var current = null;
  if (this.root !== null) {
    current = this.root;
    while (current.leftChild !== null) {
      current = current.leftChild;
    }
    return current;
  } else return null;
};

BinarySearchTree.prototype.max = function() {
  var current = null;
  if (this.root !== null) {
    current = this.root;
    while (current.rightChild !== null) {
      current = current.rightChild;
    }
    return current;
  } else return null;
};

BinarySearchTree.prototype.insert = function(data) {
  if (this.root !== null) {
    this.root.insert(data);
  } else this.root = new Node(null, data);
};

BinarySearchTree.prototype.delete = function(data) {
  var toDelete = this.root.search(data);
  if (toDelete === null) return;
  if (toDelete === this.root) {
    if (this.root.leftChild === null && this.root.rightChild === null) {
      this.root = null;
      return;
    }
    if (this.root.leftChild === null) {
      this.root = this.root.rightChild;
      return;
    }
    if (this.root.rightChild === null) {
      this.root = this.root.leftChild;
      return;
    }
  } else {
    if (toDelete.leftChild === null && toDelete.rightChild === null) {
      if (toDelete.parent.leftChild === toDelete) {
        toDelete.parent.leftChild = null;
      } else {
        toDelete.parent.rightChild = null;
      }
      return;
    }
    if (toDelete.leftChild === null) {
      if (toDelete.parent.leftChild === toDelete) {
        toDelete.parent.leftChild = toDelete.rightChild;
      } else {
        toDelete.parent.rightChild = toDelete.rightChild;
      }
      return;
    }
    if (toDelete.rightChild === null) {
      if (toDelete.parent.leftChild === toDelete) {
        toDelete.parent.leftChild = toDelete.leftChild;
      } else {
        toDelete.parent.rightChild = toDelete.leftChild;
      }
      return;
    }
  }
  var replaceNode = toDelete.rightChild.left();
  toDelete.data = replaceNode.data;
  if (replaceNode !== toDelete.rightChild) {
    if (replaceNode.rightChild === null) {
      replaceNode.parent.leftChild = null;
    } else {
      replaceNode.parent.leftChild = replaceNode.rightChild;
    }
  } else if (replaceNode.rightChild === null) {
    replaceNode.parent.rightChild = null;
  } else {
    replaceNode.parent.rightChild = replaceNode.rightChild;
  }
};

var tree = new BinarySearchTree();
tree.insert(15);
tree.insert(5);
tree.insert(16);
tree.insert(3);
tree.insert(12);
tree.insert(20);
tree.insert(10);
tree.insert(13);
tree.insert(18);
tree.insert(23);
tree.insert(6);
tree.insert(7);
tree.output();
console.log('Min node: ' + tree.min().data);
console.log('Max node: ' + tree.max().data);
console.log('Search node 13: ' + tree.search(13) + ': ' + tree.search(13).data);
console.log('Search node 11: ' + tree.search(11));

//tree.delete(15);
//console.log('Deleted elem 15!');
//tree.output();

//tree.delete(13);
//console.log('Deleted elem 13!');
//tree.output();

//tree.delete(16);
//console.log('Deleted elem 16!');
//tree.output();

tree.delete(5);
console.log('Deleted elem 5!');
tree.output();

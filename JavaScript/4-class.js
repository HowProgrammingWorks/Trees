'use strict';

class Node {

  constructor(parent, name, data) {
    this.name = name;
    this.data = data;
    this.childs = [];
    if (parent) {
      this.parent = parent;
      parent.childs.push(this);
    }
  }

  findAll(name) { // Find all nodes with specified name
    const arr = [];
    if (this.name === name) arr.push(this);
    let i;
    for (i = 0; i < this.childs.length; i++) {
      arr.push.apply(arr, this.childs[i].findAll(name));
    }

    return arr;
  }

  findFirst(name) { //Find first instance
    if (this.name === name) return this;
    let i;
    for (i = 0; i < this.childs.length; i++) {
      return this.childs[i].findFirst(name);
    }
  }

  find(name, callback) { //Call function for each found node
    const nodes = this.findAll(name);
    if (nodes.length > 0) {
      let i;
      const found = this.findAll(name);
      for (i = 0; i < found.length; i++) {
        callback(found[i]);
      }
    }
  }

  setParent(newParent) { // Sets new parent for this node
    this.parent.childs.pop(this.parent.childs.indexOf(this));
    this.parent = newParent;
    this.parent.childs.push(this);
  }
}

const root = new Node(null, 'root', {});
const n1 = new Node(root, 'searched', {});
const n2 = new Node(root, 'n2', {});
const n12 = new Node(n1, 'searched', {});


console.log('findAll("searched") -', root.findAll('searched'));
console.log('findFirst("searched") -', root.findFirst('searched'));
root.find('n2', n => console.log('parent - ', n.parent));
n12.setParent(root);
console.log('n12 new parent -', n12.parent);

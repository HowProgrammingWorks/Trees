'use strict';

class TreeNode {
  constructor(name, ...children) {
    this.name = name;
    this.children = children.filter((child) => child instanceof TreeNode);
  }

  print(prefix, isTail) {
    console.log((prefix + (isTail ? '└── ' : '├── ') + this.name));
    if (!this.children.length) return;
    this.children.slice(0, -1).forEach((child) =>
      child.print(prefix + (isTail ? '    ' : '│   '), false)
    );
    this.children.slice(-1)[0].print(prefix + (isTail ? '    ' : '│   '), true);
  }
}

const b = new TreeNode('b', new TreeNode('c'), new TreeNode('d'), null, 5);
const a = new TreeNode('a', b, new TreeNode('e'));
const root = new TreeNode('r', a);

root.print('', true);

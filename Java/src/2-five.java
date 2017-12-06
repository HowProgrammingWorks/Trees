class Five {
    public static void main(String[] args) {
        Tree tree = new Tree("root");
        Node n1 = new Node(tree.root, "n1");
        Node n2 = new Node(tree.root, "n2");
        Node n3 = new Node(tree.root, "n3");

        System.out.println(tree);
    }
    static class Tree {
        public long count;
        public Node root;

        public Tree(String name) {
            this.count = 1;
            this.root = new Node(null, name);
            this.root.tree = this;
        }

        @Override
        public String toString() {
            return "Tree {" +
                    "count=" + count +
                    ", root=" + root + '\'' +
                    '}';
        }
    }
    static class Node {
        public String name;
        public Node parent;
        public long count;
        public Tree tree;
        public Node first;
        public Node last;
        public Node next;
        public Node prev;

        public Node(Node parent, String name) {
            this.name = name;
            this.parent = parent;
            this.count = 0;
            if (parent != null) {
                this.tree = parent.tree;
                this.tree.count++;
                if (parent.count < 1) {
                    parent.first = this;
                }
                if (parent.last != null) {
                    parent.last.next = this;
                    this.prev = parent.last;
                }
                parent.last = this;
                parent.count++;
            }
            this.prev = null;
            this.next = null;
            this.first = null;
            this.last = null;
        }

        @Override
        public String toString() {
            return "Node {" +
                    "name='" + name + '\'' +
                    ", count=" + count +
                    ", first=" + first +
                    ", last=" + last +
                    ", next=" + next +
                    ", prev=" + prev +
                    '}';
        }
    }
}



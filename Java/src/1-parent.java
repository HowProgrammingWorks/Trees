class Parent {
    public static void main(String[] args) {
        Node root = new Node(null, "root");
        Node n1 = new Node(null, "n1");

        Node n2 = new Node(n1, "n2");
        Node n3 = new Node(n1, "n3");
        Node n4 = new Node(n1, "n4");

        Node n21 = new Node(n2, "n21");
        Node n22 = new Node(n2, "n22");

        Node n31 = new Node(n3, "n31");
        Node n32 = new Node(n3, "n32");
        Node n33 = new Node(n3, "n33");
        Node n34 = new Node(n3, "n34");

        System.out.println(n34);
        System.out.println(n34.parent);
        System.out.println(n34.parent.parent);
        System.out.println(n34.parent.parent.parent);
    }
    static class Node {
        public Node parent;
        public Object data;

        public Node(Node parent, Object data) {
            this.parent = parent;
            this.data = data;
        }

        @Override
        public String toString() {
            return "Node {" +
                    "parent=" + parent +
                    ", data=" + data +
                    '}';
        }
    }
}

import java.util.ArrayList;
import java.util.List;

class Native {
    public static void main(String[] args) {
        Node root = new Node(null, "root");
        Node n1 = new Node(root, "n1");
        Node n2 = new Node(root, "n2");
        Node n3 = new Node(root, "n3");

        System.out.println(root);
    }
    static class Node{
        public Node parent;
        public String name;
        public List<Node> children = new ArrayList<>();

        public Node(Node parent, String name) {
            this.name = name;
            if(parent != null){
                this.parent = parent;
                parent.children.add(this);
            }
        }

        @Override
        public String toString() {
            return "Node {" +
                    "name='" + name + '\'' +
                    ", children's=" + children +
                    '}';
        }
    }
}

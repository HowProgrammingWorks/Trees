import Foundation


class Node<T>: CustomStringConvertible where T: CustomStringConvertible, T: Comparable {
    
    var value: T?
    weak var parentNode: Node?
    var subNodes = [Node]()
    var subNodesCount: Int {
        return subNodes.count
    }
    var isEmpty: Bool {
        return subNodes.isEmpty
    }
    
    init() { }
    
    init(value: T) {
        self.value = value
    }
    
    func addChild(node child: Node) {
        child.parentNode = self
        subNodes.append(child)
    }
    
    func delete() {
        parentNode!.subNodes = parentNode!.subNodes.filter({ $0 !== self })
    }
    
    var description: String {
        var nodeValueStringRepresentation: String = ""
        if let value = value {
            nodeValueStringRepresentation = String(describing: value)
        }
        
        let subNodesStringRepresentation: String = subNodes.map({ $0.description }).reduce("", { (result, string) -> String in
            return result + " " + string
        })
        return nodeValueStringRepresentation + ":{" + subNodesStringRepresentation + " }"
    }
    
    func containsNode(withValue nodeValue: T) -> Bool {
        if !subNodes.isEmpty {
            return subNodes.map({ $0.containsNode(withValue: nodeValue) }).reduce(false, { $0 || $1 })
        } else {
            return nodeValue == value
        }
    }
    
}

class Tree<T>: CustomStringConvertible where T: CustomStringConvertible, T: Comparable {
    
    let root = Node<T>()
    
    var description: String {
        return "Tree: " + root.description
    }
    
    func containsNode(withValue value: T) -> Bool {
        return root.containsNode(withValue: value)
    }
    
}


// Initializing tree
let tree = Tree<Int>()
let root = tree.root
// Setting root value (this step is optional)
root.value = 999

// Initializing nodes and adding child nodes
let myNode = Node(value: 1)
myNode.addChild(node: Node(value: 10))
myNode.addChild(node: Node(value: 20))
myNode.addChild(node: Node(value: 30))

root.addChild(node: myNode)
root.addChild(node: Node(value: 2))
root.addChild(node: Node(value: 3))
root.addChild(node: Node(value: 4))

// Printing tree
print(tree)

// Geting and printing subtree
if let subtree = root.subNodes.first {
    print(subtree)
}

// Checking if subtree have a tree with this value
print(tree.containsNode(withValue: 2))
print(tree.containsNode(withValue: 7))


// Node deletion
myNode.delete()
print(tree)

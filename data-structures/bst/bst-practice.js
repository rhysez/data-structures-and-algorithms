class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(value) {
        this.root = new Node(value)
        // this keeps track of how many nodes are in tree
        this.count = 1;
    }

    size() {
        return this.count;
    }
    
    // increases count and creates new node
    // checks if it is smaller or greater
    insert(value) {
        this.count++

        let newNode = new Node(value);

        // recursive function that searches left or right
        const searchTree = node => {
            // if value < node.value, go left
            if (value < node.value) {
                // if no left child, append new node on left
                if (!node.left) {
                    node.left = newNode
                } 
                // if left child, look left again
                else {
                    searchTree(node.left)
                }
            }
            // if value > node.value, go right
            else if (value > node.value) {

                if (!node.right) {
                    node.right = newNode
                }

                else {
                    searchTree(node.right)
                }
            }
        }

        // start the search at root node
        searchTree(this.root)
    }

    // searches left side of the tree
    // for the smallest (last) node
    min() {
        let currentNode = this.root;

        while(currentNode.left) {
            // continually keep going left
            // re-assigns currentNode to it's own left child
            // until currentNode.left is false
            currentNode = currentNode.left;
        }

        return currentNode.value; 
    }

    // same algorithm as min() but goes right
    max() {
        let currentNode = this.root;

        while (currentNode.right) {
            currentNode = currentNode.right;
        }

        return currentNode.value;
    }

    // checks if value exists in tree
    contains(value) {
        let currentNode = this.root;

        while (currentNode) {
            if (value === currentNode.value) {
                return true;
            }

            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }

            return false;
        }
    }

    // DEPTH FIRST SEARCH - branch by branch

    // in-order
    // left, root, right
    // prints out values in numerical order
    dfsInOrder() {
        let result = [];

        const traverse = node => {
            // if left child exists, go left again
            if (node.left) traverse(node.left)
            // capture root node
            result.push(node.value)
            // if right child exists, go right again
            if (node.right) traverse(node.right)
        }

        traverse(this.root)

        return result;
    }

    // pre-order
    // root, left, right
    dfsPreOrder() {
        let result = []

        const traverse = node => {
            // capture root node
            result.push(node.value)
            // if left child exists, go left again
            if (node.left) traverse(node.left)
            // if right child exists, go right again
            if (node.right) traverse(node.right)
        }

        traverse(this.root)

        return result
    }

    // post-order
    // left, right, root
    dfsPostOrder() {
        let result = []

        const traverse = node => {
            // if left child exists, go left again
            if (node.left) traverse(node.left)
            // if right child exists, go right again
            if (node.right) traverse(node.right)
            // capture root node
            result.push(node.value)
        }

        traverse(this.root)

        return result
    }

    // BREADTH FIRST SEARCH - level by level
    // use a queue!
    bfs() {
        let result = []
        let queue = []

        queue.push(this.root)

        // this is actually a queue data structure in action
        // root node is added to the queue and put in result array
        // left and right children are then added to the queue
        // and then move into the result array in order
        // this is traversing the tree left to right!
        while(queue.length) {
            let currentNode = queue.shift()
            result.push(currentNode.value)

            if (currentNode.left) {
                queue.push(currentNode.left)
            }

            if (currentNode.right) {
                queue.push(currentNode.right)
            }
        }

        return result
    }
}

let bst = new BST(15);

bst.insert(3)
bst.insert(36)
bst.insert(2)
bst.insert(12)
bst.insert(28)
bst.insert(39)

console.log(bst.dfsInOrder())
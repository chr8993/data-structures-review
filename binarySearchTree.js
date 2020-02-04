class Node {
    constructor(data) {
        this.value = data;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(value) {
        this.root = new Node(value);
        this.count = 1;
    }

    size() {
        return this.count;
    }
    
    insert(value) {
        this.count++;
        let n = new Node(value);
        let searchTree = (node) => {
            // if value < node.value go left
            if(value < node.value) {
                // if no left child
                // append new node
                if(!node.left) {
                    node.left = n;
                }
                else {
                    searchTree(node.left);
                }
            }
            // if value > node.value go right
            else if(value > node.value) {
                // if no right child
                // append new node
                if(!node.right) {
                    node.right = n;
                }
                else {
                    searchTree(node.right);
                }
            }
        };
        searchTree(this.root);
    }

    // get the minimum value
    // by traversing tree all
    // the way to the left
    min() {
        let current = this.root;

        // traverse left until
        // current.left is null
        while(current.left) {
           current = current.left; 
        }

        return current.value;
    }

    // get the maximum value
    // by traversing tree all 
    // the way to the right
    max() {
        let current = this.root;
        while(current.right) {
            current = current.right;
        }
        return current.value;
    }

    // search the tree for the
    // value, returns false if not found
    contains(value) {
        let current = this.root;
        while(current) {
            // if the value matches node
            // value we found the node
            if(value == current.value) {
                return true;
            }
            // if node value is less
            // than current node value
            // traverse to the left
            if(value < current.value) {
                current = current.left;
            }
            // else traverse to the right
            else if(value > current.value) {
                current = current.right;
            }
        }
        return false;
    }

    // depth first search
    // branch by branch

    // in-order
    // left, root, right
    dfsInOrder() {
        
        let result = [];

        let traverse = (node) => {
            // if left child exists, go left again
            if(node.left) traverse(node.left)

            // capture root node value
            result.push(node.value);

            // if right child exists go right again
            if(node.right) traverse(node.right);
        }

        traverse(this.root);
        return result;
    }

    // pre-order
    // root, left, right
    dfsPreOrder() {
        let result = [];

        let traverse = (node) => {
            // capture root node value
            result.push(node.value);

            // if left child exists, go left again
            if(node.left) traverse(node.left)

            // if right child exists go right again
            if(node.right) traverse(node.right);
        }

        traverse(this.root);
        return result;
    }

    // post-order
    // left, right, root
    dfsPostOrder() {
        let result = [];

        let traverse = (node) => {
            // if left child exists, go left again
            if(node.left) traverse(node.left)
            
            // if right child exists go right again
            if(node.right) traverse(node.right);
            
            // capture root node value
            result.push(node.value);
        }
        
        traverse(this.root);
        return result;
    }

    // breadth first search
    // level by level
    bfs() {
        let result = [];
        let queue = [];

        queue.push(this.root);

        while(queue.length) {
            let current = queue.shift();

            result.push(current.value);

            if(current.left) {
                queue.push(current.left);
            }

            if(current.right) {
                queue.push(current.right);
            }
        }

        return result;
    }
}

let bst = new BST(15);

bst.insert(3);
bst.insert(36);
bst.insert(2);
bst.insert(12);
bst.insert(28);
bst.insert(39);

// in-order: 2,3,12,15,28,36,39
console.log('in-order');
console.log(bst.dfsInOrder());

// pre-order:  15,3,2,12,36,28,29
console.log('pre-order');
console.log(bst.dfsPreOrder());

// post-order: 2,12,3,28,39,36,15
console.log('post-order');
console.log(bst.dfsPostOrder());

// bfs
// 15,3,36,2,12,28,39
console.log('breadth first search');
console.log(bst.bfs());
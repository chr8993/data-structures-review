class LinkedNode {
    constructor(data, next = null) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList  {
    constructor() {
        this.head = null;
        this.size = 0; 
    }

    // add element to the end
    // of the list
    add(data) {
        let n = new LinkedNode(data);
        if(!this.head) {  
            this.head = n;
            this.size++;
        } 
        else {
            let cur = this.head;
            while(cur.next != null) {
                cur = cur.next;
            }
            cur.next = n;
            this.size++;
        }
    }

    // add an element to front
    // of the linked list
    addFirst(data) {
        let n = new LinkedNode(data);
        if(!this.head) {
            this.head = n;
            this.size++;
        }
        else {
            let c = this.head;
            n.next = c;
            this.head = n;
        }
    }

    // remove the item at 
    // index i from the list
    remove(idx) {
        if(idx == 0) {
            this.head = this.head.next;
            return;
        }
        let c = this.head;
        let p = null;
        let i = 0;
        while(i < idx) {
            p = c;
            c = c.next;
            i++;
        }
        if(c != null) {
            p.next = c.next;
        }
    }

    // get a specific node
    // at index i
    get(idx) {
        if(idx == 0) {
            return this.head;
        }
        let i = 0;
        let cur = this.head;
        while(i < idx) {
            cur = cur.next;
            i++;    
        }
        return cur;
    }

    // clear out all elements
    clear() {
        this.head = null;
    }

    // print out our 
    // linked list
    print() {
        console.log("List: ");
        if(!this.head) {
            console.log("empty");
            return 0;
        }        
        let c = this.head;
        while(c != null) {
            console.log(c.data);
            c = c.next;
        }
    }
}


let ll = new LinkedList();
ll.add(5); // 0
ll.add(6); // 1
ll.add(7); // 2
ll.add(8); // 3
ll.add(9); // 4

// remove 7 from list
ll.remove(2);

// remove 5 from list
ll.remove(0);

ll.print();


// clear out list
ll.clear();
ll.print();
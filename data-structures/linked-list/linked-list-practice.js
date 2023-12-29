class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    // initiates constructor with empty head and size
    constructor(){
        this.head = null;
        this.size = 0;
    };

    // add element to end of the list
    add(element){
        // creates a new node
        const node = new Node(element);

        // variable to track which node we are on
        let current;

        // if list is empty, add the node
        // and make it the head
        if (this.head == null) {
            this.head = node;
        } else {
            current = this.head;

            // while there is a next node
            // keep iterating through list
            // until we get to the last node
            while (current.next) {
                current = current.next
            }

            // add the node
            current.next = node;
            console.log('Node added');
        }

        this.size++;
    };

    // insert element at the position index
    insertAt(element, index) {
        if (index < 0 || index > this.size) {
            return console.log('Please enter a valid index');
        } else {
            // creates a new node
            const node = new Node(element);
            let current, previous;

            current = this.head;

            // add the element to the first index
            // node will be the head 
            // and it points to itself 
            // because it is the only node in the list
            if (index == 0) {
                node.next = this.head;
                this.head = node; 
            } else {
                current = this.head;

                // position in list
                let position = 0;

                // if our position is lower than specified index
                // iterate through list until we get to index
                while (position < index) {
                    position++;
                    previous = current;
                    current = current.next;
                }

                // then add the element
                node.next = current;
                previous.next = node;
            }
            
            this.size++;
        }
    };

    // removes a specified element from the list
    removeFrom(index) {
        if (index < 0 || index >= this.size) {
            return console.log('Please enter a valid index');
        } else {
            let current, previous
            let position = 0;

            current = this.head;
            previous = current; 

            // deleting first element
            if (index === 0) {
                // sets head to the next element, thus removing the first
                this.head = current.next;
            } else {
                // iterate through list to specified index
                while (position < index) {
                    position++
                    previous = current;
                    current = current.next;
                }
            }

            this.size--;

            // return the element we removed
            return current.element;
        }
    }

    // finds the index of an element
    indexOf(element) {
        let position = 0;
        let current = this.head;

        while (current != null) {
            // guard clause
            // return index of the element 
            if (current.element === element) {
                return position;
            }

            position++;
            current = current.next; 
        }

        // not found
        return -1; 
    }

    // checks if list is empty
    isEmpty() {
        // returns boolean value
        return this.size == 0;
    };

    // returns size of the list
    sizeOfList() {
        return this.size;
    }

    // prints the items in the list
    printList() {
        let current = this.head;
        let str = '';
        while (current) { 
            str += current.element + ' ';
            current = current.next;
        }
        console.log(str);
    }
}

const ll = new LinkedList();

ll.add('sprouts');
ll.add('gravy');
ll.add('turkey');

ll.printList();
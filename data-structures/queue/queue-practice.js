class Queue {
    constructor() {
        this.items = [];
        // queue is full when length reaches capacity
        this.capacity = 10; 
    };

    // add an item to the back of the queue
    enqueue(item) {
        if (this.items.length == this.capacity) {
            return 'Queue is full'
        }
        this.items.push(item);
    };

    // delete item from front of queue
    dequeue() {
        if (this.items.length == 0) {
            return 'Underflow';
        };
        // use array shift method to remove first element
        return this.items.shift();
    };

    // returns item at front of queue
    // but does not remove it
    peek() {
        if (this.items.length == 0) {
            return 'Underflow';
        };
        // returns first item in array
        return this.items[0];
    };

    isEmpty() {
        return this.items.length == 0;
    };

    isFull() {
        return this.items.length == this.capacity;
    };

    printQueue() {
        let str = '';
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + ', ' 
        }
        return str;
    };
};

let queue = new Queue;

queue.enqueue('Jeff');
queue.enqueue('Chris');
queue.enqueue('Randy');
queue.enqueue('Billy');
queue.enqueue('Bobby');

// removes Jeff from queue
queue.dequeue();

console.log(queue.peek());
console.log(queue.isFull());

console.log(queue.printQueue());

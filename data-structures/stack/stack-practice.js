class Stack {
    // we initiate the stack with an empty array
    constructor() {
        this.items = [];
    };

    // adds an item to top of stack
    push(element) {
        this.items.push(element);
    };

    //removes an item from top of the stack
    pop() {
        // if stack is empty, return 'Underflow'
        if (this.items.length == 0) {
            return 'Underflow';
        }
        // remove item from top of stack
        return this.items.pop();
    };

    // returns the top item in the stack
    // but does not delete it
    peek() {
        if (this.items.length == 0) {
            return 'Underflow'
        };
        
        return this.items[this.items.length -1]; 
    };

    // returns boolean value based on
    // if stack is empty or not 
    isEmpty() {
        return this.items.length == 0;
    };

    // returns a list of all items in stack
    printStack() {
        if (this.items.length == 0) {
            return 'Underflow';
        };

        let str = '';
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + ", ";
        }
        return str; 
    };
};

let stack = new Stack;

stack.push('first item');
stack.push('second item');
stack.push('third item');

console.log(stack.printStack());
console.log(stack.isEmpty());


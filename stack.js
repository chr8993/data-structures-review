// stacks are last in, first out
class Stack {
    constructor() {
        this.data = [];
        this.size = 0;
    }

    // push on top of the stack
    push(value) {
        this.size++;
        this.data.push(value);
    }

    // pop off the top value
    pop() {
        this.data.pop();
        this.size--;
    }

    // peek at the last element
    peek() {
        return this.data[this.size];
    }
}
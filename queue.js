// queues are FIFO
// first in, first out
class Queue {
    constructor() {
        this.queue = [];
    }

    // add element to queue
    enqueue(data) {
        this.queue.push(data);
    }

    // remove element from queue
    dequeue() {
        this.queue.shift();
    }

    // peek at first element
    peek() {
        return this.queue[0];
    }
}

let q = new Queue();

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

console.log(q);

q.dequeue();
q.dequeue();

console.log(q);
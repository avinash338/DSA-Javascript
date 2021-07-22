import { Node } from "../Node.js";

export default class Queue {
  constructor() {
    this.length = 0;
    this.start = null;
    this.end = null;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (!this.length) {
      this.start = newNode;
      this.end = newNode;
    } else {
      this.end.next = newNode;
      this.end = newNode;
    }
    this.length += 1;
    return newNode;
  }

  dequeue() {
    if (!this.length) {
      return null;
    } else {
      // set the current start as the node to remove
      const nodeToRemove = this.start;
      // set the node after the start as the new start
      this.start = this.start.next;
      // set the next node of the node to remove to null
      nodeToRemove.next = null;
      // set the end to null, if the queue will be empty after removing
      if (this.length === 1) {
        this.end = null;
      }
      // decrease the queue's length by 1
      this.length -= 1;
      // return the node to remove
      return nodeToRemove;
    }
  }
}

let a = new Queue();

a.enqueue(1);
a.enqueue(2);
a.enqueue(3);
a.enqueue(4);
a.dequeue();
console.log(a);

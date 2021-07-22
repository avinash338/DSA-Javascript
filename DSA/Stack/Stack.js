import { Node } from "../Node.js";

/**
 * Stack implementation using Array
 */
class Stack1 {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  // Add element to top of stack
  push(element) {
    this.items[this.count] = element;
    this.count++;
    return this.count - 1;
  }

  // Return and remove top element in stack
  pop() {
    const deletedItem = this.items[this.count - 1];
    this.count--;
    return deletedItem;
  }

  // Check top element in stack
  peek() {
    if (!this.count) return null;
    return this.items[this.count - 1];
  }

  // Check if stack is empty
  isEmpty() {
    return this.count === 0;
  }

  // Check size of stack
  size() {
    return this.count;
  }

  // Print elements in stack
  print() {
    return this.items;
  }

  // Clear stack
  clear() {
    this.items = [];
    this.count = 0;
    return this.items;
  }
}

/**
 * Stack implementation using LinkedList
 */
export default class Stack {
  constructor() {
    this.tail = null;
    this.size = 0;
  }
  push(data) {
    if (!this.tail) {
      this.tail = new Node(data);
    } else {
      let node = new Node(data);
      node.next = this.tail;
      this.tail = node;
    }
  }
  pop() {
    if (!this.tail) return null;
    let nodeToRemove = this.tail;
    this.tail = nodeToRemove.next;
    nodeToRemove.next = null;
    this.size--;
    return nodeToRemove;
  }
  peek() {
    if (!this.tail) return null;
    return this.tail.data;
  }
  printListData() {
    let current = this.tail;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

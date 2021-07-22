import { Node } from "../Node.js";

export default class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  unshift(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  push(data) {
    let node = new Node(data);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  insertAtIndex(data, index) {
    if (index > 0 && index > this.size) {
      return;
    }
    if (index === 0) {
      this.unshift(data);
    }
    let node = new Node(data);
    let current, previous;
    current = this.head;
    let count = 0;
    while (count < index) {
      previous = current;
      count++;
      current = current.next;
    }
    node.next = current;
    previous.next = node;
    this.size++;
  }

  getAtIndex(index) {
    if (index > 0 && index > this.size) {
      return;
    }
    let current = this.head;
    let count = 0;
    while (current) {
      if (count === index) {
        return current.data;
      }
      count++;
      current = current.next;
    }
  }

  removeAtIndex(index) {
    if (index > 0 && index > this.size) {
      return;
    }
    let current = this.head;
    let count = 0;
    let previous;
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.size--;
  }

  clearList() {
    this.head = null;
    this.size = 0;
  }

  arrayToLl(values) {
    values && values.forEach((value) => this.unshift(value));
    return this;
  }

  llToArray(node) {
    const nodes = [];
    let current = node;
    while (current) {
      nodes.push(current.data);
      current = current.next;
    }
    return nodes;
  }

  reverseList() {
    let currentNode = this.head;
    let previousNode = null;
    while (currentNode) {
      let tempNode = currentNode;
      currentNode = currentNode.next;
      tempNode.next = previousNode;
      previousNode = tempNode;
    }
    return previousNode;
  }

  printListData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

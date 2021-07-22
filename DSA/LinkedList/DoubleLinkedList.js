import { DoubleNode as Node } from "../Node.js";

export default class DoubleLinkedList {
  // a Doubly Linked List has a length, a beginning (= head), an end (= tail)
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  /**
   * @description    This method adds the data to the end.
   * @param {number} data
   */
  push(data) {
    // create a new node
    let node = new Node(data);
    // if the list is empty,the new node should become the head and the tail
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      // The current tail should point forward (= next) to the new node
      this.tail.next = node;
      // The new node should point back (= prev) to the current tail
      node.prev = this.tail;
      // The new node should become the new tail
      this.tail = node;
    }
    // increase length by 1
    this.size++;
  }

  /**
   * @description    This method removes data from the end.
   */
  pop() {
    // if empty: return null
    if (!this.size) return null;
    // save current tail (to return it later)
    const nodeToRemove = this.tail;
    if (this.size == 1) {
      // after removing the only node, there will be no head and tail
      this.head = null;
      this.tail = null;
    } else {
      // set the node before the current tail as the new tail
      this.tail = this.tail.prev;
      // remove the connection from the new tail to the old tail
      this.tail.next = null;
      // remove the connection from the old tail to the new tail
      nodeToRemove.prev = null;
    }
    // decrease length by 1
    this.size--;
    // return old tail
    return nodeToRemove;
  }

  /**
   * @description    This method adds data to the begining.
   * @param {number} data
   */
  unshift(data) {
    // create new node
    const node = new Node(data);
    // if list is empty: set head and tail to new node
    if (!this.size) {
      this.head = node;
      this.tail = node;
    } else {
      // set new node's next to current head
      node.next = this.head;
      // set the current head's prev to new node
      this.head.prev = node;
      // set list's head to new node
      this.head = node;
    }
    // increase length by 1
    this.size++;
  }

  shift() {
    // if empty: return null
    if (!this.size) return null;
    // set head as nodeToRemove
    const nodeToRemove = this.head;
    // after removing the only element, the list will be empty, so `head` and `tail` should be `null`
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // the node after the nodeToRemove should become the new head
      this.head = nodeToRemove.next;
      // remove both connections from the new head to the old head (= nodeToRemove)
      this.head.prev = null;
      nodeToRemove.next = null;
    }
    // decrease length by 1
    this.size--;
    // return nodeToRemove
    return nodeToRemove;
  }

  insertAtIndex(index, data) {
    switch (index) {
      case !this.size || index > this.size || index < 0:
        return null;
      case 0:
        return this.unshift(data);
      case this.size:
        return this.push(data);
      default:
        const newNode = new Node(data);
        const newprevNode = this.getAtIndex(index - 1);
        const newNextNode = newprevNode.next;
        newNode.prev = newprevNode;
        newprevNode.next = newNode;
        newNode.next = newNextNode;
        newNextNode.prev = newnode;
        this.size++;
        return newNode;
    }
  }

  removeAtIndex(index) {
    switch (index) {
      case !this.size || index >= this.size || index < 0:
        return null;
      case 0:
        return this.shift();
      case this.size - 1:
        return this.pop();
      default:
        const nodeToRemove = this.getAtIndex(index);
        const prevNodeToRemove = nodeToRemove.prev;
        const nextNodeTorRemove = nodeToRemove.next;
        nodeToRemove.next = null;
        nodeToRemove.prev = null;
        prevNodeToRemove.next = nextNodeTorRemove;
        nextNodeTorRemove.prev = prevNodeToRemove;
        this.size--;
        return nextNodeTorRemove;
    }
  }

  getAtIndex(index) {
    if (index > this.size || !this.size || index < 0) return null;
    let node;
    if (index < this.size / 2) {
      let counter = 0;
      node = this.head;
      while (counter < index) {
        node = node.next;
        counter++;
      }
    } else {
      let counter = this.size - 1;
      node = this.tail;
      while (counter > index) {
        node = node.prev;
        counter--;
      }
    }
    return node;
  }

  setAtIndex(index, data) {
    const node = this.getAtIndex(index);
    if (!node) {
      return null;
    } else {
      node.value = data;
    }
    return node;
  }

  printListData() {
    let current = this.head;
    while (current) {
      console.log(current);
      current = current.next;
    }
  }
}

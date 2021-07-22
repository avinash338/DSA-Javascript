// a Node has a value and a pointer to the next node (= next)
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// a Node has a value, a pointer to the previous node (= prev), a pointer to the next node (= next)
class DoubleNode {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

export { Node, DoubleNode };

import LinkedList from "../LinkedList.js";

// Works for sorted Lists
const removeDuplicates = (linkedList) => {
  let current = linkedList.head;
  while (current) {
    let nextNode = current.next;
    while (nextNode && nextNode.data === current.data) {
      nextNode = nextNode.next;
    }
    current.next = nextNode;
    current = nextNode;
  }
  return linkedList.head;
};

// Works for sorted Lists
const removeDuplicates1 = (linkedList) => {
  let current = linkedList.head;
  while (current !== null && current.next !== null) {
    if (current.data === current.next.data) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return linkedList.head;
};

// Works for both sorted and unsorted lists
const removeDuplicates2 = (linkedList) => {
  let current = linkedList.head;
  let previous = null;
  let tempArray = [];
  while (current) {
    if (tempArray.includes(current.data)) {
      previous.next = current.next;
      current = previous.next;
    } else {
      tempArray.push(current.data);
      previous = current;
      current = current.next;
    }
  }
  return linkedList.head;
};

import LinkedList from "../LinkedList.js";

// Iterative approach
const reverseList1 = (currentNode) => {
  let previousNode = null;
  while (currentNode) {
    let tempNode = currentNode;
    currentNode = currentNode.next;
    tempNode.next = previousNode;
    previousNode = tempNode;
  }
  return previousNode;
};

// Array destruction
const reverseList2 = (currentNode) => {
  let previousNode = null;
  while (currentNode) [currentNode.next, previousNode, currentNode] = [previousNode, currentNode, currentNode.next];
  return previousNode;
};

// Recursive approach
const reverseList3 = (currentNode, previousNode = null) => {
  if (!currentNode) return previousNode;
  let tempNode = currentNode.next;
  currentNode.next = previousNode;
  return reverseList3(tempNode, currentNode);
};

const list1 = new LinkedList();
list1.arrayToLl([100, 200, 300, 400, 500]);
const list2 = new LinkedList();
list2.arrayToLl([100, 200, 300, 400, 500]);
const list3 = new LinkedList();
list3.arrayToLl([100, 200, 300, 400, 500]);
console.log(reverseList1(list1.head));
console.log(reverseList2(list2.head));
reverseList3(list3.head);

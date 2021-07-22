import LinkedList from "../LinkedList.js";
import { Node } from "../../Node.js";

// Recursion method (not working)
const addTwoLists1 = (l1, l2) => {
  let carry = 0;
  if (!l1 && !l2 && carry === 0) return null;
  let x = l1 ? l1.data : 0;
  let y = l2 ? l2.data : 0;
  let nextL1 = l1 ? l1.next : null;
  let nextL2 = l2 ? l2.next : null;
  let sum = x + y + carry;
  carry = Math.floor(sum / 10);
  sum = sum % 10;
  return {
    data: sum,
    next: addTwoLists1(nextL1, nextL2),
  };
};

// Iteration method
const addTwoList2 = (a, b) => {
  let list = new Node(0);
  let currentNode = list;
  let sum = 0;
  let carry = 0;
  while (a !== null || b !== null || sum > 0) {
    if (a !== null) {
      sum += a.data;
      a = a.next;
    }
    if (b !== null) {
      sum += b.data;
      b = b.next;
    }
    carry = Math.floor(sum / 10);
    sum = sum % 10;
    currentNode.next = new Node(sum);
    currentNode = currentNode.next;
    sum = carry;
  }
  return list.next;
};

// recursion method
function addTwoLists3(l1, l2, carry = 0) {
  if (l1 === null && l2 === null) {
    return carry === 0 ? null : new Node(carry);
  }
  const sum = (l1?.data || 0) + (l2?.data || 0) + carry;
  return new Node(sum % 10, addTwoLists3(l1?.next || null, l2?.next || null, Math.floor(sum / 10)));
}

const list1 = new LinkedList();
[1, 7, 4, 2].forEach((item) => list1.unshift(item));
const list2 = new LinkedList();
[5, 4, 9].forEach((item) => list2.unshift(item));

console.log(addTwoLists3(list1.head, list2.head));

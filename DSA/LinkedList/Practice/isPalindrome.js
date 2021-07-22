import LinkedList from "../LinkedList.js";

const isPalindrome = (head) => {
  const nodes = [];
  let current = head;
  while (current) {
    nodes.push(current.data);
    current = current.next;
  }
  for (let index = 0; index < nodes.length; index++) {
    if (nodes[index] !== nodes[nodes.length - 1 - index]) return false;
  }
  return true;
};

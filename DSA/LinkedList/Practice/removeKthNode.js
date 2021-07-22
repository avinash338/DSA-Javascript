import LinkedList from "../LinkedList.js";

const removeNode = (head, k) => {
  let first = head;
  let second = head;
  let counter = 0;
  while (counter < k) {
    second = second.next;
    counter++;
  }
  if (second === null) {
    head.data = head.next.data;
    head.next = head.next.next;
    return;
  }
  while (second.next !== null) {
    second = second.next;
    first = first.next;
  }
  first.next = first.next.next;
  return head;
};

const print = (head) => {
  const nodes = [];
  while (head) {
    nodes.push(head.data);
    head = head.next;
  }
  console.log(nodes);
};

const a = new LinkedList();
a.arrayToLl([ 5, 4, 3, 2, 1]);
const result = removeNode(a.head, 2);
print(result);
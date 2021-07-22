import LinkedList from "../LinkedList.js";

const shiftLL = (head, k) => {
  let current = head;
  let count = 1;
  while (current.next) {
    count++;
    current = current.next;
  }
  let offset = Math.abs(k) % count;
  if (offset === 0) return head;
  let newTailPosition = k > 0 ? count - offset : offset;
  let newTail = head;
  for (let i = 1; i < newTailPosition; i++) {
    newTail = newTail.next;
  }
  const newHead = newTail.next;
  newTail.next = null;
  current.next = head;
  return newHead;
};

const ll = new LinkedList();
ll.arrayToLl([5, 4, 3, 2, 1, 0]);
shiftLL(ll.head, 2);

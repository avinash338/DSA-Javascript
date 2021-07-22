import LinkedList from "../LinkedList.js";

const mergeLists = (list1, list2) => {
  let a = list1;
  let temp = null;
  let b = list2;
  while (a !== null && b !== null) {
    if (a.data < b.data) {
      temp = a;
      a = a.next;
    } else {
      if (temp !== null) temp.next = b;
      temp = b;
      b = b.next;
      temp.next = a;
    }
  }
  if (a === null) temp.next = b;
  return list1.data < list2.data ? list1 : list2;
};

const print = (head) => {
  const nodes = [];
  while (head) {
    nodes.push(head.data);
    head = head.next;
  }
  console.log(nodes);
};

const aa = new LinkedList();
aa.arrayToLl([8, 5, 3]);
const bb = new LinkedList();
bb.arrayToLl([9, 7, 4, 1]);
print(mergeLists(aa.head, bb.head));

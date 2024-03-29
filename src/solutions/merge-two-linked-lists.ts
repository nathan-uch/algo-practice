import ProblemInfo from '../components/info-class.js';

export class Node<T> {
  val: T;
  next: Node<T> | null = null;

  constructor(val: T) {
    this.val = val;
  }
}

export const MergeTwoLinkedLists = new ProblemInfo(
  'Merge Two Sorted Lists', // name
  'Easy', // difficulty
  'Oct 18th, 2022', // date
  'Leet Code / Neet Code', // source
  'https://leetcode.com/problems/merge-two-sorted-lists/', // link
  'Merge two sorted linked lists, return head.', // summary
  true, // completed
  true, // usedHelp
  'https://youtu.be/XIdigk956u0', // helpSource
  'Linked Lists', // topics
  `
  create a new node for appending
  create reference to head of new node
  while both lists have values
  compare which list value is less than other
    append less than value to new node
    move list to next
    move new node to next
  when loop ends, check which node is remaining
    add remaining node to new node's next
  return reference to head's next
    `, // pseudoCode
  function solution<T>(list1: Node<T> | null, list2: Node<T> | null): Node<T> {
    let mer: any = new Node(0);
    let head = mer;

    while (list1 && list2) {
      if (list1.val < list2.val || list2 === null) {
        mer.next = list1;
        list1 = list1.next;
      } else if (list1.val > list2.val || list1 === null) {
        mer.next = list2;
        list2 = list2.next;
      } else if (list1.val === list2.val) {
        mer.next = list1;
        list1 = list1.next;
        mer = mer.next;
        mer.next = list2;
        list2 = list2.next;
      }
      mer = mer.next;
    }
    if (list1) {
      mer.next = list1;
    } else if (list2) {
      mer.next = list2;
    }
    return head.next;
  } // solution
);

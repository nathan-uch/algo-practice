import ProblemInfo from '../components/info-class.js';

export class Node<T> {
  val: T;
  next: Node<T> | null = null;

  constructor(val: T) {
    this.val = val;
  }
}

export const ReverseLinkedList = new ProblemInfo(
  'Reverse Linked List', // name
  'Easy', // difficulty
  'Sep 16, 2022', // date
  'Leet Code / Neet Code', // source
  'https://leetcode.com/problems/reverse-linked-list/', // link
  'Reverse a linked list.', // summary
  true, // completed
  false, // usedHelp
  'https://www.youtube.com/watch?v=G0_I-ZF0S38&feature=emb_title', // helpSource
  'Linked Lists, Recursion', // topics
  `
  Steps needed:
  - need to keep track of the next in reversed list
  - need to keep track of current traversing node
  - need to save the remaining (original) nodes that need traversal

  1. previous equals to null (this will be the result, we will be adding to beginning)
  2. current equal to head
  3. while current is not null
  4.    save the head of remaining nodes to be traversed in variable
  5.    the current.next will become the previous
  6.    previous will become the current
  7.    current will be the head of remaining nodes to be traversed
  8. return previous
    `, // pseudoCode
  function solution<T>(head: Node<T> | null): Node<T> | null {
    let prev = null;
    let current = head;

    while (current !== null) {
      let nxt = current.next;
      current.next = prev;
      prev = current;
      current = nxt;
    }
    return prev;
  } // solution
);

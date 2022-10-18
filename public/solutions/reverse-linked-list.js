import ProblemInfo from '../components/info-class.js';
class Node {
    constructor(val) {
        this.next = null;
        this.val = val;
    }
}
export const ReverseLinkedList = new ProblemInfo('Reverse Linked List', 'Easy', 'Sep 16, 2022', 'Leet Code / Neet Code', 'https://leetcode.com/problems/reverse-linked-list/', 'Reverse a linked list.', true, false, 'https://www.youtube.com/watch?v=G0_I-ZF0S38&feature=emb_title', 'Linked Lists, Recursion', `
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
    `, function solution(head) {
    let prev = null;
    let current = head;
    while (current !== null) {
        let nxt = current.next;
        current.next = prev;
        prev = current;
        current = nxt;
    }
    return prev;
});

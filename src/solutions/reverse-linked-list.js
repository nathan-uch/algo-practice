import ProblemInfo from '../info-template.js';

export const ReverseLinkedList = new ProblemInfo;
ReverseLinkedList.name = 'Reverse Linked List';
ReverseLinkedList.website = 'Leet Code / Neet Code';
ReverseLinkedList.link = 'https://leetcode.com/problems/reverse-linked-list/';
ReverseLinkedList.date = 'Sep 16, 2022';
ReverseLinkedList.difficulty = 'Easy';
ReverseLinkedList.recommendedTime = 20;
ReverseLinkedList.timeToComplete = 30;
ReverseLinkedList.complete = true;
ReverseLinkedList.problem = 'Reverse a linked list.';
ReverseLinkedList.topics = 'Linked List & Recursion';
ReverseLinkedList.usedHelp = true;
ReverseLinkedList.pseudoCode = `
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

`;

/* Problem & Example:
Given the head of a singly linked list, reverse the list, and return the reversed list.

Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Input: head = [1,2]
Output: [2,1]

Input: head = []
Output: []

Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?

*/

//recursive
function solution(head) {
  let prev = null;            // null
  let current = head;         // 1,2,3,4,5

  while (current !== null) {
    let nxt = current.next; // 2,3,4,5  // 3,4,5    // 4,5      // 5        // null
    current.next = prev;    // null     // 1        // 2,1      // 3,2,1    // 4,3,2,1
    prev = current;         // 1        // 2,1      // 3,2,1    // 4,3,2,1  // 5,4,3,2,1
    current = nxt;          // 2,3,4,5  // 3,4,5    // 4,5      // 5        // null
  }
  return prev
}

//recursion
function solution2(head){


}

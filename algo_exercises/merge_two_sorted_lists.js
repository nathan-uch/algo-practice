// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes 
// of the first two lists.

//


const mergeTwoLists = function(list1, list2) {
   let curr = new ListNode();
   const dummy = curr;
   while(list1 && list2) {
        if (list1.val < list2.val) {
            curr.next = list1;
            list1 = list1.next;
        } else {
            curr.next = list2;
            list2 = list2next;
        }
        curr = curr.next;
   }
    if (list1) {
    curr.next = list1;
   }
    if (list2) {
    curr.next = list2;
   }
    return dummy.next;
}


console.log(mergeTwoLists([1,2,4], [1,3,4]));
console.log(mergeTwoLists([], []));
console.log(mergeTwoLists([], [0]));

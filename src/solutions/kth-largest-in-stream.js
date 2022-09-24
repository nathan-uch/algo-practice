import ProblemInfo from '../info-template.js';

export const KthLargestInStream = new ProblemInfo;
KthLargestInStream.name = 'Kth Largest Element in a Stream';
KthLargestInStream.website = 'Leet Code / Neet Code';
KthLargestInStream.link = 'https://leetcode.com/problems/kth-largest-element-in-a-stream/';
KthLargestInStream.date = 'Sep 23, 2022';
KthLargestInStream.difficulty = 'Easy';
KthLargestInStream.recommendedTime = 20;
KthLargestInStream.timeToComplete = 35;
KthLargestInStream.complete = false;
KthLargestInStream.problem = 'Create class that initalizes object with values and appens int to stream.';
KthLargestInStream.topics = 'Heap / Priority Queue';
KthLargestInStream.usedHelp = true;
KthLargestInStream.pseudoCode = `
Topic:
Min heap is the minimum values required to get the answer from -nums-

From the example:
in the array [4,5,8,2] we do not need the -2- because k is 3.
We only need the 3 highest numbers (also because we do not need to remove anything from heap).
From the heap, we can add our value and check if we need to use the new value or not,
from there we retrieve the kth largest.

`;

/* Problem & Example:
Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.
Implement KthLargest class:
KthLargest(int k, int[] nums) Initializes the object with the integer k and the stream of integers nums.
int add(int val) Appends the integer val to the stream and returns the element representing the kth largest element in the stream.

Input
["KthLargest", "add", "add", "add", "add", "add"]
[[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
Output
[null, 4, 5, 5, 8, 8]

Explanation
KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
kthLargest.add(3);   // return 4
kthLargest.add(5);   // return 5
kthLargest.add(10);  // return 5
kthLargest.add(9);   // return 8
kthLargest.add(4);   // return 8
*/

class KthLargest1 {
    constructor(k, nums) {
        this.k = k;
        this.nums = nums;
    }
}

KthLargest1.prototype.add = function(val) {
    this.nums.push(val)
    this.nums.sort((a,b) => a-b);
    let heap = [];
    let index = this.nums.length - 1;
    while (heap.length < this.k) {
        heap.push(this.nums[index])
        index--;
    }
    return heap[heap.length - 1]
};
// above exceeded time

class KthLargest2 {
  constructor(k, nums) {
    this.k = k
    this.minHeap = new MinPriorityQueue();
    nums.forEach((num) => this.add(num))
  }

  add(val, { minHeap } = this) {
    const isUnderCapacity = minHeap.size() < this.k;
    if (isUnderCapacity) {
        minHeap.enqueue(val);
        return this.top();
    }

    const isLarger = this.top() < val;
    if (isLarger) {
        minHeap.dequeue()
        minHeap.enqueue(val);
    }
    return this.top();
  }

  top ({ minHeap } = this) {
      return minHeap.front()?.element || 0
  }
}

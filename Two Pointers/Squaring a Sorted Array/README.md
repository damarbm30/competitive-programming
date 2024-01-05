# Squaring a Sorted Array

## 1st Solution

Use brute force method with the built-in JavaScript sort function. But, it will result in time complexity of O(n log n)

## 2nd Solution

Use two pointers with the following steps:

1. Initialize an array with the same length of input array filled with 0
2. Mark the last index as the highest square
3. Traverse through the input array until left is lesser or equal than right, compare both squared value of pointers
4. If the left is greater or equal than right, make the highest square equals to squared left pointer. Otherwise, make it equals to squared right pointer
5. Decrement the highest square after each assignment
6. Return the initialized array

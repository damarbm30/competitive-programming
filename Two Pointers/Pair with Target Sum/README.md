# Pair with Target Sum

## Solution 1

Use two pointers with the following algorithm:

1. If the sum is greater than the target, decrement the right pointer. Otherwise, increment the left pointer
2. Return true if left is lesser than right and sum is equal to the target

There are some scenarios where this approach can't solve this problem

## Solution 2

Use hashmap to track the index of each element

1. Create an empty object
2. Check if target - current element exists in the object
3. Set the current element into the object with its index as the value
4. If exists, return both indexes (current element and the index of target - current element)

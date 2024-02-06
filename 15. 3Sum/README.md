# Triplet Sum to Zero

The concept is generally the same as two sum, sort the input array first, then choose the smallest number to be the target. It will choose a negative number. We only need to choose two numbers which sum equals to the target absolute number.

The steps are as follows:

1. Loop the input array. Initialize the target as positive number, left pointer = i + 1 and right pointer
2. While left is lesser than right, check if the sum of both pointers equals to the target
3. If sum < target, move the left pointer. If sum > target, move the right pointer. If both are equal, check if the last pushed triplet is same with the current one. If it is, continue the loop. Else, we can push the array.
4. Anticipate checking the same target on different index (check if current element equals to previous element)

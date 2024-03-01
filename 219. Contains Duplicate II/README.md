# Contains Duplicate II

Find a duplicate where abs(i - j) <= k

1. Use the concept of sliding window to maintain abs(i - j) <= k
2. Declare a hash set to check if there is a duplicate
3. Loop the array. If the window size is greater than k, remove the element on the location of window start from the hash set
4. If there is a duplicate, return true (that's why hash set is used, to check if the element already stored or not)
5. Either way, add the element to the hash set

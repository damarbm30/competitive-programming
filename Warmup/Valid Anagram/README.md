# Valid Anagram

## 1st Solution

1. Compare the length, return false if it's not same
2. Sort both the input, then compare them

## 2nd Solution

1. Create a hash object
2. Count every letter of first input
3. Decrement the count every letter on the hash object found in the second input
4. Check if all letters count equals zero

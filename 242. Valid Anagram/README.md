# Valid Anagram

## 1st Solution

The first solution is pretty straightforward. We just need to compare by splitting them into characters, sorting them, then joining them back as a whole string.

## 2nd Solution

1. Use hashmap to store the frequency of letters
2. We'll be using 2 loops. The first loop is to track the frequency, the second one will be used to decrement the frequency
3. In the second loop, check if a character exist or not. If it's not, then return false. Otherwise, decrement the frequency (checking first then decrementing it later will prevent checking while the frequency is 0)

# Reverse Vowels

Use two pointers to get the index of two elements.
1. Convert the string into an array of characters
2. Declare a left variable which is from index 0 and right variable which is the last index of the input string
3. Increase the index if it founds a consonant
4. Swap if both vowels

```mermaid
graph TB;
    A[Create an array of vowels]-->B[Split the input string to make it an array];
    B-->C[Traverse from left and right until a vowel is found];
    C-->D[Swap the vowel from both sides];
    D-->E[Is left index greater than right index?];
    E--Yes-->F[Return the joined string];
    E--No-->C
   
```

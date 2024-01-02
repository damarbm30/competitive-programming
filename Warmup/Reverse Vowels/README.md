# Reverse Vowels

Use two pointers

```mermaid
graph TB;
    A[Create an array of vowels]-->B[Split the input string to make it an array];
    B-->C[Traverse from left and right until a vowel is found];
    C-->D[Swap the vowel from both sides];
    D-->E[Is left index greater than right index?];
    E--Yes-->F[Return the joined string];
    E--No-->C
   
```

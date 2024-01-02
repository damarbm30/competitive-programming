# Reverse Vowels

Use two pointers

```mermaid
graph TD;
    A[Create an array of vowels]-->B[Split the input string to make it easier to manipulate];
    B-->C[Traverse from first and last index until a vowel is found];
    C-->D[Swap the vowel from both sides];
    D-->E[Is left index greater than right index?];
    E--Yes-->F[Return the joined string when the both sides meet (left > right)];
    E--No-->C
```

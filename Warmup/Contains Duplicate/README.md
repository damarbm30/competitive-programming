# Contains Duplicate

## 1st Solution

Comparing the length of a set with the original array. Same length means there is no duplicate.

## 2nd Solution

```mermaid
graph TD;
    A[Create an empty object]-->B[Loop every element];
    B[Is the element already exist?]--Yes-->C[Return true];
    B[Is the element already exist?]--No-->D[Continue marking every element];
    C-->E[Return false when the loop is finished];
    D-->E[Return false when the loop is finished];
```

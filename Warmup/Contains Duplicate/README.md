# Contains Duplicate

## 1st Solution

Comparing the length of a set with the original array. Same length means there is no duplicate.

## 2nd Solution

```mermaid
graph TD;
    A[Create an empty object]-->B[Loop every element];
    B-->C[Is the element already exist?];
    C--Yes-->D[Return true];
    C--No-->E[Continue marking every element];
    E-->F[Return false when the loop is finished];
```

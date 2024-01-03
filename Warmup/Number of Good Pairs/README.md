# Number of Good Pairs

Other than using brute force which results in O(n<sup>2</sup>), use hashmap to achieve O(n) which has a flow like the image below

```mermaid
graph TB;
    A[Create an empty object]-->B[Count the frequency of each element];
    B->C[Sum the count of pairs the current element can make with earlier elements]
```

# Contains Duplicate

## 1st Solution

Comparing the length of a set with the original array. Same length means there is no duplicate.

## 2nd Solution

```mermaid
graph TD;
    Create an empty object-->Loop every element;
    Is the element already exist?-->If yes, return true;
    Is the element already exist?-->Else, continue marking every element;
    Else, continue marking every element-->Return false when the loop is finished;
```

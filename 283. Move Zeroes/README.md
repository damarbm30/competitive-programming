# Move Zeroes

1. Initialize index of zero to 0, we will keep track of smallest index of zero
2. Traverse through the array, if nonzero number is found, swap the number and increment the index of zero (don't swap the index of both as there'll be an existing zero on smaller index)

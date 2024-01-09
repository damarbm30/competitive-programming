# Largest Positive Integer That Exists With Its Negative

1. Sort the array
2. Keep track all of the negative numbers to an object, stop if it found positive
3. Loop through the biggest positive number, check if the negative of the number exists inside the object then return it. Otherwise, return -1

# Longest Substring without Repeating Characters

## 1st Solution

1. We'll have to use hash map and sliding window
2. Loop through the string, add the character to the map (no need to store the index, we only want to know if it's already exist or not)
3. Check if there is a duplicate exists before adding a new character. If it is, delete the element of the index start and slide the window by incrementing the start index using while loop to delete the remaining character before the duplicated one visited on the earlier iteration
4. Compare then return the length of the substring

## 2nd Solution

1. We'll be using set and sliding window
2. Loop through the string, add the character to the set
3. Check if there is a duplicate exists before adding a new character. If it is, delete the element of the index start and slide the window by incrementing the start index using while loop to delete the remaining character before the duplicated one visited on the earlier iteration
4. Compare then return the length of the substring

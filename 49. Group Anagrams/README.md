# Group Anagrams

1. Create a hashmap
2. Loop through the string
3. Sort each element to check if there is an anagram or not.
4. Check if the sorted element exists inside the hashmap. Otherwise, add it with the sorted element as its key and the original string as the value
5. If the sorted element already exists, use spread operator to get the existing data and add the new string

var twoSum = function(nums, target) {
    const numIndices = {}; // Create an object to store the values and their indices

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;

    // Check if the complement exists in the hash table
    if (numIndices.hasOwnProperty(complement)) {
      // If found, return the indices of the two numbers
      return [numIndices[complement], i];
    }

    // Otherwise, store the current number and its index in the hash table
    numIndices[num] = i;
  }
  }

// Solution To Problem 1

function twoSum(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        map.set(nums[i], i);
    }

    return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6));       // [1, 2]
console.log(twoSum([3, 3], 6));          // [0, 1]



// Solution To Problem 2
function isAnagram(s, t) {
    // Anagrams must have the same length
    if (s.length !== t.length) {
        return false;
    }

    const map = new Map();

    // Count characters in s
    for (const char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    // Subtract characters using t
    for (const char of t) {
        if (!map.has(char)) {
            return false;
        }

        map.set(char, map.get(char) - 1);

        // If a character appears too many times in t
        if (map.get(char) < 0) {
            return false;
        }
    }

    return true;
}

console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car"));         // false
console.log(isAnagram("listen", "silent"));   // true


// Solution To Problem 3
function groupAnagrams(words) {
    const map = new Map();

    for (const word of words) {
        // Sort the letters to create a signature
        const key = word.split("").sort().join("");

        // Create the group if it doesn't exist
        if (!map.has(key)) {
            map.set(key, []);
        }

        // Add the word to its anagram group
        map.get(key).push(word);
    }

    // Return all the groups
    return Array.from(map.values());
}

console.log(
    groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
);

// [
//   ["eat", "tea", "ate"],
//   ["tan", "nat"],
//   ["bat"]
// ]


// Solution To Problem 4
function lengthOfLongestSubstring(s) {
    const set = new Set();

    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {

        // If character already exists,
        // remove characters from the left
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }

        // Add the current character
        set.add(s[right]);

        // Calculate the current window length
        const currentLength = right - left + 1;

        // Keep the longest length
        maxLength = Math.max(maxLength, currentLength);
    }

    return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb"));     // 1
console.log(lengthOfLongestSubstring("pwwkew"));    // 3


// Solution To Problem 5
function flatUnique(arr) {
    // Flatten the array completely
    const flattened = arr.flat(Infinity);

    // Remove duplicates
    const unique = new Set(flattened);

    // Convert Set back to an array and sort
    return Array.from(unique).sort((a, b) => a - b);
}

console.log(
    flatUnique([[5, 5], [3, [3, 1]], 2])
);
// [1, 2, 3, 5]

console.log(
    flatUnique([1, [2, [3, 2]], [1, [4, 3]]])
);
// [1, 2, 3, 4]

function anagrams(str1, str2) {
  // Your code here
  return str1.split('').sort().join('') === str2.split('').sort().join('')
}


function commonElements(arr1, arr2) {
  // Your code here
  let integers = [];
  const hash = {};

  for (let i = 0; i < arr1.length; i++) {
    hash[arr1[i]] = true
  }
  for (let i = 0; i < arr2.length; i++) {
    if (hash[arr2[i]]) {
      integers.push(arr2[i]);
    }
  }
  return integers;
}

function duplicate(arr) {
  // Your code here
  for (let i = 0, found = {}; i < arr.length; i++) {
    let num = arr[i];
    if (found[num]) return num;
    found[num] = 1;
  }
  return false
}


function twoSum(nums, target) {
  // Your code here
  const hash = {};

  for (let i = 0; i < nums.length; i++) {
    const number = target - nums[i];

    if (hash[number] !== undefined) {
      return true;
    }
    hash[nums[i]] = i;
  }
  return false;
}

function wordPattern(pattern, strings) {
  // Your code here
  for (let i = 0, patternMap = {}, stringMap = {}; i < pattern.length; i++) {

    if (patternMap.hasOwnProperty(pattern[i])) {
      if (strings[i] !== patternMap[pattern[i]]) {
        return false;
      }
    }

    // bail if pattern doesn't match
    if (stringMap.hasOwnProperty(strings[i])) {
      if (stringMap[strings[i]] !== pattern[i]) {
        return false;
      }
    }

    // hash pattern and string
    patternMap[pattern[i]] = strings[i];
    stringMap[strings[i]] = pattern[i];
  }

  // if we never bailed, they matched
  return true;
}



module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];

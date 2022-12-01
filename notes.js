// ::::: BIG O NOTATION :::::


//  Describes algorithm (time & space) efficiency 
//  Describes relationship between input and algorithm efficiency, i.e. how input change affects it (runtime/memory allocation
//  with inputs growth; refers to space required by algorithm, not inputs themselves)
//  Counts num of operations. Looks for a trend, bigger picture
//  Just a generalized way of talking about how efficient algorithm is
//  O(f(n)) simplified to O(?); e.g. O(f(n) = 2n) would be O(n)


// Best to worst:
//  O(1) // runtime (or space complexity) always same (e.g. +, -, *, /, =, arr[5], obj.key)
//  O(log n) // basically means "2 of what power (e.g. 2*2*2*2) gives us n?"
//  O(n) // runtime (or space complexity) grows proportional to input size (e.g. loop)
//  O(n log n) // best we can get in a sorting algorithm
//  O(n^2) // n * n (e.g. nested loop)
//  O(2^n)
//  O(n!) // worst!


// Space complexity:
// O(1): number, boolean, undefined, null
// O(n): string, object (array, function)


// Logarithms:
// log2(8) = 3 // log base 2 of 8 equals 3, meaning 2 * 2 * 2 = 8
// 2 to what power equals 8?
// In Big O: log2 is just log
// Great time complexity!




// ::::: PROBLEM SOLVING :::::


// Algorith - process or set of steps to accomplish a task

// How to improve:
// a) devise a plan for solving problems (strategy)
// b) master common problem solving patterns


// Strategy: 

// Understand => Examples => Steps => Solve/Simplify => Refactor
// Apply these steps always when working on projects at home / work
// In an interview do these steps out loud, make sure the intervier hears you


// 1. Understand Problem
// Don't dive right in into solving; in programming you can start typing and feel you're making progress 
// quickly, even if you actually aren't making real progress
// Before typing, take a step back and make sure you understand the task
// Ask questions (to yourself or intervier):
//  a) "Restate the problem in your own words."
//  b) "What are the inputs"
//  c) "What are the otputs"
//  d) "Can the outputs be determined from the inputs, i.e. do you have enough information"
//  e) "How should I label the important pieces of data"


// 2. Explore Examples
// Another form of undestanding the problem before we tackle it
// Come up with concrete examples (this provides sanity check & helps better understand the problem)
//  a) simple examples (2 or 3 with an input and output)
//  b) complex examples (1 or 2)
//  c) empty/invalid inputs examples (edge cases)


// 3. Break Down
// Write down the steps you need to take (comments)
// Make sure you know where you're going, before you start writing code
// Interviers prefer if you communicate your line of thought, instead of just writing it down
// Sometimes you can throw in a little hint as well, i.e. "Do you thing that would work?", "Does this seem
// crazy to you?", "Could this be the right way?", and they might help you out
// Forces you to think about your code before writing it, so you're not just thinking about it on the fly
// It helps you if you don't manage to solve the problem in an interview (they see you formulated an approach)


// 4. Solve / Simplify
// Solve the problem if you can, or if you can't:
// Solve the problem you can, even if simpler
// Instead of focusing on one difficult part you don't know how to solve, ignore it and solve the parts 
// you know, then return to it
// In simplifying the problem you will often get an idea for solving the bigger problem


// 5. Look Back & Refactor
// Most important step to improving / becoming a better developer
// Clean code / big O notation / Alternative approaches
// "How have other people done it?"
// In an interview point out you would refactor it more if you had more time
// You can learn a lot by looking at how other people solved the same problem


// Patterns:

// frequency counter, multiple pointers, sliding window, divide & conquer, dynamic programming,
// greedy algorithms, backtracking, and many more!


// Frequency Counter Pattern

// Useful with:
//   - multiple pieces of data,
//   - need to compare them and frequencies of certain things occuring,
//   - order doesn't matter,
//   - avoid nested loops, i.e. O(n) instead of O(n2)


// Task:
// Fn takes 2 arr. Return true if every arr1 el has coresponding squared val in arr2. Order doesn't matter.

function includesSquaredValues(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  const freq = {};
  for (let el of arr1) {
    const squared = el * el;
    freq[squared] = (freq[squared] || 0) + 1;
  }
  for (let el of arr2) {
    if (!freq[el]) return false;
    else freq[el]--;
  }
  return true;
}

function isEachValSquared(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  const squared = {};
  for (const el of arr1) {
    const squaredVal = el * el;
    squared[squaredVal] = (squared[squaredVal] || 0) + 1;
  }
  for (const el of arr2) {
    if (!squared[el]) return false;
    else squared[el]--;
  }
  return true;
}
// Same as above, but 1 more iteration
function isEachValSquared2(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  const freqCount1 = {}, freqCount2 = {};
  for (const el of arr1) freqCount1[el] = (freqCount1[el] || 0) + 1;
  for (const el of arr2) freqCount2[el] = (freqCount2[el] || 0) + 1;
  for (const key in freqCount1) {
    if (!(key**2 in freqCount2) || freqCount1[key**2] !== freqCount2[key]) return false;
  }
  return true;
}

// Task 2:
// Fn takes 2 str. Return true if str2 is anagram of str1 (uses same characters, but reordered).
// We want to compare occurence of characters in each str and see if they are the same.

function isStrAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  const freq = {};
  for (let char of str1) {
    freq[char] = (freq[char] || 0) + 1;
  }
  for (let char of str2) {
    if (!freq[char]) return false;
    else freq[char]--;
  }
  return true;
}

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  const freqCount = {};
  for (let char of str1) {
    freqCount[char] = ++freqCount[char] || 1;
    // freqCount[char] ? freqCount[char] += 1 : freqCount[char] = 1; // alternate syntax
  }
  for (let char of str2) {
    if (!freqCount[char]) return false;
    freqCount[char]--;
  }
  return true;
}


// Multiple Pointers Pattern

// Create pointers that corespond to a position (index) and move them based on certain condition

// Useful wiht:
//  - linear structure (str, arr),
//  - searching for a pair of val (vals that meet a condition)
//  - order matters (usually sorted)


// Task 2
// Fn takes arr of sorted nums. Return first pair of nums whose sum is 0. Else return undefined.

function getNumsThatSumToZero(nums) {
  let i = 0;
  let j = nums.length - 1;
  while (i < j) {
    const first = nums[i];
    const second = nums[j];
    const sum = first + second;
    if (sum === 0) return [first, second];
    else if (sum > 0) j--;
    else i++;
  }
}

function sumZero(nums) {
  let i = 0, j = nums.length -1;
  while (i < j) {
    const n1 = nums[i], 
          n2 = nums[j],
          sum = n1 + n2;
    if (n1 > 0 || n2 < 0) return; // prevents unneded iterating
    if (sum > n2 || sum < n1) return; // alternative to upper line (both are not necessary)
    if (sum === 0) return [n1, n2];
    sum > 0 ? i++ : j--;
  }
}


// Taks 3
// Fn takes sorted arr of nums. Returns num of unique vals in it.

function countUniqueVals(nums) { // With frequency Counter
  const freqCount = {}; 
  nums.forEach(n => freqCount[n] = freqCount[n] || 1);
  return Object.keys(freqCount).length;
}

function countUniqueVals1(nums) {
  if (nums.length === 0) return 0;
  let count = 1, i = 0, j = 1;
  while(j < nums.length) {
    if (nums[i] !== nums[j]) {
      i = j;
      count++;
    }
    j++;
  }
  return count;
}

function countUniqueVals2(nums) { // Probably the simplest one
  let num = 0;
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] !== nums[i+1]) num++;
  }
  return num;
}

function countUniqueVals3(arr) {
  if(arr.length === 0) return 0;
  let i = 0, j = 1;
  while(j < arr.length) {
    if(arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
    j++;
  }
  return ++i;
}

function countUniqueVals4(arr) {
  if(arr.length === 0) return 0;
  let i = 0;
  for(let j = 1; j < arr.length; j++) {
    if(arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return ++i;
}

function countUniqueVals5(arr) {
  const unique = [];
  for(let el of arr) {
    if(el !== unique[unique.length - 1]) {
        unique.push(el);
    }
  }
  return unique.length;
}

const countUniqueVals6 = arr => new Set(arr).size; // with Set


// Sliding Window Pattern

// Useful wiht:
//  - linear structure (str, arr),
//  - looking for subset of that data, that is continuous in some way 


// Task:
// Fn accepts nums arr and num (n). Return max sum of n consecutive el in arr.

function maxConsecutiveSum(nums, n) {
  if (nums.length > n) return null;
  let sum = 0;
  for (let i = 0; i < n; i++) sum += nums[i];
  let currSum = sum;
  let i = 0;
  let j = n;
  while (j < nums.length) {
    currSum += nums[j++];
    currSum -= nums[i++];
    currSum = Math.max(currSum, sum);
  }
  return currSum;
}
 
function maxSubarraySum(nums, n) {
  if (nums.length < n) return null;
  let i = 0, j = n, max = 0, currSum = 0;
  for (let i = 0; i < n; i++) currSum += nums[i];
  max = currSum;
  while (j < nums.length) {
    currSum = currSum - nums[i] + nums[j];
    if (currSum > max) max = currSum;
    i++;
    j++;
  }
  return max;
}

function maxSubarraySum2(nums, n) {
  if (n > nums.length) return null;
  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < n; i++) maxSum += nums[i];
  tempSum = maxSum;
  for (let i = n; i < nums.length; i++) {
    tempSum = tempSum + nums[i] - nums[i-n];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}


// Divide And Counquer Pattern

// Involves dividing data into smaller chunks and the repeating that process with smaller chunks of data

// Useful wiht:
//  - linear structure (str, arr),
//  - sorted data

// e.g. if we want to find index of 5 in [0, 5, 16, 24, 33], we can loop through arr. However, if arr is sorted we can 
// just split it in half and see if 5 is in the first or second half, then split that list further, etc. 
// With a large arr this drastically improves time complexity! 
// O(log n)

// Task:
// Fn takes sorted nums arr and number. Return indexOf that number in the arr, or -1.

function getIndexOf(nums, n) {
  let indx, 
      start = 0, 
      end = nums.length - 1;
  while (start <= end) {
    indx = Math.floor( (end + start) / 2 );
    if (nums[indx] < n) start = ++indx;
    else if (nums[indx] > n) end = --indx;
    else return indx;
  }
  return -1;
}

function divideAndConquerSearch(nums, n) {
  let start = 0;
  let end = nums.length -1;
  while (start <= end) {
    let middle = Math.floor((end + start) / 2);
    if (nums[middle] === n) return middle;
    else if (nums[middle] < n) start = middle + 1;
    else end = middle - 1; 
  }
  return -1;
}

const findIndexOf = (nums, num) => {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    console.log("loop");
    const middle = Math.floor( (start + end) / 2 );
    if (nums[middle] === num) return middle;
    nums[middle] > num ? end = middle - 1 : start = middle + 1;
  }
  return -1;
}


// ::::: EXERCISES :::::

// Fn takes 2 nums. Return true if both nums have same frequency of digits.

function sameFrequency(n1, n2) {
  const freqCount = {};
  for (let n of n1.toString()) freqCount[n] = ++freqCount[n] || 1;
  for (let n of n2.toString()) {
    if (!freqCount[n]) return false;
    else --freqCount[n];
  }
  return true;
}

function sameFrequency2(num1, num2) {
    let n1 = num1.toString();
    let n2 = num2.toString();
    if(n1.length !== n2.length) return false;
    let frequency = {};
    for(let num of n1) frequency[num] = (frequency[num] || 0) + 1;
    for(let num of n2) {
        if(!frequency[num]) return false;
        else frequency[num]--;
    }
    return true;
}

const areSameFrequencyNums = (num1, num2) => {
  const n1 = num1.toString();
  const n2 = num2.toString();
  if (n1.length !== n2.length) return false;
  const freqCount = {};
  for (let n of n1) {
    freqCount[n] = (freqCount[n] || 0) + 1;
  }
  for (let n of n2) {
    if (!freqCount[n]) return false;
    else freqCount[n]--;
  }
  return true;
}

// Fn takes variable num of args. Return true if some args are duplicates.

function areThereDuplicates(...args) {
  const freqCount = {};
  for (let arg of args) {
    if (freqCount[arg]) return true;
    freqCount[arg] = 1;
  }
  return false;
}

function areThereDuplicates2(...args) { // Two pointers
  args.sort((a,b) => a > b); // we first sort
  let start = 0;
  let next = 1;
  while(next < args.length){
    if (args[start] === args[next]) return true;
    start++;
    next++;
  }
  return false
}

const areThereDuplicates3 = () => new Set(arguments).size !== arguments.length;

// Fn takes sorted nums arr and target num. Return true if average of any 2 nums in arr equals target num (e.g. (2+3)/2 = 2.5).

function isAveragePresent(nums, target) {
  if (nums.length < 2) return false;
  let i = 0;
  let j = nums.length - 1;
  let average;
  while (i < j) {
    average = (nums[i] + nums[j]) / 2;
    if (average === target) return true;
    average < target ? i++ : j--;
  }
  return false;
}

function averagePair(nums, avg) {
  if (nums.length < 2) return false;
  let start = 0;
  let end = nums.length - 1;
  while (start < end) {
    const currAvg = (nums[start] + nums[end]) / 2;
    if (currAvg === avg) return true;
    currAvg > avg ? end-- : start++;
  }
  return false;
}

// Fn takes 2 str. Check if str1 appears withing str2 without its order changing.

function isStrInStr(str1, str2) {
  if (str1.length > str2.length) return false;
  if (str1.length === str2.length) return str1 === str2;
  let counter = 0;
  for (let i = 0; i < str2.length && counter !== str1.length; i++) {
    if (str2[i] === str1[counter]) counter++;
  }
  return counter === str1.length;
}

function isSubsequence(str1, str2) {
  if (str1.length > str2.length) return false;
  let indx = 0;
  for (let char of str2) {
    if (char === str1[indx]) indx++;
  }
  return indx === str1.length; 
}

function isSubsequence2(str1, str2) {
    if(str1.length > str2.length) return false;
    let i = 0;
    let j = 0;
    while(i < str1.length && j < str2.length) {
        if(str1[i] === str2[j]) i++;
        j++;
    }
    return i < str1.length ? false : true;
}

function isSubsequence3(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

function isSubsequence4(str1, str2) {
  if(str1.length === 0) return true;
  if(str2.length === 0) return false;
  if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));
  return isSubsequence(str1, str2.slice(1));
}

// Fn takes nums arr and num (n). Return largest sum of subarray of length n withing the arr.

function maxSubArrSum(nums, length) {
  let sum = 0;
  if (nums.length < length) return sum;
  for (let i = 0; i < length; i++) sum += nums[i];
  let start = 0;
  let currSum = sum;
  for (let i = length; i < nums.length; i++) {
    currSum -= nums[start++];
    currSum += nums[i];
    sum = Math.max(currSum, sum);
  }
  return sum;
}

function maxSubarraySum(nums, n) {
  if (n > nums.length) return null;
  let start = 0;
  let end = n;
  let maxSum = 0;
  let currSum = 0;
  for (let i = 0; i < n; i++) maxSum += nums[i];
  currSum = maxSum;
  while (end < nums.length) {
    currSum = currSum - nums[start] + nums[end];
    maxSum = Math.max(currSum, maxSum);
    start++;
    end++;
  }
  return maxSum;
}

function maxSubarraySum2(nums, max) {
    if(nums.length < max) return null;
    let sum = 0;
    for(let i = 0; i < max; i++) sum += nums[i];
    let currSum = sum;
    let i = 0;
    let j = max;
    while(j < nums.length) {
        currSum -= nums[i++];
        currSum += nums[j++];
        if(currSum > sum) sum = currSum;
    }
    return sum;
}

function maxSubarraySum3(arr, n) {
  let i = 0, j = n;
  const sums = [];
  while(j <= arr.length) {
    let nArr = arr.slice(i, j);
    let sum = nArr.reduce((acc, curr) => {
      return acc += curr;
    });
    sums.push(sum);
    i++;
    j++;
  }
  return sums.length >= 1 ? Math.max(...sums) : null;
}

function maxSubarraySum4(arr, num){
  if(arr.length < num) return null;
  let maxSum = 0, tempSum = 0;
  for(let i = 0; i < num; i++) maxSum += arr[i];
  tempSum = maxSum;
  for(let i = num; i < arr.length; i++){
      tempSum = tempSum - arr[i - num] + arr[i];
      maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

// Fn takes nums arr and num (n). Return length of smallest continuous subarray whose sum of el is >= n.

function minSubarrayLength(nums, target) {
  let i = 0;
  let j = 1;
  let currSum = nums[i];
  let length = null;
  while (j <= nums.length && length !== 1) {
    if (currSum >= target) {
      length = Math.min(length, (j - i));
      currSum -= nums[i++];
    }
    else currSum += nums[j++];
  }
  return length;
}

function minSubArrayLen(nums, n) {
  let start = 0;
  let end = 0;
  let sum = 0;
  let minLen = 0;
  while (end <= nums.length && start <= end) {
    if (sum < n) sum += nums[end++];
    else sum -= nums[start++];
    if (sum >= n) {
      minLen = minLen === 0 ? (end-start) : Math.min(minLen, (end-start));
    }
  }
  return minLen;
}

function minSubArrayLen2(nums, minSum) {
    let length = 0;
    let currSum = 0;
    let i = 0;
    let j = 0;
    while(j < nums.length || currSum >= minSum && length !== 1) {
        if(currSum < minSum) currSum += nums[j++];
        else {
            length = length ? Math.min(length, (j-i)) : (j-i);
            currSum -= nums[i++];
        }
    }
    return length;
}

function minSubArrayLen3(arr, num) {
  let sum = arr[0], length = 0, i = 0, j = 1;
  while(j < arr.length || sum >= num && length !== 1) {
    if(sum < num ) sum += arr[j++];
    else {
      let currLength = j - i;
      length = length === 0 ? currLength : Math.min(currLength, length);
      sum -= arr[i++];
    }
  }
  return length;
}

function minSubArrayLen4(arr,num){
  let sum    = 0;
  let start  = 0;
  let end    = 0;
  let length = 0;
  while(end <= arr.length && length !== 1){
    if(length === 0 && sum < num) { // kad nema length end se povečava i dodaje arr[end]
      sum += arr[end++];
    }
    else if(sum >= num) { //kad ima length i sum >= num, oduzme se arr[start] i start se poveća
      length = end - start;
      sum -= arr[start++];
    }
    else { // inaće se i start i end povečaju i od sum se oduzme arr[start] i doda arr[end]
      sum = sum - arr[start++] + arr[end++];
    }
  }
  return length;
}

function minSubArrayLen5(arr,num){
  let sum    = 0;
  let start  = 0;
  let end    = 0;
  let length = 0;
  while(end <= arr.length && length !== 1){
    if(sum < num){
      sum += arr[end++];
      if(start !== 0) sum -= arr[start++];
    }
    else{
      length = end - start;
      sum -= arr[start++];
    }
  }
  return length;
}

function minSubArrayLen6(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;
  while (start < nums.length) {
    if (total < sum && end < nums.length) {
      total += nums[end++];
    }
    else if (total >= sum) { 
      minLen = Math.min(minLen, end-start);
      total -= nums[start++];
    } 
    else break; // current total less than required, but we reach the end, break or else we'll be in an infinite loop
  }
  return minLen === Infinity ? 0 : minLen;
}

// Fn takes str. Returns length of longest substring with unique chars.
function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) start = Math.max(start, seen[char]);
    longest = Math.max(longest, i - start + 1); // index - beginning of substring + 1 (to include current in count)
    seen[char] = i + 1; // store the index of the next char so as to not double count
  }
  return longest;
}




// ::::: RECURSION :::::

// Recursion is a process (func) that calls itself
// Iterative vs Recursive way of writing solutions
// Requires base case to avoid infinite loop
// Useful with more complex data structures and sometimes offers cleaner alternative to iteration
// How recursive functions work (3 cumulative conditions): 
//  - invoke same func,
//  - with different input,
//  - until base case is reached (base case: condition that stops recursion)

function isAnyNumOdd(nums) {
  if (nums.length === 0) return false;
  if (nums[0] % 2 === 0) return true;
  return isAnyNumOdd(nums.slice(1));
}

function factorial(n) {
  let f = n;
  while (--n >= 1) f *= n;
  return f;
}

function factorial2(n) {
  let f = n;
  for (let i = n-1; i > 0; i--) f *= i;
  return f;
}

function factorial3(n) {
  if (n === 1) return 1;
  return n *= factorial3(--n);
}

const factorial4 = n => n === 1 ? 1 : n *= factorial4(--n);


// Two design patterns: Helper Method Recursion & Pure Recursion

// Everything that can be done with one can be done with the other


// Helper Method Recursion:

// Helper Method Recursion means outer fn that is not recursive, calls inner fn that is recursive
// This way outerScope is not reset during recursion, as outer fn is not recursive
// Helper method is more easy to understand. If there is a var in recursive func, each time func is invoked that var 
// is reset to previous value. Helper method enables us to more easily enwrap that var inside a normal function but 
// outside of recursion func
// Pure Recursion (works well with .slice, .concat, Object.assign, spread operator and substring)

function outer() {
  let outerScope = {}; 
  const helperRecursive = input => {
    // break case
    // mutate outerScope
    // return innerRecursive(changedInput);
  }
  helperRecursive(outerScope);
  return outerScope;
}

function collectOddVals(arr) {
  let odds = [];
  function helper(input) {
    if (input.length === 0) return;
    if (input[0] % 2 !== 0) odds.push(input[0]);
    helper(input.slice(1));
  }
  helper(arr);
  return odds;
}


// Pure Recursion:

function collectOddVals2(arr) {
  const odds = [];
  if (arr.length === 0) return odds;
  if (arr[0] % 2 !== 0) odds.push(arr[0]);
  return odds.concat(collectOddVals(arr.slice(1)));
}

function countdown(num){
  if(num <= 0){
    console.log("All done!");
    //return; return not needed IF we use an else statement below
  } else {
    console.log(--num);
    countdown(num);
  }
}

// Recursion Problem Set

// Fn takes base and exponent (both nums). Return power of base to the exponent (e.g. 2,4 = 2*2*2*2; 2,0 = 1)
function power(base, exponent) {
  if (exponent === 0) return 1;
  return base *= power(base, --exponent);
}

// Fn takes num. Return that num multiplied with all lower nums. Factorial of 0 returns 1.
function factorial(num) {
  if (num <= 0) return 0;
  if (num === 1) return 1;
  return num * factorial(--num);
}

// Fn takes nums arr. Return multiplication of them all
function productOfArray(nums) {
  if (nums.length === 1) return nums[0];
  return nums[0] * productOfArray(nums.slice(1));
}

const productOfArray2 = nums => nums.reduce((acc, curr) => acc * curr);

// Fn takes num. Return sum that num with all nums lower than it, down to 0.
function recursiveRange(num) {
  if (num === 1) return 1;
  return num + recursiveRange(--num);
}

// Fn takes num. Return val of that nums indx in the fibonacy sequence (1,1,2,3,5,8,13,21...)
function fib(num) {
  const sequence = [1, 1];
  const indx = num - 1;
  function helperRecursion(arr, i) {
    if (arr[i]) return arr[i];
    const nextNum = arr[arr.length-1] + arr[arr.length-2];
    arr.push(nextNum);
    return helperRecursion(arr, i);
  }
  return helperRecursion(sequence, indx);
}

function fib2(indx, sequence = [1,1]) {
  if (sequence[indx-1]) return sequence[indx-1];
  const newNum = sequence[sequence.length-1] + sequence[sequence.length-2];
  const sqc = [...sequence, newNum];
  return fib2(indx, sqc);
}

function fib3(n){
  if (n <= 2) return 1;
  return fib3(n-1) + fib3(n-2);
}

// Fn takes str. Returns reversed str
function reverse(str) {
  if (str.length <= 1) return str;
  return str[str.length - 1] + reverse(str.slice(0, str.length - 1));
}

function reverse2(str){
  if(str.length === 0) return "";
  let l = str[str.length -1];
  return l += reverse2(str.slice(0, str.length-1));
}

function reverse4(str){
	if(str.length <= 1) return str;
	return reverse4(str.slice(1)) + str[0];
}

// Fn takes str. Return true if str reads the same forward and backwards
function isPalindrome(str) {
  if (str.length <= 1) return true;
  if (str[0] !== str[str.length-1]) return false;
  return isPalindrome(str.slice(1, str.length-1));
}

// Fn takes arr and clb. Retur true if clb returns true when any el from arr is passed to it
function someRecursive(arr, clb) {
  if (arr.length === 0) return false;
  if (clb(arr[0])) return true;
  return someRecursive(arr.slice(1), clb);
}

function someRecursive2(arr, callback) {
  if(arr.length === 0) return false;
  return callback(arr[0]) || someRecursive2(arr.slice(1), callback);
}

// Fn takes arr of arrs. Returns one arr with all vals from inner arrs
function flatten(arr) {
  let a = [];
  arr.forEach((el, i) => {
    if (Array.isArray(el)) a = a.concat(flatten(el));
    else a.push(el);
  });
  return a;
}

// Fn takes arr of str. Capitalize first letter of each str
function capitalizeFirst(strings) {
  let arr = [];
  if (strings.length === 0) return arr;
  const str = strings[0];
  arr.push(str[0].toUpperCase() + str.slice(1));
  return arr.concat(capitalizeFirst(strings.slice(1)));
}

function capitalizeFirst2(strings) {
  if(strings.length === 0) return [];
  let capitalizedStr = strings[0][0].toUpperCase() + strings[0].slice(1);
  return [capitalizedStr].concat( capitalizeFirst2(strings.slice(1)) );
}

function capitalizeFirst4(array) {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substr(1)];
  }
  const res = capitalizeFirst4(array.slice(0, -1));
  const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
  res.push(string);
  return res;
}

// Fn takes obj. Return sum of all even nums in obj (obj can contain nested obj)
function nestedEvenSum(obj) {
  let sum = 0;
  Object.values(obj).forEach(v => {
    if (typeof v === "number" && v % 2 === 0) sum += v;
    else if (typeof v === "object" && v !== null) sum += nestedEvenSum(v);
  });
  return sum;
}

// Fn takes arr of words. Return arr with each work capitalized
function capitalizeWords(words) {
  if (words.length === 0) return [];
  return [words[0].toUpperCase()].concat(capitalizeWords(words.slice(1)));
}

function capitalizeWords2(words) {
  if (words.length === 0) return [];
  const w = words[0].toUpperCase();
  const otherWords = capitalizeWords2(words.slice(1));
  return [w, ...otherWords];
}

function capitalizeWords3(words) {
  if (words.length === 1) return [ words[0].toUpperCase() ];
  let res = capitalizeWords3(words.slice(0, -1));
  res.push(words.slice(words.length-1)[0].toUpperCase());
  return res;
}

// Fn takes obj. Find all vals that are nums and convert them to str. Original obj should not be mutated!
function stringifyNumbers(obj) {
  const o = {};
  for (const key in obj) {
    const v = obj[key];
    if (typeof v === "number") o[key] = v.toString();
    else if (typeof v === "object" && v !== null && !Array.isArray(v)) o[key] = stringifyNumbers(v);
    else o[key] = v;
  }
  return o;
}

// Fn takes obj. Return arr of all vals in that obj that are str. Object can have nested obj
function collectStrings(obj) {
  let strings = [];
  Object.values(obj).forEach(v => {
    if (typeof v === "string") strings.push(v);
    else if (typeof v === "object" && v !== null) {
      strings = strings.concat(collectStrings(v));     
    }
  });
  return strings;
}

function collectStrings(obj) {
  var stringsArr = [];
  function gatherStrings(o) {
    for (var key in o) {
      if(typeof o[key] === 'string') stringsArr.push(o[key]);
      else if (typeof o[key] === 'object') return gatherStrings(o[key]);
    }
  }
  gatherStrings(obj);
  return stringsArr;
}




// ::::: SEARCHING ALGORITHIMS :::::

// Linear Search

// Check each item, one at a time 
// indexOf, includes, findIndex, every, some
// Good for unsorted data
// O(n)

function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}


// Binary Search (divide and conquer)

// Much faster
// But ONLY WORKS on sorted arrays
// Instead of checking one item at a time, we can eliminate half the remaining el at once
// Divide & conquer: split data in 2, decide which piece to continue with, repeat
// O(log n)

function binarySearch(nums, n) {
  let start = 0,
      end = nums.length - 1,
      middle,
      el;
  while(start <= end) {
    middle = Math.floor((end + start) / 2);
    el = nums[middle];
    if (el < n) start = middle + 1;
    else if (el > n) end = middle - 1;
    else return middle;
  }
  return - 1;
}


// Search for substring in a string

// Simple solution:

// Fn takes 2 str. Return num of times str1 is part of str2 as substring
function numOfSubstrings(str, subStr) {
  if (subStr.length > str.length) return 0;
  if (subStr === str) return 1;
  let i = 0;
  let j = 0;
  let count = 0;
  while (i < str.length && j < str.length) {
    if (str[i] === subStr[j]) {
      if (j === subStr.length - 1) {
        j = 0;
        count++;
      }
      else j++;
    }
    i++;
  }
  return count;
}

function numOfSubstrings2(str, subStr) {
  if (subStr.length > str.length) return 0;
  if (subStr === str) return 1;
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === subStr[0]) {
      let indx = i; // alternative is i+j
      for (let j = 0; j < subStr.length; j++) {
        if (str[indx] === subStr[j]) {
          j === subStr.length - 1 ? count++ : indx++;
        }
        else break;
      }
    }
  }
  return count;
}

function numOfSubstrings3(long, short) {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; i < short.length; j++) {
      if (long[i+j] !== short[j]) break;
      if (j === short.length - 1) count++;
    }
  }
  return count;
}

// Better solution (KNP):




// ::::: SORTING ALGORITHMS :::::

// Rearanging items in any collection (e.g. arr or str)
// Numerous approaches (some are great for e.g. almost sorted data, and terrible for completely unsorted, etc.)

// JS has a built in sort method
// Mutates arr
["a", "c", "b"].sort(); // ["a", "b", "c"]
[1,2,100,200].sort(); // [1, 100, 2, 200]
[1,2,100,200].sort((a, b) => a- b); // [1, 2, 100, 200]
const sortByLength = strings => strings.sort((a, b) => a.length - b.length); // stings sorted shortest to longest


// ELEMENTARY SORTING ALGORITHMS

// Bubble Sort

// Largest vals are "bubbled" to the end
// O(n2)
// Very good with almost sorted data (if we add the optimization below)

function bubbleSort(nums) {
  let i = 0;
  let j = 1;
  let lastVal = nums.length - 1;
  while (i < lastVal) {
    if (nums[i] > nums[j]) [ nums[i], nums[j] ] = [ nums[j], nums[i] ];
    i++;
    j++;
    if (j > lastVal) {
      lastVal--;
      i = 0;
      j = 1;
    }
  }
  return nums;
}

function bubbleSort2(nums) {
  for (let i = nums.length - 1; i > 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      if (nums[j] > nums[i]) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
    }
  }
  return nums;
}

// Important optimization:
// If no swaps are made, it means arr is already sorted, there's no need to further iterate
function bubbleSort2(nums) {
  let noSwaps = true;
  for (let i = nums.length - 1; i > 0; i--) {
    noSwaps = true;
    for (let j = i - 1; j >= 0; j--) {
      if (nums[j] > nums[i]) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return nums;
}

const bubbleSortAlg = (nums) => {
  for (let i = nums.length - 1; i > 0; i--) {
    let areSorted = true;
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[j+1]) {
        [ nums[j], nums[j+1] ] = [ nums[j+1], nums[j] ];
        areSorted = false;
      }
    }
    if (areSorted) break;
  }
  return nums;
}


// Selection Sort

// Similar to bubble sort
// Loop through, memorize smallest val, swap it with first val when loop is over, then we loop from next val
// Only great if, for some reason, you want to minimise number of swaps you're making (one per iteration)
// O(n2)

function selectionSort(nums) {
  let min = Infinity;
  let indx;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i; j < nums.length; j++) {
      if (nums[j] < min) {
        min = nums[j];
        indx = j;
      }
    }
    [nums[i], nums[indx]] = [nums[indx], nums[i]];
    min = Infinity;
  }
  return nums;
}

function selectionSort2(nums) {
  for (let i = 0; i < nums.length; i++) {
    let min = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[min]) min = j;
    }
    if (min !== i) {
      [nums[i], nums[min]] = [nums[min], nums[i]];
    }
  }
  return nums;
}

const selectionSortAlg = (nums) => {
  for (let i = 0; i < nums.length - 1; i++) {
    let smallestVal = i;
    for (let j = i + 1; j <= nums.length -1; j++) {
      if (nums[smallestVal] > nums[j]) {
        smallestVal = j;
      }
    }
    if (i !== smallestVal) {
      [ nums[i], nums[smallestVal] ] = [ nums[smallestVal], nums[i] ];
    }
  }
  return nums;
}

// Insertion Sort

// Based on idea of first sorting part of arr (starts with first el), then looping through rest and placing it
// within the sorted part

function insertionSort(nums) {
  let i = 1;
  while (i < nums.length) {
    for (let j = 0; j < i; j++) {
      if (nums[i] < nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
    }
    i++;
  }
  return nums;
}

function insertionSort2(nums) {
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[i]) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
    }
  }
  return nums;
}

function insertionSort3(nums) {
  for (let i = 1; i < nums.length; i++) {
    for (let j = i-1; j >= 0; j--) {
      if (nums[j] > nums[i]) {
        [ nums[j+1], nums[j] ] = [ nums[j], nums[j+1] ];
      }
      else break;
    }
  }
  return nums;
}

function insertionSort4(nums) {
  for (let i = 1; i < nums.length; i++) {
    const val = nums[i];
    for (var j = i - 1; j >= 0 && nums[j] > val; j--) {
      nums[j + 1] = nums[j];
    }
    nums[j + 1] = val;
  }
  return nums;
}


// Comparing Bubble, Selection and Insertion Sort

// Time complexity: O(n2)
// Space complexity: O(1)
// Often called quadratic search algorithms
// There are better search algorithms, but these often perform better on very small data sets
// Bubble and Insertion Sort are great for data that is already almost sorted
// Insertion sort is great when data is continuously added, one el at a time

const myBubbleSort = nums => {
  let noSwaps = false;
  for(let i = nums.length; i > 0 && !noSwaps; i--) {
    noSwaps = true;
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[j + 1]) {
        [ nums[j], nums[j + 1] ] = [ nums[j + 1], nums[j] ];
        noSwaps = false;
      }
    }
  }
  return nums;
}

// console.log(myBubbleSort([1,2,3,4,2,1]));
// console.log(myBubbleSort([1,2,3,4,5,7]));
// console.log(myBubbleSort([7, 0, 1,223,3,5,5,7]));

const mySelectionSort = nums => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        [ nums[i], nums[j] ] = [ nums[j], nums[i] ];
      }
    }
  }
  return nums;
}

const mySelectionSort2 = nums => {
  for (let i = 0; i < nums.length; i++) {
    let min = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[min] > nums[j]) min = j;
    }
    if (min !== i) {
      [ nums[i], nums[min] ] = [ nums[min], nums[i] ];
    }
  }
  return nums;
}


// console.log(mySelectionSort2([1,2,3,4,2,1]));
// console.log(mySelectionSort2([1,2,3,4,5,7]));
// console.log(mySelectionSort2([7, 0, 1,223,3,5,5,7]));

const myInsertionSort = nums => {
  for (let i = 1; i < nums.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (nums[j] > nums[j + 1]) {
        [ nums[j], nums[j + 1] ] = [ nums[j + 1], nums[j] ];
      }
      else break;
    }
  }
  return nums;
}

// console.log(myInsertionSort([1,2,3,4,2,1]));
// console.log(myInsertionSort([1,2,3,4,5,7]));
// console.log(myInsertionSort([7, 0, 1,223,3,5,5,7]));




// INTERMEDIATE SORTING ALGORITHMS

// Much faster, more complex
// O(n log n)
// However, worst space complexity (O(n)) compared to simple sorting alg. (O(1))

// Merge Sort

// 3 steps: split, sort, merge
// Based on idea that arrays of 0 or 1 el are already sorted
// Split arr into smaller 0 or 1 el arrays (divide & counquer principle), then merge into one arr
// Usually with recursion
// Time complexity: O(n log n) //n refers to num of comparisons the helper fn does & log n refers 
// to number of splits (in recursion)
// Space complexity: O(n)

// Uses helper function that merges 2 sorted arr
// Helper function has time/space complex: O(n + m) (n is arr1, m is arr2)

function merge( arr1, arr2 ) {
  let i = 0,
      j = 0,
      sorted = [];
  while ( i < arr1.length || j < arr2.length ) {
    const el = ( !arr1[i] || arr1[i] > arr2[j] ) ? arr2[j++] : arr1[i++];
    sorted.push( el );
  }
  return sorted;
}

function mergeSort( nums ) {
  if ( nums.length < 2 ) return nums;
  const middle = Math.floor( nums.length / 2 );
  const arr1 = mergeSort( nums.slice( 0, middle ) );
  const arr2 = mergeSort( nums.slice( middle ) );
  return merge( arr1, arr2 );
}


// Quick Sort

// Also based on idea that arrays of 0 or 1 el are already sorted
// Usually with recursion
// Steps: select 1 el as "pivot", place all smaller el on left, larger on right (without sorting them),
// then we know that 1 el (pivot) is sorted, and we repeat the process by calling the same func to the left
// and right of that pivot. Each time the same arr is passes as arg, so it is mutated.
// Its best if the first pivot is the middle el, instead of 0
// Time: O(n log n)
// Space: O(log n)

// Also uses a helper function (pivot or partition)
// Helper fn mutates the arr and returns indx of pivot el
function pivot( nums, start = 0, end = nums.length - 1 ) {
  const val = nums[start];
  let swapIndx = start;
  for ( let i = start + 1; i <= end; i++ ) {
    if ( val > nums[i] ) {
      swapIndx++;
      [ nums[i], nums[swapIndx] ] = [ nums[swapIndx], nums[i] ];
    }
  }
  [ nums[start], nums[swapIndx] ] = [ nums[swapIndx], nums[start] ];
  return swapIndx;
}

function quickSort( nums, left = 0, right = nums.length - 1 ) {
  if ( left < right ) {
    let pivotIndx = pivot( nums, left, right );
    quickSort( nums, left, pivotIndx - 1 ); // left
    quickSort( nums, pivotIndx + 1, right ); // right
  }
  return nums;
}


// Comparison sorts

// All of the previous sorting algorithms (from bubble sort to quick sort) are based on comparing 2 items at time
// Best possible time complexity is O(n log n)
// Other types of sorting algorithms take advantage of typeof data, e.g. integer sorts (only used for sorting nums)
// Radix sort is not a Comparison sort algorithm


// Radix sort

// Special sorting alg, that doesn't make comparisons
// Works only with nums
// Exploits the fact that info about the size of num is encoded in num of digits (4 digit num is always
// larger than 2 digit num)
// Time Complexity: O(n m) // n is num of items we are sorting, m is num of max digits in any of those nums 
// Spice Complexity: O(n + m)

// Few helper fn are needed:

// Helper fn shows nums num of digits
const numOfDigits = num => num.toString().length;

// Helper fn returns max num of digits of all nums
const maxNumOfDigits = nums => nums.reduce( (acc, curr) => Math.max(acc, numOfDigits(curr)), 0 );

// Helper fn gets the digit at certain position
const getDigitAtIndx = ( num, i ) => {
  const n = num.toString();
  const len = n.length - 1;
  return i > len ? 0 : parseInt(n[len - i]);
}

function radixSort( nums ) {
  const maxDigits = maxNumOfDigits( nums );
  for ( let i = 0; i < maxDigits; i++ ) {
    const boxes = Array.from( { length: 9 }, () => [] );
    for ( let j = 0; j < nums.length; j++ ) {
      const n = nums[j];
      const digit = getDigitAtIndx(n, i);
      boxes[digit].push( n );
    }
    nums = [].concat(...boxes);
  }
  return nums;
}


// Improved helpers

const getDigit = ( num, i ) => Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;

function digitCount( num ) {
  if ( num === 0 ) return 1;
  return Math.floor( Math.log10( Math.abs( num ) ) ) + 1;
}

const myMergeHelper = (sorted1, sorted2) => {
  let i = 0, 
      j = 0;
  const sorted = [];
  while (i < sorted1.length || j < sorted2.length) {
    const el = (!sorted1[i] || sorted1[i] >= sorted2[j]) ? sorted2[j++] : sorted1[i++];
    sorted.push(el);
  }
  return sorted;
}

// console.log(myMergeHelper([1,2,5,333], [0,2,3,4,4,6,7,4444]));

const myMergeSort = nums => {
  if (nums.length <= 1) return nums;
  const middle = Math.floor(nums.length / 2);
  const left = myMergeSort(nums.slice(0, middle));
  const right = myMergeSort(nums.slice(middle));
  return myMergeHelper(left, right); 
}

// console.log(myMergeSort([1,4,2,0]));

const myQuickSort = (nums) => {

}




// ::::: DATA STRUCTURES :::::

// Data structures: collections of vals, relationsips between them, operations (fn) that can be applied
// E.g. array holds vals, relationship between those vals is indexed, and we get functionalites (e.g. push, pop)
// Hundreds of them
// Some data structures excell in special cases (specialized). Some are generally applicable (arr, obj)


// Singly Linked List

// Data structure, stores any type of data, ordered

// In arr each el is maped with an indx, unlike that here each el is only linked to the next el

// Each el is called a node. Node stores the val (e.g. str), and references next node

// List of nodes pointing to the next node
// No indexes
// Each node is connected only to next node
// Data structure keeps track of head, tail and length

// To acces 3. item, you start from the head, move to the next item, and then item after that is 3.
// Array is like a skyscraper with an elevator. If you want to get to the fifth floor you enter the elevator
// and press 5; Singly Linked List is like a scyscraper with stairs. To get to fifth floor you take the stairs 
// to the 1st floor, then 2nd floor, then 3rd floor, etc.

// Insertion to the beginning is faster than in arr
// Random acces is not allowed
// Poping the last item off is harder, because we need to also update the item before thats next property to null,
// to do so we need to loop from beginning

// Excells at insertion and removal

class Node {
  constructor(val) {
    this.val = val;
    this.next = null; // new node will be instanciated inside of this node, etc.
  }
}

class SinglyLinkedList { // we will instanciate it just like const arr = new Array()
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) { // O(1)
    const node = new Node(val);
    if (!this.head) this.head = node;
    else this.tail.next = node; 
    this.tail = node;
    this.length++;
    return this;
  }
  pop() { // O(n)
    let beforeLast;
    let last;
    if (this.length === 0) return;
    else if (this.length === 1) {
      last = this.head;
      this.head = null;
      this.tail = null;
    } 
    else {
      beforeLast = { ...this.head };
      last = beforeLast.next;
      while (last.next) {
        beforeLast = last;
        last = beforeLast.next;
      }
      this.tail = beforeLast;
      this.tail.next = null;
    }
    this.length--;
    return last;
  }
  unshift(val) { // 0(1)
    const node = new Node(val);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    }
    else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }
  shift() { // O(1)
    let removed;
    if ( this.length === 0 ) return;
    if ( this.length === 1 ) {
      this.head = null;
      this.tail = null;
    }
    else removed = this.head;
    this.head = this.head.next;
    this.length--;
    return removed;
  }
  get(indx) { // O(n)
    let l = this.length;
    if (l === 0 || indx >= l || indx < 0) return;
    let val = this.head;
    for ( let i = 0; i < indx; i++ ) {
      if (!val.next) return;
      val = val.next;
    }
    return val;
  }
  set(indx, val) { // O(n)
    const node = this.get(indx);
    if (node) {
      node.val = val;
      return node;
    }
    return "No node at this index";
  }
  insert(indx, val) { // O(n)
    if (indx < 0 || indx > this.length) return "Unable to insert to requested index";
    if (indx === this.length) return this.push(val);
    if (indx === 0) return this.unshift(val);
    const node = new Node(val);
    const prev = this.get(indx - 1);
    const temp = prev.next;
    prev.next = node;
    node.next = temp;
    return node;
  }
  remove(indx) { // O(n)
    if (indx < 0 || indx > this.length) return "No node at requested index";
    if (indx === 0) return this.shift();
    if (indx === this.length - 1) return this.pop();
    const oneBefore = this.get(indx - 1);
    const removed = oneBefore.next;
    oneBefore.next = removed.next;
    this.length--;
    return removed;
  }
  reverse() {
    let prev = null;
    let curr = this.head;
    let next;
    this.head = this.tail;
    this.tail = curr;
    for (let i = 0; i < this.length; i++) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
  }
  print() { // not specific to singly linked list, added to easily visualise changes
    const arr = [];
    let node = this.head;
    while(node) {
      arr.push(node);
      node = node.next;
    }
    return arr;
  }
}

const singlyLinkedList = new SinglyLinkedList();
// To access 3rd el: singlyLinkedList.head.next.next // returns third node


// Doubly linked list

// Identical to Sinlgy Linked List, except it's two directional (each node has a pointer to 
// previous and next node)
// Disadvantage is it takes up more memory
// Advantage is more flexibility
// Easier to remove last el (we don't have to loop from first el to the one before last)
// Easier to reverse
// Searching is optimized (we compare if searched indx is closer to start or end, and we loop from there)

class Node2 {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) { // O(1)
    const node = new Node2(val);
    if (!this.length) {
      this.head = node;
    }
    else {
      this.tail.next = node;
      node.prev = this.tail;
    }
    this.tail = node;
    this.length++;
    return this;
  }
  pop() { // O(1)
    if (!this.length) return;
    let removed = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    else {
      this.tail = removed.prev;
      this.tail.next = null;
      removed.prev = null;
    }
    this.length--;
    return removed;
  }
  shift() { // O(1)
    if (!this.head) return;
    let removed = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    else {
      this.head = removed.next;
      this.head.prev = null;
      removed.next = null;
    }
    this.length--;
    return removed;
  }
  unshift(val) {
    const node = new Node2(val);
    if (this.length === 0) {
      this.head = node;
    }
    else {
      this.head.prev = node;
      node.next = this.head;
    }
    this.head = node;
    this.length++;
    return this;
  }
  get(indx) { // O(n)
    if (indx < 0 || indx >= this.length) return;
    const fromStart = indx <= this.length / 2;
    const key = fromStart ? "next" : "prev";
    const increment = fromStart ? 1 : -1;
    let count = fromStart ? 0 : this.length - 1;
    let node = fromStart ? this.head : this.tail;
    while (count !== indx) {
      node = node[key];
      count += increment;
    }
    return node;
  }
  set(indx, val) {
    const node = this.get(indx);
    if (node) node.val = val;
    return node;
  }
  insert(indx, val) {
    if (indx < 0 || indx > this.length) return "Invalid index";
    if (indx === 0) return this.unshift(val);
    if (indx === this.length) return this.push(val);
    
    const node = new Node2(val);
    const prevNode = this.get(indx -1);
    const nextNode = prevNode.next;
    
    prevNode.next = node, node.prev = prevNode;
    node.next = nextNode, nextNode.prev = node;

    this.length++;
    return this;
  }
  remove(indx) { // O(1)
    if (indx < 0 || indx >= this.length) return "Invalid indx";
    if (indx === 0) return this.shift();
    if (indx === this.length - 1) return this.pop();

    const removed = this.get(indx);
    const prev = removed.prev;
    const next = removed.next;

    prev.next = next, next.prev = prev;
    removed.next = removed.prev = null;

    this.length--;
    return removed;
  }
  print() {
    const arr = [];
    let node = this.head;
    while (node) {
      arr.push(node);
      node = node.next;
    }
    return arr;
  }
}

const doublyLinkedList = new DoublyLinkedList();


// Stacks

// Abstract data structure, obides by LIFO principle (last in, first out)
// Used by the call stack
// There are numerous ways to implement. A stack is just a concept,
// e.g. using array with only push and pop creates a stack,
// also using arr with only unshift and shift creates a stack
// In stack push and pop must be O(1)
// Searching and access are O(n) (so arr is much better for access with O(1))
// Searching and accesing is not a priority with queues and stacks, they excell at insertion/removal
// We will implement it with singly linked list; with push/pop we add/remove from the start of the list

class Node3 {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) { // O(1)
    const node = new Node3(val);
    if (!this.size) this.last = node;
    else node.next = this.first;
    this.first = node;
    return ++this.size;
  }
  pop() { // O(1)
    if (this.size === 0) return;
    const removed = this.first;
    this.first = this.size === 1 ? this.last = null : removed.next;
    this.size--;
    return removed.val;
  }
  print() {
    const arr = [];
    let node = this.first;
    while (node) {
      arr.push(node.val);
      node = node.next;
    }
    return arr;
  }
}

const stack = new Stack();


// Queue

// Abstract data structure, obides by FIFO principle (first in, first out)
// Think of people waiting in line (first person in line will be first person out of the line)
// We implement it with arr if we a) only use unshift and pop, or b) only use push and shift
// However, queue needs O(1) insertion/removal
// We can use a singly linked list, add to end and remove from beginning
// In queue add / remove are called enqueue / dequeue

class Node4 {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) { // O(1)
    const node = new Node4(val);
    if (this.size === 0) this.first = node;
    else this.last.next = node;
    this.last = node;
    this.size++;
    return this.print();
  }
  dequeue() { // O(1)
    if (!this.first) return;
    const removed = this.first;
    this.first = removed.next;
    if (this.size === 1) this.last = null;
    this.size--;
    removed.next = null;
    return removed;
  }
  print() {
    const arr = [];
    let node = this.first;
    while (node) {
      arr.push(node.val);
      node = node.next;
    }
    return arr;
  }
}

const queue = new Queue();


// Trees

// Data structures that consist of nodes in parent/child relationship
// Branches (branching structure)
// HTML DOM, JSON, AI, Network Routing, Computer File System are use examples
// Nonlinear data structure - numerous possible paths (lists are linear - only one path)
// In Trees node can only reference node(s) below it (node can only point to a child), 
// not nodes on the same paralel level (siblings), and not its parent
// Tree must have 1 root node (top node in a tree)
// All other nodes are pointing away from it (parent/child relationship)
// Therminology:
//    Root: Top node in the tree
//    Child: Node directyl connected to another node when moving from the root
//    Parent: Opposite of a child
//    Siblings: Nodes with same parent
//    Leaf: Node without children
//    Edge: Connection between parent and child nodes
// There are many types of Trees. They follow the basic rules of trees, with some specific rules


// Binary Search Tree

// Special type of Binary Tree, which is special type of Treee
// Excell at searching
// Special Rules:
//    1) Each node can have max 2 children (otherwise, in Treees, each node can have unlimited num of children), 
//    2) Used to store data that can be compared (sortable)
//    3) Every node to the left of the parent node is less than the parent node, every child to the
//       right of the parent node is always more than the parent node
// Usually duplicates are excluded, or each node has a count
// Insertion and Search are O(log n) // divide and conquer principle 
// Exceptionally, O(n) if the tree looks like a singly linked list, e.g. root is 0 and we add 1,2,3,4,5

class Node5 {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val, node = this.root) { // recursive
    if (!node) {
      this.root = new Node5(val);
    }
    else if (val > node.val && node.right) {
      this.insert(val, node.right);
    }
    else if (val > node.val) {
      node.right = new Node5(val);
    }
    else if (val < node.val && node.left) {
      this.insert(val, node.left);
    } 
    else {
      node.left = new Node5(val);
    }
    return this;
  }
  insert2(val) { // iterative
    const node = new Node5(val);
    let curr = this.root;
    let dirrection;
    if (!this.root) this.root = node;
    else {
      while (true) {
        if (val === curr.val) break;
        dirrection = val < curr.val ? "left" : "right";
        if (!curr[dirrection]) {
          curr[dirrection] = node;
          return this;
        }
        curr = curr[dirrection];
      }
    }
    return this;
  }
  find(val, node = this.root) { // recursive
    if (!node) return false;
    if (val === node.val) return true;
    const next = val < node.val ? node.left : node.right;
    return this.find(val, next);
  }
  contains(val) { // iterative
    let curr = this.root;
    while (curr) {
      if (val === curr.val) return true;
      curr = val < curr.val ? curr.left : curr.right;
    }
    return false;
  }
  BFS() {
    const data = [];
    const queue = new Queue();
    if (this.root) queue.enqueue(this.root);
    while (queue.size) {
      const {val: n } = queue.dequeue();
      data.push(n.val);
      if (n.left) queue.enqueue(n.left);
      if (n.right) queue.enqueue(n.right);
    }
    return data;
  }
  DFSPreOrder() {
    const data = [];
    const traverse = node => {
      data.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
  DFSPostOrder() {
    const data = [];
    const traverse = node => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.val);
    }
    traverse(this.root);
    return data;
  }
  DFSInOrder() {
    const data = [];
    const traverse = node => {
      if (node.left) traverse(node.left);
      data.push(node.val);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
}

const binarySearchTree = new BinarySearchTree();


// Tree Traversal

// In a Tree data structure, how do we visit every node once
// Applies to Trees in general (not only binary search trees)
// Numerous ways of doint it
// 2 main approaches:
//  - Breadth-first Search (BFS; horizontal)
//  - Depth-first Search (DFS; vertical)


// Breadth-first Search (BFS)

// We use a queue
class Node6 {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class Queue2 {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    const n = new Node6(val);
    if (this.size === 0) this.first = n;
    else this.last.next = n;
    this.last = n;
    this.size++;
    return this;
  }
  dequeue() {
    if (this.size === 0) return;
    const removed = this.first;
    this.first = removed.next;
    if (this.size === 1) this.last = null;
    removed.next = null;
    this.size--;
    return removed;
  }
}
const tree = {
  root: {
    val: 15,
    left: {
      val: 5,
      left: null,
      right: null
    },
    right: {
      val: 7,
      left:null,
      right: {
        val: 55,
        left: null,
        right: null
      }
    }
  }
}
function breadthFirstSearch(tree) {
  const queue = new Queue2();
  queue.enqueue(tree.root);
  const vals = [];
  while (queue.size) {
    const { val: n } = queue.dequeue();
    vals.push(n.val);
    if (n.left) queue.enqueue(n.left);
    if (n.right) queue.enqueue(n.right);
    // if it was a ternary tree, we would check n.middle
    // we could also loop throught n.children if it's a normal tree
  }
  return vals;
}


// Depth-first Search

// PreOrder
function depthFirstPreOrderSearch(tree) {
  const vals = [];
  const helperRecursive = node => {
    vals.push(node.val);
    if (node.left) helperRecursive(node.left);
    if (node.right) helperRecursive(node.right);
  }
  helperRecursive(tree.root);
  return vals;
}

// PostOrder
function depthFirstPostOrderSearch(tree) {
  const vals = [];
  const helperRecursive = node => { // identical as in PreOrder, the order is just different
    if (node.left) helperRecursive(node.left);
    if (node.right) helperRecursive(node.right);
    vals.push(node.val);
  }
  helperRecursive(tree.root);
  return vals;
}

// InOrder
function depthFirstInOrderSearch(tree) {
  const vals = [];
  const helperRecursive = node => {
    if (node.left) helperRecursive(node.left);
    vals.push(node.val);
    if (node.right) helperRecursive(node.right);
  }
  helperRecursive(tree.root);
  return vals;
}


// BFS vs DFS
//    - Time complexity is identical
//    - BFS requires a queue, so if the tree is very wide it will negativelly impact space complexity

// DFS -> InOrder vs PostOrder vs PreOrder
//    - The're all very similar
//    - InOrder returns a list that is sorted when used on a Binary Search Tree


// Binary Heaps

// Type of Trees
// Commonly used to implement a Priority Queue!
// Insertion & removal: O(log n)
// Search: O(n)
// If you want a data structure optimized for search, use Binary Search Tree

// Has many subtypes, e.g. Binary Heaps
// Very similar to Binary Search Tree
// Each node can have max 2 children (binary)
// Every left and right is filled, before moving down (to their lefts and rights)
// Left child is always filled first
// Two of them are:
//  - MaxBinaryHeap: parent node is larger than its children
//  - MinBinaryHeap: children nodes are larger the parent

// We can represent it with an array
// For any indx in arr, it's children are found like this:
//  -> (indx*2)+1 & indx*2+2, or
//  -> currIndx+nextIndx (left child) & currIndx+nextIndx+1 (right child)
// For any indx in arr, it's parent is found like this:
//  -> Math.floor(indx-1)/2

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(val) { // add to end & bubble up
    if (!val) throw new Error("insert requires one argument");
    this.values.push(val);
    this.bubbleUp();
    console.log(this.values);
  }
  bubbleUp() { // switch last item with parent, while parent > lastItem
    let indx = this.values.length - 1;
    let parentIndx = Math.floor( (indx - 1) / 2 );
    while (parentIndx >= 0) {
      if (this.values[parentIndx] < this.values[indx]) {
        [ this.values[parentIndx], this.values[indx] ] = [ this.values[indx], this.values[parentIndx] ];
        indx = parentIndx;
        parentIndx = Math.floor( (parentIndx - 1) / 2 );
      }
      else break;
    }
  }
  extractMax() { // removing the max value (in minBinaryHeap removing the min value)
    let max = this.values[0];
    let end = this.values.pop();
    if (this.values.length) {
      this.values[0] = end;
      this.sinkDown();
    }
    console.log(this.values);
    return max;
  }
  sinkDown() {
    let indx = 0;
    while(true) {
      let leftChildIndx = indx * 2 + 1,
          rightChildIndx = leftChildIndx + 1,
          largerChildIndx;
      if (leftChildIndx >= this.values.length) break;
      else if (rightChildIndx >= this.values.length) largerChildIndx = leftChildIndx;
      else largerChildIndx = this.values[leftChildIndx] > this.values[rightChildIndx] ? leftChildIndx : rightChildIndx; 
      if (this.values[indx] < this.values[largerChildIndx]) {
        [ this.values[indx], this.values[largerChildIndx] ] = [ this.values[largerChildIndx], this.values[indx] ];
        indx = largerChildIndx;
      }
      else break;
    }
  }
}

// const MBH = new MaxBinaryHeap();


// Pririty Queue

// Data structure where each element has a priority
// El with higher priority are served before el with lower priority
// Useful when you're not inserting things in order, but they need to be served in some order
// Often implemented with binary heaps, but they are a separate concept and can be implemented in other ways
// Insertion & removal: O(log n)
// Search: O(n)
// Usually the lower priority value is served first
// we will use a Min Binary Heap !

class Node7 {
  constructor(value, priority) {
    this.val = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    const node = new Node7(val, priority);
    this.values.push(node);
    this.bubbleUp();
    console.log(this.values);
  }

  dequeue() {
    let min = this.values[0],
        end = this.values.pop();
    if (this.values.length) {
      this.values[0] = end;
      this.bubbleDown();
    }
    console.log(this.values);
    return min;
  }

  bubbleUp() {
    let childIndx = this.values.length - 1,
        parentIndx = this.findParentIndx(childIndx);
    while (parentIndx >= 0) {
      if (this.values[parentIndx].priority > this.values[childIndx].priority) {
        [ [this.values[parentIndx], this.values[childIndx]] ] = [ [this.values[childIndx], this.values[parentIndx]] ];
        childIndx = parentIndx;
        parentIndx = this.findParentIndx(childIndx);
      }
      else break;
    }
  }

  bubbleDown() {
    let parentIndx = 0;
    let childIndx = this.findSmallerChildIndx(0);
    while (childIndx && this.values[parentIndx].priority > this.values[childIndx].priority) {
      [ this.values[childIndx], this.values[parentIndx] ] = [ this.values[parentIndx], this.values[childIndx]];
      parentIndx = childIndx;
      childIndx = this.findSmallerChildIndx(parentIndx);
    }
  }

  findParentIndx(childIndx) {
    return Math.floor((childIndx - 1) / 2);
  }

  findChildrenIndex(indx) {
    const l = indx * 2 + 1;
    const r = l + 1;
    return [l, r];
  }

  findSmallerChildIndx(indx) {
    const [l, r] = this.findChildrenIndex(indx);
    if (!this.values[l]) return null;
    if (!this.values[r]) return l;
    return this.values[l].priority < this.values[r].priority ? l : r;
  }

}

// const ER = new PriorityQueue();


// Hash table (aka Hash map)

// Data structure used to store key-value pairs
// Used very frequently
// Built in to every programming language (JS: Map and Object, Java: Map, Python: Dictionary...)
// Insert, remove, access: O(1)
// Search for a value: O(n)
// Having a good helper hash fn is key - don't write your own, use one made by mathmatitians

// To implement it from scratch, we will use an array
// Helper hash function converts key (e.g. str) into valid arr indx; same input should always return same output

// This is a bad hash function, because it:
const badHash = (key, arrLength) => { // a) only saves strings
  let total = 0;
  for (let char of key) { // b) is O(n)
    let val = char.charCodeAt(0) - 96;
    total = (total + val) % arrLength; // c) indx is not random enough
  }
  return total;
}

// Good hash fn
const hash = (key, arrLength = 53) => { // always using a prime num (1,5,47...) drastically reduces collissions!
  let total = 0;
  const PRIME_NUM = 31; // hash functions almost always use prime nums, it reduces collissions
  for (let i = 0; i < Math.min(key.length, 100); i++) { // O(1)
    const char = key[i];
    const val = char.charCodeAt(0) - 96;
    total = (total * PRIME_NUM + val) % arrLength;
  }
  return total;
}

// console.log(hash("ab", 101))
// console.log(hash("ba", 101))


// Handling collissions

// Collissions are inevitable
// Many strategies for dealing with collissions, two are:
//  - Separate chaining 
//      -> we store date in anoter data structure (e.g. array, or linked list)
//      -> allows us to store multiple key-value pares at same indx
//      -> e.g. each indx is an arr, and we would push ["key", value] inside that indx
//  - Linear probing
//      -> when we see a collission, we search the array for the next available empty slot
//      -> this allows for only one key-value pair to be stored at any indx

class HashTable {

  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    const WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i];
      const value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, val) {
    // here we can insert key-val pairs with same key; not a problem, but usually it's limited to unique keys
    const indx = this._hash(key);
    if (!this.keyMap[indx]) this.keyMap[indx] = [];
    this.keyMap[indx].push([key, val]);
  }

  get(key) {
    const indx = this._hash(key);
    const slot = this.keyMap[indx];
    let val;
    if (slot) {
      const el = slot.find(el => el[0] === key);
      val = el[1];
    }
    return val;
  }

  keys() {
    const keys = [];
    this.keyMap.forEach(key => {
      if (key) key.forEach(el => keys.push(el[0]));
    });
    return keys;
  }

  values() {
    const values = [];
    this.keyMap.forEach(key => {
      if (key) {
        key.forEach(el => {
          const val = el[1];
          if (!values.includes(val)) values.push(val); // usually don't show duplicates (i.e. we show one of each val)
        })
      }
    });
    return values;
  }

}

// const ht = new HashTable();
// ht.set("cats", "goodbye!");
// ht.set("i love", "goodbye!");


// Graph

// Nodes + connections
// Tree is actually a type of graph. In a tree there is a) only one path from (any) node to another node, 
// and there is a starting point (root)
// In grpahs there are multiple possible paths from one node to another node, and no starting point (root)
// Used everywhere (e.g. social media, goodle maps)
// Terminology:
//  - vertex (fancy term for node)
//  - edge (connection between nodes)
// Types of graphs:
//  - undirected (edges are two way connections; e.g. fb friends)
//  - directed (edges are one way connections; e.g. instagram followers)
//  - weighted (value associated to edge)
//  - unweighted (edges do not have values associated to them)

// Two common ways of implementing:

//  1. Adjacency matrix
//      - Matrix is a 2D structure, usually implemented with nested arrays
//      - We use rows and colums with booleans, e.g.:

//        A      B      C
//    A false   true   true
//    B  true  false   false
//    C  true  false   false

//  2. Adjacency list
//    - we store edges in a list or an object

/*
  [
    [1,4], // vetex 0 is connected to vertex 1 and vertex 4
    [2] // vertex 1 is connected to vertex 2
  ]

  {
    A: ["B", "C"],
    B: ["A"],
    C: ["A"]
  }

*/


// Big O

/*
  ==================================================
    OPERATION  || ADJACENCY LIST || ADJACENCY MATRIX
  ==================================================
  Add vertex   ||  O(1)          ||  O(V^2)
  Add edge     ||  O(1)          ||  O(1)
  Remove vertex||  O(V + E)      ||  O(V^2)
  Remove edge  ||  O(E)          ||  O(1)
  Query        ||  O(V + E)      ||  O(1)
  Storage      ||  O(V + E)      ||  O(V^2)
  ==================================================
*/

// If you don't have a lot of edges, don't use matrix (bad space compexity)
// Adjacency List:
//  - takes up less space in sparse graphs
//  - faster iteration through all edges
//  - slow to lookup specific edge
// Adjacency Matrix:
//  - takes up more space in sparse graphs
//  - slower to iterate over all edges
//  - faster to lookup specific edge


// Adjacency List Implementation

class Graph {
  
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertexName) {
    if (this.adjacencyList[vertexName]) throw new Error("Vertex already exists");
    this.adjacencyList[vertexName] = []; // arr will store edges
  }

  addEdge(vertex1, vertex2) {
    this.checkVertexExistance(vertex1, vertex2);
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.checkVertexExistance(vertex1, vertex2);
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
  }

  removeVertex(vertex) {
    this.checkVertexExistance(vertex);
    this.adjacencyList[vertex].forEach(edge => this.removeEdge(vertex, edge));
    delete this.adjacencyList[vertex];
  }

  checkVertexExistance(...vertexes) {
    vertexes.forEach(v => {
      if (!this.adjacencyList[v]) throw new Error("Unable to add edge to an unexisting vertex");
    });
  }

  // Graph Traversal (visiting, checking, updating every vertex in a graph):

  // Depth First Search: explore as far as possible down one branch before "backtracking"
  DFS_recursive(vertex) {
    this.checkVertexExistance(vertex);
    const visited = {}, order = [];
    const helper = vrtx => {
      visited[vrtx] = true;
      order.push(vrtx);
      for (const edge of this.adjacencyList[vrtx]) {
        if (!visited[edge]) helper(edge);
      }
    }
    helper(vertex);
    return order;
  }

  DFS_iterative(vertex) {
    this.checkVertexExistance(vertex);
    const stack = [vertex];
    const order = [];
    const visited = {};
    while(stack.length) {
      const vrtx = stack.pop();
      if (!visited[vrtx]) {
        visited[vrtx] = true;
        order.push(vrtx);
        this.adjacencyList[vrtx].forEach(edge => {
          if (!visited[edge]) stack.push(edge);
        });
      }
    }
    return order;
  }

  BFS(vertex) {
    const queue = [vertex];
    const visited = { [vertex]: true };
    const order = [];
    while (queue.length) {
      const v = queue.shift();
      order.push(v);
      this.adjacencyList[v].forEach(edge => {
        if (!visited[edge]) {
          visited[edge] = true;
          queue.push(edge);
        }
      });
    }
    return order;
  }

}

/*
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");
console.log(graph.DFS_recursive("A"));
console.log(graph.DFS_iterative("A"));
console.log(graph.BFS_recursive("A"));
*/


// Dijkstra's Algorithm (read: dajkstras)

// aka. Shortest Path Algorithm
// Only works on a weighted graph
// One of the most famous and most-used algorithms around the World (always taught in CS)
// Finds shortest path between two vertecies
// Answers: "What's the shortest way from A to B?"
// 4 steps:
//    1. pick node with smallest known distance
//    2. look at its neighbours
//    3. For each neigbour calucalate distance from start node to that node (by summoning previous edges with current edge)
//    4. If new distance < previously stored distance (it starts with infinity), we replace it


// We need a priority queue

// This is a bad perfoming, it would be better to use a Binary Heap to create a Priority Queue
class PriorityQueue_naive { // O(n log n)
  constructor(){
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  };
  dequeue() {
    return this.values.shift();
  };
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  };
}

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1,vertex2, weight){
        this.adjacencyList[vertex1].push({ node:vertex2, weight });
        this.adjacencyList[vertex2].push({ node:vertex1, weight });
    }
    Dijkstra(start, finish){
        const nodes = new PriorityQueue_naive();
        const distances = {};
        const previous = {};
        let path = [] //to return at end
        let smallest;
        //build up initial state
        for(let vertex in this.adjacencyList){
            if(vertex === start){
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }
        // as long as there is something to visit
        while(nodes.values.length){
            smallest = nodes.dequeue().val;
            if(smallest === finish){
                //WE ARE DONE
                //BUILD UP PATH TO RETURN AT END
                while(previous[smallest]){
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            } 
            if(smallest || distances[smallest] !== Infinity){
                for(let neighbor in this.adjacencyList[smallest]){
                    //find neighboring node
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    //calculate new distance to neighboring node
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    if(candidate < distances[nextNeighbor]){
                        //updating new smallest distance to neighbor
                        distances[nextNeighbor] = candidate;
                        //updating previous - How we got to neighbor
                        previous[nextNeighbor] = smallest;
                        //enqueue in priority queue with new priority
                        nodes.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }
        return path.concat(smallest).reverse();     
    }
}

var graph = new WeightedGraph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);


graph.Dijkstra("A", "E");

// ["A", "C", "D", "F", "E"]



// Dynamic Programming

// Optimization method (not neccessarily connected with software engineering)
// Method for solving complex problem, by dividing it into simple subproblems, solving each of subproblems just
// once, and storing their solutions
// Most time uses recursion
// Most problems can not be solved with dynamic programming!
// We can use dynamic programming with problems with two cummulative traits:
//  - overlapping subproblems
//      -> problem can be broaken down to subproblems, and some of the subproblems are identical
//      -> e.g. fibonacy sequence
//  - optimal substructure
//      -> optimal solution for bigger problem can be constructed from optimal solutions for its subproblems
//      -> e.g. finding shortes path in a graph (e.g. from A to D)
// Fibonacy reqursive fn that finds val based on indx is O(2^n); dynamic programming can help
// One approach is to use memoization!


const fibWithoutMemo = n => { // O(2^n)
  if (n <= 2) return 1;
  return fibWithoutMemo(n - 1) + fibWithoutMemo(n - 2);
}

const fib_memo = (n, memo = []) => { // O(n)
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  const res = fib_memo(n - 1, memo) + fib_memo(n - 2, memo);
  memo[n] = res;
  return res;
}
// same alternative:
const fib_memo2 = (n, memo = [undefined, 1, 1]) => { // O(n)
  if (memo[n] !== undefined) return memo[n];
  const res = fib_memo2(n - 1, memo) + fib_memo(n - 2, memo);
  memo[n] = res;
  return res;
}


// Alternative approach (bottom-up, instead of top-down):

// Tabulation:
//  - usually uses iteration
//  - starts at bottom
//  - stores data in a table (e.g. array)
//  - better space complexity

const fib_tabluation = n => { // will not reach stack overflow, like recursive solution
  if (n <= 0) return null;
  if (n <= 2) return 1;
  const sequence = [0, 1, 1]; // tabulation table
  for (let i = 3; i <= n; i++) { // O(n)
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }
  return sequence[n];
}
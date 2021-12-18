/**
 * 
 * @param {*} nums 
 * @param {*} target 
 * @returns 
 */

/**
    Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

    You may assume that each input would have exactly one solution, and you may not use the same element twice.

    You can return the answer in any order.

    # Example 1:
        Input: nums = [2,7,11,15], target = 9
        Output: [0,1]
        Output: Because nums[0] + nums[1] == 9, we return [0, 1].
    # Example 2:
        Input: nums = [3,2,4], target = 6
        Output: [1,2]
    # Example 3:
        Input: nums = [3,3], target = 6
        Output: [0,1]

    Constraints:
        - 2 <= nums.length <= 104
        - 10^9 <= nums[i] <= 10^9
        - 10^9 <= target <= 10^9
        - Only one valid answer exists.
 */
var twoSum = function(nums, target) {
    var result = [],
    i = 0;
    while (i <= nums.length - 1 && result.length < 3) {
         nums.filter((x,j) => {
            if ( x + nums[i] === target && j !== i) result.push(i)
        })
        i++
    } 
    return result  
};
var nums = [22,3,43,7,8,3], 
target = 6
console.time()
console.log(twoSum(nums, target))
console.timeEnd()
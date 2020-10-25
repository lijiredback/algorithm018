/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function twoSum(nums, target) {
    var hashMap = {};
  for (var i = 0; i < nums.length; i += 1) {
    if (hashMap[nums[i]] !== undefined) {
      return [hashMap[nums[i]], i];
    } else {
      var n = target - nums[i];
      hashMap[n] = i;
    }
  }
    return [-1, -1];
}
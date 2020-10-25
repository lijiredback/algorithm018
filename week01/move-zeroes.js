/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let i = 0, j = 0
    for (; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[j] = nums[i]
            if (j !== i) {
                nums[i] = 0
            }
            j++
        }
    }
};
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 
 * @description Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

Optional write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104
 */
const searchInsert = function (nums, target) {
    if(!(Array.isArray(nums))|| typeof target !=="number"){
        return 'nums must be array and terget number';
    } 
    const iter = Math.floor(Math.log2(nums.length));
    let x = Math.floor(nums.length/2)-1;
    for(let i = 0; i<iter; i+=1){
        if(typeof nums[x] !== "number") return 'not array of numbres' 
        if(target>=nums[x] && target<=nums[x+1]){
        return x+1;
        }
        else if(target<nums[x]){
            if(i===iter-1){
                x=x;
            } 
            else{
                x = x-Math.floor(x/2)-1;
            }
        }
        else{
            if(i===iter-1) {
             x= x+2;   
            }
            else{
                x=x+Math.floor((nums.length-x)/2);
            }
        }
    }
    return x;
};
module.exports = searchInsert;
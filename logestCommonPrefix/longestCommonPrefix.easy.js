/**
 * @param {string[]} strs
 * @return {string}
 *
 * @description {Write a function to find the longest common prefix string amongst an array of strings.
                If there is no common prefix, return an empty string "".}
 * 
 * Example 1 
 * Input: strs = ["flower","flow","flight"]
 * Input: strs = ["flowerf","flowipf","flightf"]
 * Output: "fl"
 * 
 *
 * Example 2
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 *
 */

const longestCommonPrefix = function (strs) {
    if(!(Array.isArray(strs))) return 'not array;'
    return strs.reduce((acc,str) =>{
        acc = acc.toString();
        str = str.toString();
        if(acc.length>str.length){
            let temp = acc;
            acc = str;
            str = temp;
        }
        let strCommon = ""
        for(let i = 0; i<acc.length; i+=1){
            if(acc[i]==str[i]){
                strCommon+=acc[i];
            }
            else{
                break;
            }
        }
      return strCommon;  
    })
};
module.exports = longestCommonPrefix;


/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 *
 * @description {Implement strStr().

Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strStr() and Java's indexOf().
}
 

Example 1:

Input : haystack = "hello", needle = "ll"
Output : 2
Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1
 

Constraints:

1 <= haystack.length, needle.length <= 104
haystack and needle consist of only lowercase English characters.
 */

const strStr = function (haystack, needle) {
    if(needle.length === 0) return 0;
    if(typeof haystack !== "string" || typeof needle !== "string"){
        return 'haystack and needle must be strings';
    }
    if(!(/^[a-z]+$/.test(haystack))||!(/^[a-z]+$/.test(needle)) ){
        return 'must be only lowercase English characters';
    } 
    let index = -1;
    let strTemp = "";
    for(let i=0, j=0; i<haystack.length && j<needle.length; i+=1){
        if(haystack[i] === needle[j]){
            strTemp+=needle[j];
            j+=1;
            index = i;
        }
        else{
            if(strTemp.length !==0){
                j=0;
                index= -1;
                strTemp = "";
            }
        }   
    }
        if(needle === strTemp){
            index = index - (needle.length - 1);
        }
    return index;
};
module.exports =  strStr;
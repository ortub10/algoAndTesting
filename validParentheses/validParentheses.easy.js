/**
 * @param {string} s
 * @return {boolean}
 * 
 * @description Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 */
const isValid = function (s) {
    if(typeof s !== "string") return "must be a string";
    let brackets= [];
    for(let i = 0; i<s.length; i+=1){
        let current = s[i];
         if(current === '(' || current === '[' || current === '{') {
             brackets.push(current);
         }
        else if(current === ')' || current === ']' || current ==='}'){
            if(brackets.length === 0) return false;
            let old = brackets.pop();
            if((current === ')' && old !== '(') || (current === ']' && old !== '[')
            || (current === '}' && old !== '{')) return false;
        }
    }
    if(brackets.length!==0) return false;
    return true;
};

module.exports = isValid;

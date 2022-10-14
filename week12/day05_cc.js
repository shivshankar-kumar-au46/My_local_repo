//Q-1 ) https://leetcode.com/problems/longest-common-prefix/submissions/


var longestCommonPrefix = function(strs) {
    const emptyIndex = strs.findIndex(item => item === "");
    if (strs.length === 0 || emptyIndex !== -1) {
      return "";
    }
    let commonFirstChar = "";
    for(i = 0; i < strs.length; i ++) {
      const firstChar = strs[i].substring(0, 1);
      if (commonFirstChar === "") {
        commonFirstChar = firstChar;
      } else {
        if (firstChar !== commonFirstChar) {
          return "";
        }
      }
    }
    const newStrs = strs.map(item => item.substring(1));
    return commonFirstChar + longestCommonPrefix(newStrs);
};

//Q - 2 ) https://leetcode.com/problems/valid-parentheses/

var isValid = function(s) {
  
    if (s.length ==0 || s.length%2 != 0){
        return false;
    }
    
    const closingParentheses = Object.freeze({
        "(": ")",
        "{": "}",
        "[": "]"
    });
    
    const stack = [];
    
    for (let i=0; i<s.length; i++) {
        if (s[i] in closingParentheses) {
            stack.push(s[i]);
        }else if( s[i] != closingParentheses[stack.pop()]) {
            return false;
        }
    }
    
    return stack.length == 0;
};
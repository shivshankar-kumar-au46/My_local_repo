var isValid = function(s) {
    let stack = [];
    let top = stack[stack.length-1];
    for (let i=0;i<s.length;i++){
        if(stack.length === 0){
            stack.push(s[i]);
        } else if((stack[stack.length-1]==='('&& s[i]===')') ||
                 (stack[stack.length-1]==='[' && s[i]===']') ||
                 (stack[stack.length-1]==='{' && s[i]==='}')){
            stack.pop();
        } else{
            stack.push(s[i])
        }
    }
    if(stack.length===0){
        return true;
    }else{
        return false;
    }
};
// Two pointer approach 
let a = [1,2,3,4,4,6,9];
let target = 6;

function sumNum(a,target){
    
    let i = 0;
    let j = a.length-1;
    while(i <= j){
        if (a[i]+a[j]===target){
            return true;
           
        }else if(a[i] + a[j] > target){
            j--;
        }else{
            i++;
        }
    }
    return false;
}
console.log(sumNum(a,target))
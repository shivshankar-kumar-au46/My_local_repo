//marge sort
// merge part
// here, two sorted array will given and we have to merge them together in a new array


function merge(arr1,arr2){
    let p1 = 0;
    let p2 = 0;
    let n1 = arr1.length;
    let n2 = arr2.length;
    let res = [];
    while(p1<n1 && p2<n2){
        if (arr1[p1] <= arr2[p2]){
            res.push(arr1[p1]);
            p1++;
        }else {
            res.push(arr2[p2]);
            p2++;
        }
    }
    while(p1<n1){
        res.push(arr1[p1]);
        p1++;
    }
    while(p2<n2){
        res.push(arr2[p2]);
        p2++;
    }
    return res;
}

const arr1 = [3,12,31,49];
const arr2 = [5,9,20,21];
console.log(merge(arr1,arr2))

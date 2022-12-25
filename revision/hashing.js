let arr = [11,11,12,14,23,13,44,22];
let ht = {};
let searchEle = [11,12,44];

for (let i = 0; i<arr.length; i++){
    if (arr[i] in ht){
        ht[arr[i]].push(i);
    } else {
        ht[arr[i]] = [i]
    }
}
console.log(ht)

let result = [];
for (let i = 0; i<searchEle.length;i++){
    if (searchEle[i] in ht){
        result.push(ht[searchEle[i]]);
    } else {
        result.push(-1);
    }
}
console.log(result)

const obj = [{
    fName: 'shiv',
    lName: 'kumar',
}];

function getPost(){
    setTimeout(() => {
        let output = "";
        obj.forEach(element => {
         output = output + element.fName + " " + element.lName+'\n';
        });
        console.log(output);
    }, 1000);
}

function createPost(data,callback){
    setTimeout(()=>{
        obj.push(data);
        callback();
    },2000)
}
createPost({
    fName: 'Rahul',
    lName: 'sharma'
},getPost)
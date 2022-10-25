let queCount = 1;
var dataArr;
var ans = [];
async function data (){
    let data = await fetch('https://opentdb.com/api.php?amount=10&category=17&difficulty=medium&type=multiple')
    // console.log(data)
    let dataJSON = await data.json();
    // console.log(dataJSON)
    dataArr = dataJSON.results;
    for (let i = 0; i<dataArr.length; i++){

        ans.push(dataArr.correct_answer)

    }
    let target = document.getElementById( 'target')
    target.innerHTML = "<h1>ans[0] </h1>"

    document.getElementById('question').innerHTML = dataArr[0].question;
    let ansOpt = [dataArr[0].correct_answer,...dataArr[0].incorrect_answers]

    let opt = document.getElementsByTagName('span')
    for (let i = 0; i<opt.length;i++){
        opt[i].innerHTML = ansOpt[i]
    }
}

// document.addEventListener('load',data())
// let nextbtn = document.getElementById('next');
// nextbtn.addEventListener('click',function(){
//     document.getElementById('que').innerHTML = dataArr[quecount].question

//     let ansopt = [dataArr[queCount].correct_answer,...dataArr[queCount].incorrect_answers]
//  let opt = document.getElementsByTagName('span')
//  for(let i = 0;i<opt.length;i++){
//     opt[i].innerHTML = ansopt[i]
//  }
//  queCount++
//  })

 let backbtn = document.getElementById('back')
 backbtn.addEventListener('click',function(){
    --queCount
    document.getElementById('que').innerHTML = dataArr[queCount].question
    let ansopt = [dataArr[queCount].correct_answer,...dataArr[queCount].incorrect_answers]
 let opt = document.getElementsByTagName('span')
 for(let i = 0;i<opt.length;i++){
    opt[i].innerHTML = ansopt[i]
 }
 })
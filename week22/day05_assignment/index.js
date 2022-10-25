
let btn  = document.getElementById("btn");
btn.addEventListener('click',addNewTask)
let parentList = document.getElementById('parentList');
function addNewTask (e){
    if (parentList.children[0].className === "emptyMsg"){
        parentList.children[0].remove();
    }
    let currentBtn = e.currentTarget;
    let currentInput = currentBtn.previousElementSibling;
    let currentChapterName = currentInput.value;
    
    let newLi = document.createElement('li');
    newLi.className = 'list-group-item d-flex justify-content-between';
    newLi.innerHTML = `<h3 class="flex-grow-1">${currentChapterName}</h3> 
                <button class="btn btn-danger"  onclick="removeTask(this)">Remove</button>`
    parentList.append(newLi)
   currentInput.value = ""; 
}

function removeTask (currentElm){
    currentElm.parentElement.remove();
    let parentList = document.getElementById('parentList');
    if (parentList.children.length <= 0){
    let emptyTag = document.createElement('h3');
    emptyTag.className = "emptyMsg";
    emptyTag.textContent = "Nothing is here, Please add a Task"
    parentList.append(emptyTag);
   } 
}


let taskHave = document.createElement('h2');
taskHave.innerHTML = `You Have Task to Todos`
taskHave.className = "d-flex my-3 justify-content-center text-center"
let outer = document.getElementById('outer');
outer.firstElementChild.before(taskHave);






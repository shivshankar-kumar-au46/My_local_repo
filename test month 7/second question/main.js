console.log('hello shiv');
const button_addon2 = document.getElementById("button-addon2")
const addTask = document.getElementById('newTask')
var targetDiv = document.getElementById('targetDiv')
const updateBtn = document.querySelector('.updateBtn')
var deleteBtn = document.querySelector('.deleteBtn')
const doneBtn = document.querySelector('.doneBtn')
const btn_clear = document.querySelector('#btn-clear').addEventListener('click',()=>{targetDiv.remove()})



button_addon2.addEventListener('click',()=>{
    const newDiv = document.createElement('div')
    newDiv.className = "form-control my-2 justify-content-between icon"
    const innerNewDiv = document.createElement('div')
    innerNewDiv.className = 'innerDiv'

    const newTask = document.createElement('label')
    newTask.innerHTML = addTask.value
    newTask.className = 'taskText'
    
    const doneBtn = document.createElement('i')
    doneBtn.className = 'bi bi-check-square doneBtn'
    doneBtn.addEventListener('click',()=>{
        newTask.style.cssText += "text-decoration: line-through"
    })

    const updateBtn = document.createElement('i')
    updateBtn.className = 'bi bi-pencil-square updateBtn'
    updateBtn.addEventListener('click',()=>{

        console.log('update');
    })

    const delBtn = document.createElement('i')
    delBtn.className = 'bi bi-x-square deleteBtn'
    delBtn.addEventListener('click',()=>{
        newDiv.remove()
        console.log('hello');
    })
    newDiv.appendChild(newTask)
    newDiv.appendChild(innerNewDiv)
    innerNewDiv.appendChild(doneBtn)
    innerNewDiv.appendChild(updateBtn)
    innerNewDiv.appendChild(delBtn)
    targetDiv.appendChild(newDiv)
    console.log(addTask.value)
})
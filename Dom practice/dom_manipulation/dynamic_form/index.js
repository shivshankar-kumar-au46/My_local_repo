const inputType = document.querySelector('#inputType');
console.log(inputType);
const labelValue = document.querySelector('#labelValue');
console.log(labelValue);


labelValue.addEventListener('keyup',(event)=>{
    if(event.key === "Enter"){
        let form = document.querySelector('.form');
        const type = inputType.value;
        const label = labelValue.value;
        const labelNew = document.createElement('label')
        labelNew.classList.add('form-label')
        let inputNew = null
       
        const divNew = document.createElement('form');
        divNew.classList.add('mb-3')
        if(type === 'textarea'){
            inputNew = document.createElement('textarea');
            inputNew.classList.add('form-control')
        }else{
            inputNew = document.createElement('input')
            inputNew.type = type;
            inputNew.classList.add('form-control')
        }

        if(type === 'submit'){
            labelNew.innerHTML = null;
            inputNew.value = label;
            inputNew.classList.add('btn');
            inputNew.classList.add('btn-success');
            
        }else{
            divNew.appendChild(labelNew);
            labelNew.innerHTML = label;
        }


        form.appendChild(divNew);
        divNew.appendChild(inputNew);

    }
})
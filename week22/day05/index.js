const button = document.getElementById("button");
button.addEventListener('click',function(){
    let newData = fetch('https://dog.ceo/api/breeds/image/random');
    newData 
    .then((Response)=>{
        return Response.json();
    })
    .then((data)=>{
        console.log(data)
    const newDog = document.getElementById("newDog")
    newDog.firstElementChild.nextElementSibling.src = data.message;
    })

    .catch(()=>{
        console.log(error);
    })
})
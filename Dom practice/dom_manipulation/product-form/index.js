const addProductForm = document.querySelector('#add-product-form');
const listProduct = document.querySelector('#list-product')
const addproduct = document.querySelector('#add-product')
const showProduct = document.querySelector('#show-product')

addproduct.addEventListener('click',()=>{
    addProductForm.style.display = 'block';
    listProduct.style.display = 'none';
})
showProduct.addEventListener('click',()=>{
    listProduct.style.display = 'block';
    addProductForm.style.display = 'none';
})
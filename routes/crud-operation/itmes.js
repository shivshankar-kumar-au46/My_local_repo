const express = require('express');
const router = express.Router(); // it is a method of express which is used to acces the file 

let items = [
    {id : 1, title : 'created 1', orderID : 1, completed : true, createdOn : new Date()},
    {id : 2, title : 'created 2', orderID : 2, completed : true, createdOn : new Date()},
    {id : 3, title : 'created 3', orderID : 3, completed : true, createdOn : new Date()},
    {id : 4, title : 'created 4', orderID : 4, completed : true, createdOn : new Date()},
    {id : 5, title : 'created 5', orderID : 5, completed : true, createdOn : new Date()},
    {id : 6, title : 'created 6', orderID : 6, completed : true, createdOn : new Date()},
]


router.route('/').get((req,res)=>{
    res.status(200)
    res.json(items);
}).post((req,res)=>{
    
    let newID = items.length + 1;
    let newTitle = 'created' + " " +newID;
    let newOrderID = newID;
    let isCompleted = false;
    
    let newItem = {
        id : newID,
        title : newTitle,
        orderID : newOrderID,
        completed : isCompleted,
        createdOn : new Date()
    };
    
    items.push(newItem);
    
    res.status(200);
    res.json(newItem);

})



module.exports = router;
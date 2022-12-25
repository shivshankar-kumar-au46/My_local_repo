const { Router } = require('express');

const {
    getEmployees,
    getEmployeeByID,
    postEmployee,
    updateEmployeeByID,
    deleteEmployeeByID
}  = require('../controller/empController')


const router = Router();

// employee Routes 

router.get('/',getEmployees)
router.get('/:id',getEmployeeByID)

router.post('/',postEmployee)
router.put('/:id',updateEmployeeByID)
router.delete('/:id',deleteEmployeeByID)

module.exports = router;


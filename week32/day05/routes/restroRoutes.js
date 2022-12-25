const { Router } = require('express')
const { deleteRestroByID, getRestro, getrestroByID, postRestro, updateRestroById } = require('../controllers/restroController')

const restroRouter = Router()

//Restro routes
restroRouter.get('/', getRestro)
restroRouter.get('/:restroID', getrestroByID)

//Route level Middleware
restroRouter.post('/', postRestro)
restroRouter.put('/:restroID', updateRestroById)
restroRouter.delete('/:restroID', deleteRestroByID)

module.exports = restroRouter
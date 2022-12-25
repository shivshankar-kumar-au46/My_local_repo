var express = require('express');
const { getProduct, postProduct, postUser, getUser } = require('../controller/controller');
var router = express.Router();

/* GET home page. */

router.get('/product',getProduct)
router.post('/product',postProduct)
router.post('/user',postUser)
router.get('/',getUser)



module.exports = router;

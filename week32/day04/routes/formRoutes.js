const { Router } = require('express');
const Newuser = require('../models/userModels')
const {getUsers, getUsersByID,getGallery,getAbout,getContact, getHome} = require('../controllers/userController')
const routes = Router();



routes.get('/favoriteSurvey',getHome)

routes.get('/favoriteSurveyResult',getUsers)
routes.get('/favoriteSurveyResult:userID',getUsersByID);

routes.post('/favoriteSurvey', async (req,res)=>{
  try {

    const data = await Newuser.create(req.body);
    console.log(data);
    res.redirect('/favoriteSurvey')

  } catch (e) {
    console.log(e);
    res.redirect('/favoriteSurvey')
  }
})

routes.get('/gallery',getGallery);

routes.get('/about',getAbout);

routes.get('/contact',getContact)









module.exports = routes;
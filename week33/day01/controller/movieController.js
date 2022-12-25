const MovieModel = require('../models/movieModel')

const getMovies = async (req,res) => {
    const {data} = req.query

    const {title} = req.query

    let conditions = {};
    if(title){
        conditions.title = title;
    }else{
        conditions = conditions;
    }
    console.log(req.query)

    try {
        const movies = await MovieModel.find(conditions);
    res.status(200).send({status:'success',msg:movies})
    } catch (error) {
        console.log("Error in fetching movies");
        res.status(404).send({status:'error',msg:'Error in fetching movies'})
    }
    
    
}
const getMovieByID = async (req, res) => {
    const {movieID} = req.params;
    console.log(movieID);
    try {
        const moviel = await MovieModel.findById(movieID)
        // console.log(movie)
        if(moviel){
            res.status(200).send({status:'success',moviel})

        }else{

            res.status(401).send({status:'error',msg:'Error in fetching movie shiv'})
        }
    } catch (error) {
        console.log(error,'error in db');
    }
   
}
const postMovie =  (req,res) => {
    const {newMovie} = req.body;
    try {
        const movie = MovieModel.create(newMovie);
        res.status(201).send({status:'success',movie})
    } catch (error) {
        res.status(501).send({status:'error',msg:'Error in adding new movie in DB'})
    }

}
const updateMovieByID =  (req,res) => {

}
const delteMovieByID =  (req,res) => {

}


module.exports = {
    getMovies,
    getMovieByID,
    postMovie,
    updateMovieByID,
    delteMovieByID

}
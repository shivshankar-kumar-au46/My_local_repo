const { Router } = require('express');
const { getMovies, getMovieByID, postMovie,updateMovieByID,delteMovieByID} = require('../controller/movieController')
const router = Router();

router.get('/',getMovies);
router.get('/:movieID',getMovieByID);
// restroRouter.get('/:restroID', getrestroByID);

router.post('/',postMovie);
router.put('/:movieID',updateMovieByID);
router.delete('/:movieID',delteMovieByID);


module.exports = router;


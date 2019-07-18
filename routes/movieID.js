const express = require('express');
const router  = express.Router();
const Movies = require('../models/movieModel')

// OPTION 1

// router.get('/movie/:id', (req, res, next) => {
//   Movies.find({"_id": req.params.id})
//   .then(movies => {
//     res.render('movieID', {movie : movies[0]})
//   })
//   .catch(error => {
//         console.log(error)
//       })
// });

// OPTION 2

router.get('/movie/:id', (req, res, next) => {
const movieId = req.params.id;
  Movies.findById(movieId, (err, movie ) => {
    if (err) {return next(err);}
    res.render("movieID", {movie : movie});
  });
});


module.exports = router


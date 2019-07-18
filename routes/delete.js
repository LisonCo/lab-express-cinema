const express = require('express');
const router  = express.Router();
const Movies = require('../models/movieModel')

router.get('/movie/:id/delete', (req, res, next) => {
const movieId = req.params.id;

  Movies.findByIdAndRemove(movieId, (err, movie ) => {
    if (err) {return next(err);}
        res.redirect("/movies");
  });
});

module.exports = router


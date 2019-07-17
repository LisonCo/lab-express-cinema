const express = require('express');
const router  = express.Router();
const Movies = require('../models/movieModel')

router.get('/movie/:id', (req, res, next) => {
  Movies.find({"_id": req.params.id})
  .then(movies => {
    res.render('movieID', {movie : movies[0]})
  })
  .catch(error => {
        console.log(error)
      })
});

module.exports = router

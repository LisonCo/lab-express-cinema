const express = require('express');
const router  = express.Router();
const Movies = require('../models/movieModel')

/* GET home page */
router.get('/movies', (req, res, next) => {
  Movies.find({})
  .then(movies => {
    res.render('movies', {movies})
  })
  .catch(error => {
        console.log(error)
      })
});

module.exports = router



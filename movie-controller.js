var Movie = require('./models/movie')

exports.getMovies = function(req, res) {
  Movie.find({}, function (err, movies) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(movies);
  }); 
};
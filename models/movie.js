var mongoose = require('mongoose');

var movieSchema = new mongoose.Schema({ 
    title: { type: String, unique: true, lowercase: true},
    director: String,
    price: Number,
    rate: Number 
},
{ timestamps: true }
);

module.exports = mongoose.model('Movie', movieSchema);
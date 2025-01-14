const express = require('express'),
router = express.Router();

var
itemCtrl = require('./item-controller'),
userCtrl = require('./user-controller');
movieCtrl = require('./movie-controller');

router.get('/hello', itemCtrl.getWorld);
router.get('/hello/:foo/:bar', itemCtrl.getWorldParams);
router.post('/hello', itemCtrl.postWorld);

router.post('/movies', movieCtrl.createMovie);
router.get('/movies', movieCtrl.getMovies);
router.get('/movies/:id', movieCtrl.getMovie);
router.put('/movies/:id', movieCtrl.updateMovie);
router.delete('/movies/:id', movieCtrl.deleteMovie);

router.post('/users', userCtrl.createUser);
router.get('/users', userCtrl.getUsers);
router.get('/users/:id', userCtrl.getUser);
router.put('/users/:id', userCtrl.updateUser);
router.delete('/users/:id', userCtrl.deleteUser);

module.exports.UPLOAD_PATH = "uploads";

var multer = require("multer");
var upload = multer({ dest: module.exports.UPLOAD_PATH});
var imageCtrl = require('./image-controller');

router.post('/images', upload.single('image'), imageCtrl.uploadImage);
router.get('/images', imageCtrl.getImages);
router.get('/images/:id', imageCtrl.getImage);
router.delete('/images/:id', imageCtrl.deleteImage);

module.exports = router;
const http = require('http'),
axios = require('axios'),
logger = require('morgan'),
cors = require('cors'),
express = require('express'),
bodyParser = require('body-parser'),
mongoose = require('mongoose'),
dotenv = require("dotenv"),
path = require('path');

var app = express();
var port = process.env.PORT || 8000;
dotenv.config();

app.use(bodyParser.json());
app.use(logger('tiny'));
app.use(require('./routes'));
app.use(axios);

// var cookieParser = require("cookie-parser");

// app.use(logger("dev"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

app.use(express.static(path.join(__dirname, '/')));//connect read.js with index.html
//app.use(express.static(path.join(__dirname, 'public')));//connect clinet.js with index.html

app.get('/', (req, res) => {
    res.sendfile(path.resolve(__dirname, 'views', 'index.html'));//open html
});//to open the html on the server

app.listen(port, function(err){
    console.log('Listening on port: ' + port);
});

const dbURI = process.env.DB_URL;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((result) => console.log('connected to db'))
        .catch((err) => console.log(err));
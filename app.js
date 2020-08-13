var express = require('express');
var bodyParser = require('body-parser');
var exSession = require('express-session');
var login = require('./controllers/login');
var app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(exSession({secret: 'my secret value', saveUninitialized: true, resave: false}));

app.use('/login',login);

app.get('/', function(req, res){
    res.redirect('/login');
});

app.listen(3000, function(){
    console.log('express http server started at...3000');
});

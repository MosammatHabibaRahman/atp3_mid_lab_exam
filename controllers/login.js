var express = require('express');
var adminModel = require.main.require('./models/admin');
var router = express.Router();

router.get('/',function (req,res){
    res.render('login/index');
});

router.post('/',function (req,res){
    admin = {
        username: req.body.username,
        password: req.body.password
    };

    adminModel.validate(admin,function(status){
        if(status){
			req.session.username = user.uname;
            res.send("successfully logged in!");
            //res.redirect('/home');
		}else{
			res.send('invalid username/password');
		}
    })
});

module.exports = router;
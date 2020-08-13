var express = require('express');
var adminModel = require.main.require('./models/adminModel');
var router = express.Router();

router.get('/',function (req,res){
    res.render('login/index');
});

router.post('/',function (req,res){
    admin = {
        username: req.body.username,
        password: req.body.password
    };

    if(admin.username==admin.password)
    {
        res.redirect('/admin');
    }
   /*  adminModel.validate(admin,function(status){
        if(status){
			req.session.username = user.uname;
            res.send("successfully logged in!");
            //res.redirect('/admin');
		}else{
			res.send('invalid username/password');
		}
    }) */
});

module.exports = router;
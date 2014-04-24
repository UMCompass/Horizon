
//Freddy Nguyen

var MongoClient = require('mongodb').MongoClient;

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.login = function(req,res){
	var user = req.session.user;
	if(user){
		res.redirect('checklist');
	}
	else{
		res.render('login');
	}
};

exports.authorize = function(req,res){
	var username = req.body.username;
	var password = req.body.password;

	if(!username || !password){
		req.flash('authorize','You must provide username and password');
		res.redirect('/');
	}

	else{
		MongoClient.connect('mongodb://localhost:27017',function(err,db){
      		var users = db.collection('users');
      		users.findOne({username: username, password: password},function(err, item){
        		if(item===null){
          			req.flash('authorize','Email or Password Invalid');
          			res.redirect('/');
        		}
        		else{
          			req.session.user = item;
          			users.update({user: username},{$set: {online: true}},function(err,result){
            			if (err) throw err;
            			console.log(result);
          			});
          			res.redirect('/checklist');
        		}
      		});
    	});
	}
};

exports.register = function(req,res){
	var user = req.body.username;
	var pass = req.body.password;
	var repass = req.body.passwordretyped;
	var email = req.body.email;
	if(!(user && pass && repass && email) || pass!=repass){
		res.redirect('/');
	}

	else{
		MongoClient.connect('mongodb://localhost:27017',function(err,db){
			var users = db.collection('users');
			users.findOne({username:user},function(err,item){
				if (item===null){
					var newUser = {username: user,password:pass,email:email};
					users.insert(newUser,function(err,result){
						if (err) throw err;
						console.log(result);
					});
					req.session.user = newUser;
					res.redirect('checklist');
				}

				else{
					res.redirect('/');
				}
			});
		});
	}
};

exports.checklist = function(req,res){
	var user = req.session.user;
	if(!user){
		res.redirect('/');
	}
	
	else{
		res.render('checklist');
	}
};

exports.settings = function(req,res){
	var user = req.session.user;
	if (!user){
		res.redirect('/');
	}
	else{
		res.render('settings', {
			title: "UMass Compass",
			success: req.flash('success'),
			error: req.flash('error')
		});
	}
};

exports.settingUpdate = function(req,res){
	var user = req.session.user;

	var newUsr = req.body.newUser;
	var pass1 = req.body.newPass;
	var pass2 = req.body.newPass2;
	var email = req.body.newEmail;

	console.log(newUsr + "::" + pass1 + "::" + pass2 + "::" + email);

	if(!user){
		res.redirect('/');
	}

	else{
		MongoClient.connect('mongodb://localhost:27017',function(err,db){
			var users = db.collection('users');

			if( newUsr != undefined ){
				if(newUsr.length > 0) {
					users.update({username: user.username}, { $set: {username: newUsr} },function(err,result){
						if (err) throw err;
						console.log(result);

					});
					req.flash('success', 'Username has been changed!');
					res.redirect('settings');
				}
				else {
					req.flash('error', "You must enter a username!");
					res.redirect('settings');
				}
				
			}
			else if( pass1 != undefined && pass2 != undefined) {

				if( (pass1.length > 0) && (pass2.length > 0) ) {
					users.update({password: user.password}, {$set: {password: pass1} }, function(err,result){
						if (err) throw err;
						console.log(result);
					});
					req.flash('success', "Password changed!");
					res.redirect('settings');
				}
				else {
					req.flash('error', "Enter a password!");
					res.redirect('settings');
				}
				
			}
			else if( email != undefined && email.length > 0) {
				users.update({email: user.email}, { $set: {email: email} }, function(err,result){
						if (err) throw err;
						console.log(result);
					});
				req.flash('success', "Email changed!")
				res.redirect('checklist');
			}
			else
				req.flash('error', "")
				res.redirect('checklist');

			
		});
	}
};


exports.logout = function(req,res){
	var user = req.session.user;
	if(!user){
		res.redirect('/');
	}
	else{
		req.session.destroy(function(){
			res.render('login');
		});
	}
};

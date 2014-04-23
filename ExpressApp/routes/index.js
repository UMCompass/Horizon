
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
					res.render('checklist');
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
		res.render('settings');
	}
};

exports.logout = function(req,res){
	var user = req.session.user;
	if(!user){
		res.redirect('/');
	}
	else{
		req.session.destroy(function(){
			res.redirect('/');
		});
	}
};

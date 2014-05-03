
//Freddy Nguyen & Jason Dale


var chlist = require('../lib/retrieve');

var MongoClient = require('mongodb').MongoClient;

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.login = function(req,res){
	var user = req.session.user;
	if(user && user.admin != undefined) {
		if(user.admin === true) {
			res.redirect('designer');
		}
		else
			res.redirect('checklist');
	} 
	else if(user){
		res.redirect('checklist');
	}
	else{
		res.render('login', {
			error: req.flash('error'),
			authorize: req.flash('authorize')
		});
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


          			if(item && item.admin === true) {
						res.redirect('designer');
					} 
					else
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
	var type = req.body.usertype.toString();
	if(!(user && pass && repass && email) || pass!=repass){
		res.redirect('/');
		req.flash('error','You didn\'t put in all the fields');
	}

	else{
		MongoClient.connect('mongodb://localhost:27017',function(err,db){
			var users = db.collection('users');
			users.findOne({username:user},function(err,item){
				if (item===null){
					var admin = false;
					if (type=='designer') admin = true;
					var newUser = {username: user,password:pass,email:email,admin:admin};
					users.insert(newUser,function(err,result){
						if (err) throw err;
						console.log(result);
					});
					req.session.user = newUser;
					res.redirect('/checklist');
				}

				else{
					req.flash('error', 'That username is taken already!');
					res.redirect('/');
				}
			});
		});
	}
};

exports.checklist = function(req,res){
	var user = req.session.user;

	if(user && user.admin != undefined) {
		if(user.admin === true) {
			res.redirect('designer');
		}
		else
			res.render('checklist');
	} 
	else if(user){
		res.render('checklist');
	}
	else{
		res.redirect('/');
	}
};

exports.designerChecklist = function(req,res){
	var user = req.session.user;

	if(!user || user.admin != true) {
		res.redirect('/');
	}
	else {
		res.render('designer', {
			title: "Compass - Designer"
		});
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
			error: req.flash('error'),
            curName: user.username,
            curPass: user.password,
            curMail: user.email
		});
	}
};

exports.settingUpdate = function(req,res){
	var user = req.session.user;

	var newUsr = req.body.newUser;
	var pass1 = req.body.newPass;
	var pass2 = req.body.newPass2;
	var email = req.body.newEmail;

	if(!user){
		res.redirect('/');
	}

	else{
		MongoClient.connect('mongodb://localhost:27017',function(err,db){
			var users = db.collection('users');	
			if( newUsr != undefined ){
				console.log(newUsr.length);

				if(newUsr.length > 5) {
					users.update({username: user.username}, { $set: {username: newUsr} },function(err,result){
						if (err) throw err;
						//console.log(result);

					});
					req.flash('success', 'Username has been changed!');
					res.redirect('settings');
				}
				else {
					req.flash('error', "Your username must be longer than 5 characters!");
					res.redirect('settings');
				}
				
			}
			else if( pass1 != undefined && pass2 != undefined) {

				console.log(pass1.length);
				console.log(pass2.length);

				if( ( pass1.length > 5) && (pass2.length > 5)) {

					if(pass1 === pass2) {

						users.update({password: user.password}, {$set: {password: pass1} }, function(err,result){
						if (err) throw err;
						});
						req.flash('success', "Password changed!");
						res.redirect('settings');
					}

					else {
						req.flash('error', "Invalid! The passwords either don't match or their length is less than 5. Fix this.");
						res.redirect('settings');
					}
					
				}

				else {
					req.flash('error', "Invalid! The passwords either don't match or their length is less than 5. Fix this.");
					res.redirect('settings');
				}
				
				
			}
			else if( email != undefined && email.length > 1) {

				console.log(email.length);

				users.update({email: user.email}, { $set: {email: email} }, function(err,result){
						if (err) throw err;
					});
				req.flash('success', "Email changed!")
				res.redirect('settings');
			}
			else
				req.flash('error', "Error.")
				res.redirect('settings');

			
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
			res.redirect('/');
		});
	}
};

exports.retrieve = function(req, res) {
	var user = req.session.user;

	if(!user) {
		res.redirect('/');
	}
	else {
		/*chlist.getList(function(list) {
			res.send(list);
		}); */ 
		MongoClient.connect('mongodb://localhost:27017',function(err,db){
			var collection = db.collection('checklist');
			goodies = collection.find().toArray(function(err,result){
						if (err) throw err;
						var x = JSON.stringify(result);
						/*console.log(result[0].name);*/
						res.send(result);
			});
			//res.send(goodies);
		});
	}
}



var MongoClient = require('mongodb').MongoClient;
var goodies;

exports.getList = function (cb) {
	
	MongoClient.connect('mongodb://localhost:27017',function(err,db){
			var collection = db.collection('checklist');
			goodies = collection.find().toArray(function(err,result){
						if (err) throw err;
						var x = JSON.stringify(result);
						console.log(result[0].name);
			});
			cb(goodies);
	});

  
};
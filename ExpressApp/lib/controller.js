

var MongoClient = require('mongodb').MongoClient;

function saveTopic(topicID, topicObject){
	
}


function getTopics() {
	MongoClient.connect('mongodb://localhost:27017',function(err,db){
			var collection = db.collection('topics');
			var results = {};

			var x = collection.find().toArray(function(err,result){
						if (err) throw err;
			});

			for(var i = 0; i <  x.length) {
				results.push(x[i].name);
			}

			res.send(results);
	});
}

function getElementsForTopic(topic) {
	MongoClient.connect('mongodb://localhost:27017',function(err,db){
			var collection = db.collection('topics');
			var results = {};

			var x = collection.find(name:topic).toArray(function(err,result){
						if (err) throw err;
			});

			var i;
			while(x[i] != undefined) {

				for(var j = 0; j < 3; j++) {
					results.push(x[i].checklist.text[j]);
				}
				i++;
			}

			res.send(results);
	});
}

//Freddy Nguyen & Jason Dale

var MongoClient = require('mongodb').MongoClient;

function saveTopic(topicID, topicObject){
	MongoClient.connect('mongodb://localhost:27017', function(err,db){
		var topics = db.collection('topics');
		topics.findOne({_id:topicID},function(err,item){
			if (item===null){
				topicObject["_id"] = topicID;
				topics.insert(topicObject,function(err,result){
					if (err) {
						throw err;
						return false;
					}
					console.log(result);
				});
			}
			else{
				topics.remove({_id: topicID});
				topicObject["_id"] = topicID;
				topics.insert(topicObject,function(err,result){
					if (err){
						throw err;
						return false;
					}
					console.log(result);
				});
			}
		});
	});
}

function deleteTopic(topicID){
	MongoClient.connect('mongodb://localhost:27017',function(err,db){
		var topics = db.collection('topics');
		topics.findOne({_id:topicID},function(err,item){
			if(item===null){
				console.log("no topic with such an ID");
				return false;
			}
			else{
				topics.remove({_id:topicID});
				return true;
			}
		});
	});
}



function getTopics() {
	MongoClient.connect('mongodb://localhost:27017',function(err,db){
			var collection = db.collection('topics');
			var results = {};

			var x = collection.find().toArray(function(err,result){
						if (err) throw err;
			});

			for(var i = 0; i <  x.length;x++) {
				results.push(x[i].name);
			}

			res.send(results);
	});
}

function getElementsForTopic(topic) {
	MongoClient.connect('mongodb://localhost:27017',function(err,db){
			var collection = db.collection('topics');
			var results = {};

			var x = collection.find({name:topic}).toArray(function(err,result){
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
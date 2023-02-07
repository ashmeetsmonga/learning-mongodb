let db; //connected to database in mongodb
doc = {
	name: "Tacos",
	desc: "Yummy Tacos",
	cookedTime: 20,
};

db.tacos.insertOne(doc); //inserts document
db.tacos.find(); //lists all docs

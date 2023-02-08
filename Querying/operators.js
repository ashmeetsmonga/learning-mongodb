db.recipes.find({ cook_time: { $lte: 30 } }); // returns data with cook_time less than equal to 30
db.recipes.find({ cook_time: { $gte: 30 } }); // returns data with cook_time greater than equal to 30
db.recipes.find({ cook_time: { $lt: 30 } }); // returns data with cook_time less than to 30
db.recipes.find({ cook_time: { $gt: 30 } }); // returns data with cook_time greater than to 30
db.recipes.find({ cook_time: { $gt: 30 } }, { prep_time: { $gt: 20 } }); //returns data with cook_time greater than 30 and prep_time greater than 20
db.recipes.find({ $or: [{ cook_time: { $gt: 30 } }, { prep_time: { $gt: 20 } }] }); //returns data with cook_time greater than 30 or prep_time greater than 20

db.recipes.find({ tags: { $all: ["easy", "quick"] } }); //returns docs with tags containing easy and quick(tags is an array)
db.recipes.find({ tags: { $in: ["easy", "quick"] } }); //returns docs with tags containing easy or quick(tags is an array)

db.recipes.find({ "ingredients.name": "egg" }); //returns docs with egg in ingredients.name

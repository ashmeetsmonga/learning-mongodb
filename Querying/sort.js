db.recipes.find({}).sort({ title: 1 }); //sorts by title in ascending order

db.recipes.find({}).sort({ title: -1 }); //sorts by title in descending order

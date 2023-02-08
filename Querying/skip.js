db.recipes.find({}).sort({ title: 1 }).skip(1); // skips the first result

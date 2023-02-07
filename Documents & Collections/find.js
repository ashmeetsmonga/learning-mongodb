let db; //connected to database in mongodb
doc = {
	name: "Tacos",
	desc: "Yummy Tacos",
	cookedTime: 20,
};

db.tacos.insertOne(doc); //inserts document
db.tacos.find(); //lists all docs

db.recipes.find({ title: "Tacos", cook_time: 20 }); //Finds a list of docs matching the argument
//Output
// [
//     {
//       _id: ObjectId("5e5e9c470d33e9e8e3891b35"),
//       title: 'Tacos',
//       calories_per_serving: 210,
//       cook_time: 20,
//       desc: 'Classic Mexican tacos',
//       directions: [
//         'Brown beef',
//         'Add taco seasoning and water, mix',
//         'Bring to boil',
//         'Lower heat to simmer 5-10 minutes until desired consistency',
//         'Put meat in tacos'
//       ],
//       ingredients: [
//         {
//           name: 'ground beef (lean)',
//           quantity: { amount: 1, unit: 'lbs' }
//         },
//         { name: 'taco seasoning', quantity: { amount: 2, unit: 'oz' } },
//         { name: 'corn hard tacos', quantity: { amount: 12, unit: 'oz' } }
//       ],
//       likes: [ 1, 415 ],
//       likes_count: 2,
//       prep_time: 10,
//       rating: [
//         4, 4, 3, 4, 2,
//         5, 2, 2, 4, 5
//       ],
//       rating_avg: 3.5,
//       servings: 4,
//       tags: [ 'mexican', 'quick', 'easy', 'ground beef' ],
//       type: 'Dinner'
//     }
//   ]
db.recipes.find({}, { title: 1 }); //Second arguments consist of what fields you want in output. 1 would mean the field will be there, 0 would mean the field would not
//be there. So {title: 0} would return docs without title field in them and all other fields present.
//Output
// [
//     {
//       _id: ObjectId("5e6fd805fa98021236426a24"),
//       title: 'Chicken Soft Tacos'
//     },
//     { _id: ObjectId("5e877cba20a4f574c0aa56da"), title: 'Pancakes' },
//     {
//       _id: ObjectId("5e87856d07beb474c074c5ca"),
//       title: 'Brown Sugar Meatloaf'
//     },
//     {
//       _id: ObjectId("5e878f5220a4f574c0aa56db"),
//       title: 'Maple Smoked Salmon'
//     },
//     {
//       _id: ObjectId("5edf1d313260aab97ea0d589"),
//       title: 'Zucchini Brownies'
//     },
//     { _id: ObjectId("5e5e9c470d33e9e8e3891b35"), title: 'Tacos' },
//     { _id: ObjectId("5edf1cd43260aab97ea0d588"), title: 'Apple Pie' }
//   ]

db.recipes.find({ title: { $regex: /taco/i } }, { title: 1 }); //regex searching
//Output
// [
//     {
//       _id: ObjectId("5e6fd805fa98021236426a24"),
//       title: 'Chicken Soft Tacos'
//     },
//     { _id: ObjectId("5e5e9c470d33e9e8e3891b35"), title: 'Tacos' }
//   ]

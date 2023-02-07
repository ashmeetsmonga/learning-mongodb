db.test.insertOne({ title: "Test Doc" }); //Inserts a single doc. If the collection (test) is not present, it would be created automatically.
//Output
// {
//     acknowledged: true,
//     insertedId: ObjectId("63e28e9513752eb40bbccc02")
//   }

doc = {
	title: "Warm Water",
	desc: "A bowl of warm water",
	rating: "5",
	type: "drink",
	comments: [
		{
			name: "Ash",
			desc: "Very warm",
		},
		{
			name: "Sim",
			desc: "Too good",
		},
	],
};
db.recipes.insertOne(doc); //Would insert the above doc in recipes collection

db.test.insertOne({ title: "Test Doc" }); //Inserts a single doc. If the collection (test) is not present, it would be created automatically.
//Output
// {
//     acknowledged: true,
//     insertedId: ObjectId("63e28e9513752eb40bbccc02")
//   }

const mongoose = require("mongoose");
const Task = require("./Task");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI);

const createDoc = async (name, completed) => {
	try {
		const doc = await Task.create({ name, completed });
		console.log(doc);
	} catch (err) {
		console.log(err);
	}
};

createDoc("Task 1", false);

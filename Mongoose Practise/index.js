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

const findDoc = async (findObject) => {
	try {
		const doc = await Task.find(findObject);
		console.log(doc);
	} catch (err) {
		console.log(err);
	}
};

const findOneDoc = async (findObject) => {
	try {
		const doc = await Task.findOne(findObject);
		console.log(doc);
	} catch (err) {
		console.log(err);
	}
};

const findOneAndDeleteDoc = async (findObject) => {
	try {
		const doc = await Task.findOneAndDelete(findObject);
		console.log(doc);
	} catch (err) {
		console.log(err);
	}
};

// createDoc("Task 1", false);
// findDoc({ completed: false });
// findOneDoc({ completed: false });
findOneAndDeleteDoc({ completed: false });

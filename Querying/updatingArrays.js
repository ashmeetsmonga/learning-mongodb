db.example.updateOne({ title: "Tacos" }, { $push: { likes: 60 } }); //pushes 60 to likes array

db.example.updateOne({ title: "Tacos" }, { $pull: { likes: 60 } }); //removes 60 from likes array

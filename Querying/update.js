db.example.updateOne({ title: "Pizza" }, { $set: { title: "Thin crust Pizza" } }); //update the title

db.example.updateOne({ title: "Thin crust Pizza" }, { $set: { vegan: false } }); //set the new field if the field is not present (vegan was not there before but would be after this query)

db.example.updateOne({ title: "Thin crust Pizza" }, { $unset: { vegan: 1 } }); //removes the field from the doc

db.example.updateOne({ title: "Tacos" }, { $inc: { likes_count: 1 } }); //increases the like_count by 1

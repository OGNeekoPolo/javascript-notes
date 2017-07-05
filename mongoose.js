// models/recipe.js


//Boiler plate data that has to be included when setting up a new MongoDB schema
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/database_name');

//Siimple Way to Set Up Schema

//Using a variable to store the new schema set up will allow you
//to call the schema easier in the future
const recipeSchema = new mongoose.Schema({
  //In this example, the key 'name' is a category, or column in the table.
  //The value of name is an object that contains constraints for the data that can be passed into the name column.
  //In this example, every entry must have the name field, the name must be a string, and the name must be unique.
    name: { type: String, required: true, unique: true },

    //For Mongoose schema, you must use the Number attribute and not the Integer attribute like in SQL.
    prepTime: Number,
    cookTime: Number,

    //The value of ingredients is an array with objects inside, signaling that that information does not have to be there in order for
    //the table to be created.
    ingredients: [{
        amount: { type: Number, required: true, default: 1 },
        measure: { type: String, lowercase: true, trim: true },
        ingredient: { type: String, required: true }
    }],

    //The value of steps can be a list of strings
    steps: [String],
    source: {type: String}
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;


//Creating an unsaved model
const recipe = new Recipe({name: "Pancakes", source: "Grandma"});
recipe.save()
  .then(function () {
    // actions to take on success
  })
  .catch(function () {
    // handle error
  })

//Creating a saved model and in one command
Recipe.create({name: "Pancakes"})
  .then(handleSuccess)
  .catch(handleError);

//Finding One record
Recipe.findOne({name: "Pancakes"})
  .then(handleSuccess)
  .catch(handleError);

//Finding multiple records
Recipe.find({cookTime: {$gt: 15, $lt: 60}})
  .then(handleSuccess)
  .catch(handleError);

//Complex Queries
Recipe.find({source: "Grandma"})
  .where('cookTime').lt('30') // only cookTimes < 30
  .where({ingredients: {
    $lt: {$size: 5}}}) // only recipes with less than 5 ingredients
  .limit(10) // only 10 recipes
  .skip(5) // skip the first five
  .sort("-cookTime") // sort by cookTime descending
  .select("name cookTime") // only return name and cookTime

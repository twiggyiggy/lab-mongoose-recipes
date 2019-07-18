'use strict';
//new file - separation of concerns - to only be responsible for creating the recipe template
const mongoose = require('mongoose'); // when intalled NPM INSTALL MONGOOSE. it came with its dependencies inside package.json, here we're saying explicitly which package we want to connect to 
const Schema   = mongoose.Schema; // takes a class from mongoose, and assigns it to a variable, a class inside mongoose with its own properties, methods.


 // recipeSchema, an instance of Schema, will be our template, our MODEL
const recipeSchema = new Schema({
  title: {
    type: String, // mongoose will only allow a string as a recipe
    required: true, // mongoose won't let us create a recipe without a name
    unique: true, // mongoose won't let us create a recipe with the same name as another one
  },
  level: {
    type: String,
    enum: ['Easy Peasy', 'Amateur Chef', 'UltraPro Chef']  // ENUM - to give options available, as an array (e.g. here levels of difficulty)
  },
  ingredients: {
    type: Array
  },
  cuisine: {
    type: String,
    required: true
  },
  dishType: {
    type: String,
    enum: ['Breakfast', 'Dish', 'Snack', 'Drink', 'Dessert', 'Other']
  },
  image: {
    type: String,
    default: 'https://images.media-allrecipes.com/images/75131.jpg'
  },
  duration: {
    type: Number,
    min: 0
  },
  creator: {
    type: String
  },
  created: {
    type: Date,
    default: new Date // by default - today!!! Or: Date.now() BTW what is timestamp??
  }
});
// Recipe - is a model! ()
const Recipe = mongoose.model('Recipe', recipeSchema); // model is a method (spray) that allows creation of Schemas, 'Recipe' is the name that mongo will be expecting as reference.

module.exports = Recipe; // exports the Recipe model to allow access to the contents of the file.
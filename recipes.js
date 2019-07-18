'use strict';

const mongoose = require('mongoose'); // when intalled NPM INSTALL MONGOOSE. it came with its dependencies inside package.json, here we're saying explicitly which package we want to connect to 

const data = require('./data.js');
const Recipe = require('./models/Recipe.js') // require access to the exported Recipe model from the Recipe.js file in the models folder

mongoose.connect('mongodb://localhost/recipeApp') // connects mongoose to mongo!
  .then(() => {
    console.log('Connected to Mongo!'); // what was then/catch again?
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });

  
const createOneRecipe = async () => { // this will be an async function!
  try { // since it's an asynch, TRY/CATCH!
    const response = await Recipe.create({  //create new documents in the database, based on the Schema - create is a promise
      title: 'Brocoli con patatas', // Why do we save it in a variable???????????????????
      level: 'UltraPro Chef',
      ingredients: ['brocoli', 'patatas', 'ajo', 'aceite', 'sal'],
      cuisine: 'veggie', 
      dishType: 'Dish',
      duration: 30,
      creator: 'Anna',
    })
    console.log(response.title);
  }
  catch (error) {
    console.log(error);
  }
}
// ITERATION 3 - insert many
const addManyRecipes = async (data) => {
  try {
    const response = await Recipe.insertMany(data);
    response.forEach(recipe => {console.log(recipe.title)}) // with insertMany, we connect to the database, send it data, receive data and print it.
  }
  catch(error){
    console.log(error)
  }
}

// ITERATION 4 - 
// update duration of field to 100 - Rigatoni alla Genovese. - use findOneAndUpdate()

const updateRecipe = async (data) => {
  try {
  const response = await Recipe.findOneAndUpdate({'data.title': 'Rigatoni alla Genovese'}, {'data.duration': 100});
  console.log(response)
  }
  catch (error){
    console.log(error)
  }
}


createOneRecipe();
addManyRecipes(data);
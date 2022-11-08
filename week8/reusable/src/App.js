import React, {useState} from 'react';
import SearchBar from './SearchBar';

function App() {

  const people = [
    {name: "AG", comment: "hello"}, 
    {name: "Byron", comment: "hello world"}, 
    {name: "Evelyn", comment: "goodbye world"}]; 

  const recipes = [
    {name: "cheese pizza", ingredients: ["tomato sauce", "cheese", "dough"]}, 
    {name: "spaghetti", ingredients: ["noodles", "parmesan cheese", "tomato sauce"]}, 
    {name: "ramen", ingredients: ["noodles", "broth", " ramen toppings"]}
  ]; 

  const [peopleRes, setPeopleRes] = useState([]); 
  const [recipeRes, setRecipeRes] = useState([]); 

  const searchPeople = (term) => {
    let final = people.filter((person) => {
      return person.comment.toLowerCase().includes(term.toLowerCase())
    }) 
    setPeopleRes(final) 
  }

  const searchRecipes = (term) => {
    let final = recipes.filter((recipe) => {
      return recipe.ingredients.includes(term.toLowerCase())
    }) 
    setRecipeRes(final)
  }

  console.log(recipeRes); 
  console.log(peopleRes); 

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Creating a Search Bar</h1>
      <SearchBar onClick={(term) => searchPeople(term)}>Search Comments</SearchBar>
      <b>Comment results:</b>
      {peopleRes.map((res) => (
        <p>{res.comment}</p>
      ))}
      <br></br><br></br>
      <SearchBar onClick={(term) => searchRecipes(term)}>Search Recipes</SearchBar>
      <b>Recipe results:</b>
      {recipeRes.map((res) => (
        <p>{res.name}</p>
      ))}
    </div>
  );
}

export default App;

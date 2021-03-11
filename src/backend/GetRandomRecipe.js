import React from "react";
import axios from "axios";
require("dotenv").config();

export default function GetRandomRecipe(props) {
  const API_KEY = process.env.REACT_APP_SPOONACULAR_API_KEY;

  axios
    .get("https://api.spoonacular.com/recipes/random?apiKey=" + API_KEY)
    // .get("https://cat-fact.herokuapp.com/facts")
    .then((recipe) => {
      props.changeData(recipe);
    })
    .catch((e) => {
      console.log(e);
    });
}

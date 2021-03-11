import React, { useEffect, useState } from "react";
import { isElementOfType } from "react-dom/test-utils";
import GetRandomRecipe from "../backend/GetRandomRecipe";
import ShowRecipe from "../components/ShowRecipe";

import "./Dashboard.css";

export default function Dashboard() {
  const [randomRecipe, setRandomRecipe] = useState();

  useEffect(() => {
    if (window.localStorage.getItem("recipe")) {
      const localStorageRecipe = window.localStorage.getItem("recipe");
      setRandomRecipe(JSON.parse(localStorageRecipe));
    }
  }, []);

  useEffect(() => {
    window.localStorage.removeItem("recipe");
    window.localStorage.setItem("recipe", JSON.stringify(randomRecipe));
  }, [randomRecipe]);

  function HandleRandomRecipe() {
    GetRandomRecipe({
      changeData: (val) => setRandomRecipe(val.data.recipes[0]),
    });
  }

  return (
    <div className="dashboard">
      <div className="dashboard-only">
        <h1>Random Recipe Generator</h1>
        <button onClick={() => HandleRandomRecipe()}>
          Get A Random Recipe
        </button>
      </div>
      {randomRecipe && <ShowRecipe randomRecipe={randomRecipe} />}
    </div>
  );
}

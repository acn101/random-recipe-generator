import React from "react";
import ReactHTMLParser from "react-html-parser";

import "./ShowRecipe.css";

export default function ShowRecipe(props) {
  return (
    <div className="show-recipe">
      <div className="description">
        <h1>{props.randomRecipe.title}</h1>
        <div className="general-info">
          <div className="info">
            <h3>Time</h3>
            <p>{props.randomRecipe.readyInMinutes} Minutes</p>
          </div>
          <div className="info">
            <h3>Price</h3>
            <p>${props.randomRecipe.pricePerServing}</p>
          </div>
          <div className="info">
            <h3>Servings</h3>
            <p>{props.randomRecipe.servings}</p>
          </div>
        </div>
        <div className="summary">
          <h3>Summary</h3>
          <p>{ReactHTMLParser(props.randomRecipe.summary)}</p>
        </div>
        <div className="instructions">
          <h3>Ingredients</h3>
          <div>
            {props.randomRecipe.extendedIngredients.map((ingredient, i) => {
              return (
                <div className="full-ingredient" key={i}>
                  <input className="checkbox" type="checkbox" />
                  <label>{ingredient.originalString}</label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="steps">
        {props.randomRecipe.analyzedInstructions[0].steps.map((step, i) => {
          return (
            <div className="step" key={i}>
              <div className="instructions">
                <h2>Step {i + 1}</h2>
                <div className="instruction">{step.step}</div>
              </div>
              <div className="container">
                {step.ingredients.length !== 0 && (
                  <div className="ingredients">
                    <h4>Ingredients:</h4>
                    {step.ingredients.map((ingredient, i) => {
                      return (
                        <div className="ingredient" key={i}>
                          <input className="checkbox" type="checkbox" />
                          <label>{ingredient.name}</label>
                        </div>
                      );
                    })}
                  </div>
                )}
                {step.equipment.length !== 0 && (
                  <div className="equipment">
                    <h4>Equipment</h4>
                    {step.equipment.map((equipment, i) => {
                      return (
                        <div key={i}>
                          <input className="checkbox" type="checkbox" />
                          <label>{equipment.name}</label>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <h1>🎉 All Done! 🎊</h1>
      </div>
    </div>
  );
}

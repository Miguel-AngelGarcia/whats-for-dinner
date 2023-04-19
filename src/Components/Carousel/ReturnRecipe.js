import React from "react";
import RecipeModel from "../../Models/RecipeModel";

export const ReturnRecipe = (props) => {
  const image = props.recipe.img;

  return (
    <div className="inner-most-grid" id="">
      <div>
        <img src={image} alt="Teto" />
      </div>
      <div className="text-in-img">
        <h3 id="right-recipe-title">{props.recipe.title} </h3>
        <h6 id="right-recipe-author"> {props.recipe.website} </h6>
        <h6 id="top-recipe-p"> {props.recipe.description} </h6>
      </div>
    </div>
  );
};

/*
<div className="inner-most-grid">
          <img src={require("../../Orzo.jpeg")} alt="Teto" />
          <div className="text-in-img">
            <h3 id="right-recipe-title">Recipe Title for this guy</h3>
            <h6 id="top-recipe-p">
              Just a generic description. will get more soon I am sure.
            </h6>
          </div>
        </div> */

/* 
export const ReturnRecipe = (props) => {
  console.log(props);
  return (
    <div className="inner-most-grid">
      {props.recipe.img ? (
        <img src={props.recipe.img} alt="food" />
      ) : (
        <img src="" alt="not here" />
      )}
      <h3 id="right-recipe-title">{props.title} </h3>
      <h6 id="top-recipe-p"> {props.website} </h6>
    </div>
  );
};*/

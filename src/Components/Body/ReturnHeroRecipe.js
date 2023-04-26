import React from "react";
import RecipeModel from "../../Models/RecipeModel";

export const ReturnHeroRecipe = (props) => {
  const image = props.recipe.img;

  return (
    <div className="">
      <a href={props.recipe.url} target="_blank" className="url-blue-elim">
        <img className="" src={image} alt="Teto" />
      </a>
      <div className="text-in-hero">
        <a href={props.recipe.url} target="_blank" className="hover-underline">
          <h1 id="hero-recipe-title">{props.recipe.title}</h1>
        </a>
        <h3 id="hero-recipe-author">{props.recipe.website}</h3>
        <h3 id="top-recipe-p">{props.recipe.description}</h3>
      </div>
    </div>
  );
};

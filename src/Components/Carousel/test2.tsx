import React from "react";
import RecipeModel from "../../Models/RecipeModel";

export const ReturnRecipe: React.FC<{ recipe: RecipeModel }> = (props) => {
  return (
    <div>
      <div className="">
        {props.recipe.img ? (
          <img src={props.recipe.img} />
        ) : (
          <img src={"../../../"} />
        )}
        <h6>{props.recipe.title} </h6>
        <p> {props.recipe.website} </p>
      </div>
    </div>
  );
};

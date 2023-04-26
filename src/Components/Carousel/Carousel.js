//Carousel.js
import { styledImage } from "./Carousel.styled";
import { useEffect, useState } from "react";
import RecipeModel from "../../Models/RecipeModel";
import { ReturnRecipe } from "./ReturnRecipe";

export const Carousel = (props) => {
  const [recipes, setRecipes] = useState([]);
  console.log("arr", props.recipesSent);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      const loadedRecipes = props.recipesSent;

      setRecipes(loadedRecipes);
      setIsLoading(false);
    };
    fetchRecipes().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  });

  if (isLoading) {
    return (
      <div className="container m-5">
        <p>Loading...</p>
      </div>
    );
  }

  if (httpError) {
    return (
      <div className="container m-5">
        <p>{httpError}</p>
      </div>
    );
  }

  return (
    <div className="inner-grid">
      <div className="" id="pic">
        {recipes.slice(0, 1).map((recipe) => (
          <ReturnRecipe recipe={recipe} key={recipe.id} />
        ))}
      </div>
      <div className="" id="pic">
        {recipes.slice(1, 2).map((recipe) => (
          <ReturnRecipe recipe={recipe} key={recipe.id} />
        ))}
      </div>
      <div className="" id="pic">
        {recipes.slice(2, 3).map((recipe) => (
          <ReturnRecipe recipe={recipe} key={recipe.id} />
        ))}
      </div>
    </div>
  );
};

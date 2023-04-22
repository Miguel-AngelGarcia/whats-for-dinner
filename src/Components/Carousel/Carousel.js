//Carousel.js
import { styledImage } from "./Carousel.styled";
import { useEffect, useState } from "react";
import RecipeModel from "../../Models/RecipeModel";
import { ReturnRecipe } from "./ReturnRecipe";

export const Carousel = () => {
  const [recipes, setRecipes] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  /*calling a function, and all code will go inside brackets.*/
  useEffect(() => {
    /*async we need to wait for a promise to come back
    ALSO make sure you just pop after selecting number once */
    const rightSideElem = 3; /*document.getElementsByClassName("inner-most-grid")*/

    const fetchRecipes = async () => {
      const loadedRecipes = [];

      for (let index = 0; index < 3; index++) {
        const urlNum = Math.floor(Math.random() * 15 + 1);

        const baseURL = "http://localhost:8080/api/recipes";
        const url = `${baseURL}/${urlNum}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("something went wrong!");
        }
        const responseJSON = await response.json();
        //console.log(responseJSON);
        const responseData = responseJSON;
        console.log("render");
        if (responseData) {
          loadedRecipes.push({
            id: responseData.id,
            title: responseData.title,
            website: responseData.website,
            url: responseData.url,
            category: responseData.category,
            description: responseData.description,
            img: responseData.img,
          });
        }
      }
      setRecipes(loadedRecipes);
      setIsLoading(false);
    };
    fetchRecipes().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

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

/*
return (
  <div className="gallery gallery--thumb-post">
    <div className="inner-grid">
      <div className="inner-most-grid">
        <img src={require("../../Orzo.jpeg")} alt="Teto" />
        <div>
          <h3>Recipe Title for this guy</h3>
          <h6>Just a generic description. will get more soon I am sure.</h6>
        </div>
      </div>
      <div className="inner-most-grid">
        <img src={require("../../Orzo.jpeg")} alt="Teto" />
        <div>
          <h3>Recipe Title for this guy</h3>
          <h6>Just a generic description. will get more soon I am sure.</h6>
        </div>
      </div>
      <div className="inner-most-grid">
          {recipes.map((recipe) => (
            <ReturnRecipe recipe={recipe} />
      </div>
    </div>
  </div>
  */

/*<img src={require("../../pesto.jpeg")} alt="Teto" />
          <div className="text-in-img">
            <h3 id="right-recipe-title">Recipe Title for this guy</h3>
            <h6 id="top-recipe-p">
              Just a generic description. will get more soon I am sure.
            </h6>
          </div> */

/*
      const baseURL = "http://localhost:8080/api/recipes";
      const url = `${baseURL}/1`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("something went wrong!");
      }
      const responseJSON = await response.json();
      //console.log(responseJSON);
      const responseData = responseJSON;

      const loadedRecipes = [];

      if (responseData) {
        loadedRecipes.push({
          id: responseData.id,
          title: responseData.title,
          website: responseData.website,
          url: responseData.url,
          category: responseData.category,
          description: responseData.description,
          img: responseData.img,
        });
      }

      for (responseData) {
        loadedRecipes.push({
          id: responseData.id,
          title: responseData.title,
          website: responseData.website,
          url: responseData.url,
          category: responseData.category,
          description: responseData.description,
          img: responseData.img,
        });

      setRecipes(loadedRecipes);
      setIsLoading(false);
      } */

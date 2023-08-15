//Body

import { Carousel } from "../Carousel/Carousel";
import "../../App.css";
import { useScrollPosition } from "../../Hooks/";
import { MonthlyMainstay } from "../MonthlyMainstay/MonthlyMainstay";
import { useState, useEffect } from "react";
import { ReturnHeroRecipe } from "./ReturnHeroRecipe";

import { createClient } from "@supabase/supabase-js";

export const Body = (props, key) => {
  const SUPABASE_URL = "https://isfbfwecvnympjtiqgup.supabase.co";
  const SUPABASE_ANON_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlzZmJmd2Vjdm55bXBqdGlxZ3VwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTExOTM2ODYsImV4cCI6MjAwNjc2OTY4Nn0.RXXfuu2z6vqju80q_kqNo8e-gJMxbpIHA-LLi48G_yM";
  const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  let image = props;
  console.log("HI", props, key);
  function shuffle(arr) {
    var j, x, index;
    for (index = arr.length - 1; index > 0; index--) {
      j = Math.floor(Math.random() * (index + 1));
      x = arr[index];
      arr[index] = arr[j];
      arr[j] = x;
    }
    return arr;
  }

  function setArrays(recipeIDsArray) {
    console.log("SETARRA", recipeIDsArray);
    for (const eachRecipe in recipeIDsArray) {
      allRecipeId.push(recipeIDsArray[eachRecipe].id);

      if (recipeIDsArray[eachRecipe].category === "Vegetarian") {
        allVegetarianId.push(recipeIDsArray[eachRecipe].id);
      }

      if (recipeIDsArray[eachRecipe].category === "Vegan") {
        allVegetarianId.push(recipeIDsArray[eachRecipe].id);
        allVeganId.push(recipeIDsArray[eachRecipe].id);
      }
    }
    shuffle(allRecipeId);
    shuffle(allVegetarianId);
    shuffle(allVeganId);
  }

  const [recipes, setRecipes] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  const [category, setCategory] = useState("");

  const [currentRecipesArray, setCurrentRecipesArray] = useState([]);

  const [allRecipeId, setAllRecipeId] = useState([]);
  const [allVegetarianId, setAllVegetarianId] = useState([]);
  const [allVeganId, setAllVeganId] = useState([]);

  const [recipeArrayLoaded, setRecipeArrayLoaded] = useState(false);
  const [recipeIDCategories, setRecipeIDCategories] = useState([]); //look into here again

  const [ready, setReady] = useState(false);

  /*calling a function, and all code will go inside brackets.*/
  /*
  useEffect(() => {
    //async we need to wait for a promise to come back
    //ALSO make sure you just pop after selecting number once
    const fetchRecipesIDs = async () => {
      const allRecipesUrl = "http://localhost:8080/api/allRecipes";
      const idResponse = await fetch(allRecipesUrl);
      if (!idResponse.ok) {
        throw new Error("something went wrong!");
      }
      const idResponseJSON = await idResponse.json();
      console.log(idResponseJSON);
      const idResponseData = idResponseJSON._embedded.allRecipes;
      console.log(idResponseData);

      const loadedRecipeIDs = [];

      for (const key in idResponseData) {
        loadedRecipeIDs.push({
          id: idResponseData[key].id,
          category: idResponseData[key].category,
        });
      }
      setRecipeIDCategories(loadedRecipeIDs);
      setIsLoading(false);
      setArrays(loadedRecipeIDs);
      setRecipeArrayLoaded(true);
      console.log("running 1st");

      const test = props.sentCategory;
      setCategory(test);
      console.log("setting cat", test);
    };
    fetchRecipesIDs().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  */
  /*
  useEffect(() => {
    //async we need to wait for a promise to come back
    //ALSO make sure you just pop after selecting number once
    if (recipeArrayLoaded) {
      console.log("here now in 2nd");
      console.log("going to use cat", category);

      let categoryToUse = allRecipeId;

      if (category === "Vegetarian") {
        categoryToUse = allVegetarianId;
      } else if (category === "Vegan") {
        categoryToUse = allVeganId;
      }
      const fetchRecipes = async () => {
        console.log("yea, all", categoryToUse);
        const loadedRecipes = [];

        for (let index = 0; index < 4; index++) {
          //shuffle(recipeIDCategories);
          const urlNum = categoryToUse[index];

          const baseURL = "http://localhost:8080/api/recipes";
          const url = `${baseURL}/${urlNum}`;
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error("something went wrong!");
          }
          const responseJSON = await response.json();

          //console.log(responseJSON);
          const responseData = responseJSON;

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
        setReady(true);
      };
      fetchRecipes().catch((error) => {
        setIsLoading(false);
        setHttpError(error.message);
      });
    }
  }, [category]); */

  useEffect(() => {
    //async we need to wait for a promise to come back
    //ALSO make sure you just pop after selecting number once
    const fetchRecipesIDs = async () => {
      let { data: All_Recipe, error } = await supabase
        .from("All_Recipe")
        .select("*");

      console.log(
        "ALLRECIPES",
        String(supabase.from("All_Recipe").select("*"))
      );

      const loadedRecipeIDs = [];

      for (const key in All_Recipe) {
        console.log(All_Recipe[key].id, "EEP");
        loadedRecipeIDs.push({
          id: All_Recipe[key].id,
          category: All_Recipe[key].category,
        });
      }

      setRecipeIDCategories(loadedRecipeIDs);
      setIsLoading(false);
      setArrays(loadedRecipeIDs);
      setRecipeArrayLoaded(true);
      console.log("running 1st");

      const test = props.sentCategory;
      setCategory(test);
      console.log("setting cat", test);
    };
    fetchRecipesIDs().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  useEffect(() => {
    /*async we need to wait for a promise to come back
    ALSO make sure you just pop after selecting number once */
    if (recipeArrayLoaded) {
      console.log("here now in 2nd");
      console.log("going to use cat", category);

      let categoryToUse = allRecipeId;

      if (category === "Vegetarian") {
        categoryToUse = allVegetarianId;
      } else if (category === "Vegan") {
        categoryToUse = allVeganId;
      }
      const fetchRecipes = async () => {
        console.log("yea, all", categoryToUse);
        const loadedRecipes = [];

        for (let index = 0; index < 4; index++) {
          //shuffle(recipeIDCategories);
          const urlNum = categoryToUse[index];
          console.log("INEX", urlNum);

          let { data: Recipes, error } = await supabase
            .from("Recipes")
            .select("*")
            .eq("id", urlNum);

          console.log("INRECIPES", Recipes, Recipes[0].title);

          if (Recipes) {
            loadedRecipes.push({
              id: Recipes[0].id,
              title: Recipes[0].title,
              website: Recipes[0].website,
              url: Recipes[0].url,
              category: Recipes[0].category,
              description: Recipes[0].description,
              img: Recipes[0].img,
            });
          }
        }
        setRecipes(loadedRecipes);
        setIsLoading(false);
        setReady(true);
      };
      fetchRecipes().catch((error) => {
        setIsLoading(false);
        setHttpError(error.message);
      });
    }
  }, [category]);

  return (
    <div className="wrapper">
      <div className="gallery--hero-post">
        {recipes.slice(0, 1).map((recipe) => (
          <ReturnHeroRecipe recipe={recipe} key={recipe.id} />
        ))}
        <div className="blank-hero-gallery-space"></div>
      </div>
      <div className="gallery--thumb-post">
        <Carousel recipesSent={recipes.slice(1, 4)} />
      </div>
    </div>
  );
};

/*
return (
    <div className="wrapper">
      <div className="gallery--hero-post">
        <div className="">
          <img className="" src={require("../../salmon.jpg")} alt="Teto" />
          <div className="text-in-hero">
            <h1 id="hero-recipe-title">Title of this recipe</h1>
            <h3 id="hero-recipe-author">author/website</h3>
            <h3 id="top-recipe-p">description for this top recipe</h3>
          </div>
        </div>
        <div className="blank-hero-gallery-space"></div>
      </div>
      <div className="gallery--thumb-post">
        <Carousel />
      </div>
    </div>
  );
  */

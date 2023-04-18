import RecipeModel from "../../Models/RecipeModel";
import { useState, useEffect } from "react";

export const Carousel = () => {
  const [recipes, setRecipes] = useState<RecipeModel[]>([]);

  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    /*async we need to wait for a promise to come back */
    const fetchRecipes = async () => {};
    fetchRecipes().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);
};

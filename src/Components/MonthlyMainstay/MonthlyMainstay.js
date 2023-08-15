//MonthlyMainstay.js
import { useEffect, useState } from "react";
import { ReturnRecipe } from "../Carousel/ReturnRecipe";
import { ReturnMonthlyMainstay } from "./ReturnMonthlyMainstay";
import { Ignore } from "../Ignore/Ignore";

import { createClient } from "@supabase/supabase-js";

export const MonthlyMainstay = () => {
  const [monthlyMainstays, setMonthlyMainstays] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  const db_info = Ignore;
  const supabase = createClient(
    db_info[0].SUPABASE_URL,
    db_info[0].SUPABASE_ANON_KEY
  );

  /*Calling a function, all ode goes inside brackets */

  useEffect(() => {
    const fetchMonthlyMainstays = async () => {
      /*Got an error of table not exisiting 
          renamed "MonthylMainstays" -> "Monthly_Mainstays"
        */

      let { data: Monthly_Mainstays, error } = await supabase
        .from("Monthly_Mainstays")
        .select("*");

      const loadedMonthlyMainstays = [];

      for (const key in Monthly_Mainstays) {
        loadedMonthlyMainstays.push({
          id: Monthly_Mainstays[key].id,
          title: Monthly_Mainstays[key].title,
          website: Monthly_Mainstays[key].website,
          url: Monthly_Mainstays[key].url,
          category: Monthly_Mainstays[key].category,
          description: Monthly_Mainstays[key].description,
          img: Monthly_Mainstays[key].img,
        });
      }

      setMonthlyMainstays(loadedMonthlyMainstays);
      setIsLoading(false);
    };
    fetchMonthlyMainstays().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []); /*Want it '[]' static, but if we defined, would rerender*/

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
    <section className="section-stuff">
      <div className="monthlyMainstayWrapper">
        <div>
          <h2 id="title">monthly mainstays</h2>
          <div id="below-title">Some stuff you gotta keep on rotation</div>
        </div>
        <div className="content">
          {monthlyMainstays.map((monthlyMainstay) => (
            <ReturnMonthlyMainstay
              monthlyMainstay={monthlyMainstay}
              key={monthlyMainstay.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

/*
useEffect(() => {
    const fetchMonthlyMainstays = async () => {
      const baseURL = "http://localhost:8080/api/monthlyMainstays";
      const url = `${baseURL}?page=0&Size=5`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const responseJSON = await response.json();
      const responseData = responseJSON._embedded.monthlyMainstays;

      const loadedMonthlyMainstays = [];

      for (const key in responseData) {
        loadedMonthlyMainstays.push({
          id: responseData[key].id,
          title: responseData[key].title,
          website: responseData[key].website,
          url: responseData[key].url,
          category: responseData[key].category,
          description: responseData[key].description,
          img: responseData[key].img,
        });
      }

      setMonthlyMainstays(loadedMonthlyMainstays);
      setIsLoading(false);
    };
    fetchMonthlyMainstays().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);
     */

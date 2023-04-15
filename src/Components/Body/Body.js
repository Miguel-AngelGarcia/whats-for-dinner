//Body

import { Carousel } from "../Carousel/Carousel";
import "../../App.css";
import { useScrollPosition } from "../../Hooks/";
import { MonthlyMainstay } from "../MonthlyMainstay/MonthlyMainstay";

export const Body = () => {
  const scrollPosition = useScrollPosition();

  console.log(scrollPosition);
  let scroll =
    scrollPosition > 500 ? "gallery--thumb-post fixed " : "gallery--thumb-post";
  //console.log(scroll);

  return (
    <div className="wrapper">
      <div class="gallery--hero-post">
        <div className="">
          <img src={require("../../Orzo.jpeg")} alt="Teto" />
          <div className="text-in-hero">
            <h1 id="hero-recipe-title">Title of this recipe</h1>
            <h3>description for this top recipe</h3>
          </div>
        </div>
      </div>
      <div className="">
        <div class="gallery--thumb-post">
          <div className="">
            <Carousel />
          </div>
        </div>
      </div>
    </div>
  );
};

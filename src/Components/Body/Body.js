//Body

import { Carousel } from "../Carousel/Carousel";
import "../../App.css";
import { useScrollPosition } from "../../Hooks/";
import { MonthlyMainstay } from "../MonthlyMainstay/MonthlyMainstay";

export const Body = () => {
  const scrollPosition = useScrollPosition();
  const windowHeight = window.innerHeight;

  let heroContent = document.getElementsByClassName("gallery--hero-post")[0];
  let heroImage = document.getElementsByClassName("hero-content")[0];

  let scroll = scrollPosition > windowHeight ? "fixed" : "";

  return (
    <div className="wrapper">
      <div className="gallery--hero-post">
        <div className={scroll}>
          <img
            className="hero-image"
            src={require("../../Orzo.jpeg")}
            alt="Teto"
          />
          <div className="text-in-hero">
            <h1 id="hero-recipe-title">Title of this recipe</h1>
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
};

//Carousel.js
import { styledImage } from "./Carousel.styled";

export const Carousel = () => {
  return (
    <div className="gallery gallery--thumb-post">
      <div className="inner-grid">
        <div className="inner-most-grid">
          <img src={require("../../Orzo.jpeg")} alt="Teto" />
          <div className="text-in-img">
            <h3 id="right-recipe-title">Recipe Title for this guy</h3>
            <h6 id="right-recipe-p">
              Just a generic description. will get more soon I am sure.
            </h6>
          </div>
        </div>
        <div className="inner-most-grid">
          <img src={require("../../Orzo.jpeg")} alt="Teto" />
          <div className="text-in-img">
            <h3 id="right-recipe-title">Recipe Title for this guy</h3>
            <h6 id="right-recipe-p">
              Just a generic description. will get more soon I am sure.
            </h6>
          </div>
        </div>
        <div className="inner-most-grid">
          <img src={require("../../Orzo.jpeg")} alt="Teto" />
          <div className="text-in-img">
            <h3 id="right-recipe-title">Recipe Title for this guy</h3>
            <h6 id="right-recipe-p">
              Just a generic description. will get more soon I am sure.
            </h6>
          </div>
        </div>
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
        <img src={require("../../Orzo.jpeg")} alt="Teto" />
        <div>
          <h3>Recipe Title for this guy</h3>
          <h6>Just a generic description. will get more soon I am sure.</h6>
        </div>
      </div>
    </div>
  </div>
  */

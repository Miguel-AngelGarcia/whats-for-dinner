//Carousel.js
import { styledImage } from "./Carousel.styled";

export const Carousel = () => {
  return (
    <div className="gallery gallery--thumb-post">
      <div className="inner-grid">
        <div>
          <img src="https://placehold.jp/450x600.png" alt="Teto" />
          <h3>Recipe Title for this guy</h3>
          <h6>Just a generic description. will get more soon I am sure.</h6>
        </div>
        <div>
          <img src={require("../../Orzo.jpeg")} alt="Teto" />
          <h3>Recipe Title for this guy</h3>
          <h6>Just a generic description. will get more soon I am sure.</h6>
        </div>
        <div>
          <img src={require("../../Orzo.jpeg")} alt="Teto" />
          <h3>Recipe Title for this guy</h3>
          <h6>Just a generic description. will get more soon I am sure.</h6>
        </div>
      </div>
    </div>
  );
};

//Body

import { Carousel } from "../Carousel/Carousel";
import "../../App.css";

export const Body = () => {
  return (
    <div className="wrapper">
      <div className="box1">
        <div class="gallery--hero-post">
          <img src={require("../../Orzo.jpeg")} alt="Teto" />
          <h1>Title of this recipe</h1>
          <h3>description for this top recipe</h3>
        </div>
      </div>
      <div className="box2">
        <div class="gallery--thumb-post">
          <Carousel />
        </div>
      </div>
    </div>
  );
};

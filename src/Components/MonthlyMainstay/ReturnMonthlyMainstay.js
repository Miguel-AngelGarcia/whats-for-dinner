import React from "react";
import RecipeModel from "../../Models/RecipeModel";

export const ReturnMonthlyMainstay = (props) => {
  const image = props.monthlyMainstay.img;

  return (
    <div className="item">
      <div className="mainstay-image">
        <a
          href={props.monthlyMainstay.url}
          target="_blank"
          className="url-blue-elim"
        >
          <img src={image} alt="Teto" />
        </a>
      </div>
      <div className="mainstay-text">
        <a
          href={props.monthlyMainstay.url}
          target="_blank"
          className="hover-underline"
        >
          <div>
            <h3 id="mm-title">{props.monthlyMainstay.title}</h3>
          </div>
        </a>
        <h6 id="mm-p">{props.monthlyMainstay.description}</h6>
      </div>
    </div>
  );
};

/**
 return (
    <div className="content">
      <div className="item">
        <div className="mainstay-image">
          <a href={props.recipe.url} target="_blank" className="url_blue_elim">
            <img src={image} alt="Teto" />
          </a>
        </div>
        <div className="text">
          <a
            href={props.recipe.url}
            target="_blank"
            className="hover-underline"
          >
            <h3 id="mm-title">{props.recipe.title}</h3>
          </a>
          <h6 id="mm-p">{props.recipe.description}</h6>
        </div>
      </div>
    </div>
  );
 */

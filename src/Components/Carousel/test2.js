"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnRecipe = void 0;
var react_1 = require("react");
var ReturnRecipe = function (props) {
    return (<div>
      <div className="">
        {props.recipe.img ? (<img src={props.recipe.img}/>) : (<img src={"../../../"}/>)}
        <h6>{props.recipe.title} </h6>
        <p> {props.recipe.website} </p>
      </div>
    </div>);
};
exports.ReturnRecipe = ReturnRecipe;

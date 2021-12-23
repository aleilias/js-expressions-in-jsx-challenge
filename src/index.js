//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

import React from "react";
import ReactDOM from "react-dom";

const name = "Alejandra Ilias";
const newDate = new Date();
const currentYear = newDate.getFullYear();

ReactDOM.render(
  <div>
    <p>Created by {name}.</p>
    <p>Copyright {currentYear}.</p>
  </div>,
  document.querySelector("#root")
);

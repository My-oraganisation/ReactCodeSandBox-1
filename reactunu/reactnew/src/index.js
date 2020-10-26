import React from "react";
import ReactDOM from "react-dom";
import FC from "./App.jsx";
import {NewComp,Updatecomp} from "./Higherorederccomp";
import { Fnccomp, Clickcounter, Cilckhover } from "./App.jsx";
//import "./bell-silent.png"
//import ".bell_2.png"
//import Fck,{ Newapp} from "./App";

const rootElement = document.getElementById("root");
//const myelement = document.getElementById("root1");

ReactDOM.render(
  <div>
    <FC />
    <Updatecomp name= "learner 1" place = "chennai" />
    <NewComp Displayname="New comp index clicked"/>
   < Clickcounter headerProp = "RAvi counter" contentProp = "Content from props..."/>
    <Fnccomp />
    <Clickcounter />
    <Cilckhover />
  </div>,
  //    <Fck />
  //myelement,
  rootElement
);

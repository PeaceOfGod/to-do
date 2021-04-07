import React, { Component } from "react";
import "../App.css";
import { BoxComponent } from "./BoxComponent";
import { LastBox } from "./LastBox";
import { MiddleBox } from "./MiddleBox";
import MyClock from "./MyClock";

export class Screen extends Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
        <MyClock date={new Date()} />
        <BoxComponent />
        <MiddleBox />
        <LastBox />
      </div>
    );
  }
}



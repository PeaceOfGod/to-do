import React, { Component } from "react";
import Clock from "react-clock";

import '../App.css'

export default class MyClock extends Component {
  render() {
    console.log('this.props.....', this.props)
    return (
      <div>
        <Clock />
      </div>
    );
  }
}

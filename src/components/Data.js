import React, { Component } from "react";

export default class Data extends Component {
  render() {
    const { name } = this.props.item;
    return (
      <div
        className="form-check"
        style={{
          marginTop: "20%",
          marginLeft: "8%",
	  display: "block"
        }}
      >
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
          style={{marginBottom: "-10px", marginRight: "10px" }}
        ></input>
        <label className="form-check-label" htmlFor="flexCheckDefault">
          {name}
        </label>
      </div>
    );
  }
}

import React, { Component } from "react";
//import MyClock from './MyClock';
import PeaceClock from './PeaceClock';
import { List, PlusSquare } from 'react-bootstrap-icons';

export class BoxComponent extends Component {  
  state = {
    date: new Date(),
  };

  componentDidMount() {
    setInterval(() => this.setState({ date: new Date() }), 1000);
  }

  render() {
    const myStyle = {
      border: "#f1f4f6 solid 3px",
      height: "550px",
      width: "15%",
      borderRadius: "20px",
      marginTop: "10%",
      marginLeft: "20%",
      backgroundColor: "#f1f4f6",
      direction: "flex",
    };
    const innerBox = {
      position: "fixed",
      border: "#ffffff solid",
      height: "200px",
      width: "160px",
      borderRadius: "30px 30px 20px 20px",
      boxShadow: "8px 10px #e0e8ef",
      marginTop: "17%",
      marginLeft: "10px",
      backgroundColor: "#ffffff",
    };

    const innermostBox = {
      position: "fixed",
      border: "#1d99ff",
      height: "200px",
      width: "80px",
      borderRadius: "30px 0px 0px 20px",
      boxShadow: "1px 10px #e0e8ef",
      marginTop: "17.3%",
      marginLeft: "11%",
      backgroundColor: "#1d99ff",
    };

    function handleClick () {
      
    }

    function addTask () {
      
    }
    return (
      <div style={myStyle}>
      <List onClick={handleClick()} className="bi bi-list" color="blue" style={{position: "fixed", marginTop: "10px", marginLeft: "10px"}}/>        
        <h2 style={{position: "fixed", marginTop: "2.5%", color: "#cfd8e0"}}>Good afternoon,</h2>
        <h4 style={{position: "fixed", marginTop: "4%", color: "#71bcfb"}}>Robert Anderson</h4>
        <div className="Clock" style={{position: "fixed", marginLeft: "3.5%", marginTop: "6%"}}>
            <PeaceClock size={150} timeFormat="24hour" hourFormat="standard" />
        </div>
        <h3 style={{position: "fixed", marginTop: "15%", marginLeft: "15px", color: "lightblue"}}> <b>Tasks</b>     Lists</h3>
        <PlusSquare onClick={addTask()} className="bi bi-plus-square" color="red" style={{height: "25px", width: "30px", marginTop: "15%", marginLeft: "12%", position: "fixed"}}/>
        <div style={{position: "fixed"}}>
            <div style={innerBox}></div>
            <div style={innermostBox}></div>
        </div>        
      </div>
    );
  }
}

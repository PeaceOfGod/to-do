import React, { Component } from "react";
//import MyClock from './MyClock';
import PeaceClock from './PeaceClock';
import { List, PlusSquare } from 'react-bootstrap-icons';
import Data from './Data';

export class BoxComponent extends Component {  
  state = {
    date: new Date(),
    tasks: []
  };

  componentDidMount() {
    setInterval(() => this.setState({ date: new Date() }), 1000);
    this.handleDisplay();
  }

  handleDisplay() {
    fetch(
      "https://api.fake.rest/189bf93b-4d78-4f00-86ac-76d87cfccbd1/task/list",
      {
        method: "GET",
        header: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ tasks: data.data });
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  styles = {
    myStyle: {
      border: "#f1f4f6 solid 3px",
      height: "550px",
      width: "15%",
      borderRadius: "20px",
      marginTop: "10%",
      marginLeft: "20%",
      backgroundColor: "#f1f4f6",
      direction: "flex",
    },
    innerBox: {
      position: "fixed",
      border: "#ffffff solid",
      height: "200px",
      width: "160px",
      borderRadius: "30px 30px 20px 20px",
      boxShadow: "8px 10px #e0e8ef",
      marginTop: "17%",
      marginLeft: "10px",
      backgroundColor: "#ffffff",
      color: '#bbc7d2'
      
    },
  
    innermostBox: {
      position: "fixed",
      border: "#1d99ff",
      height: "200px",
      width: "80px",
      borderRadius: "30px 0px 0px 20px",
      boxShadow: "1px 10px #e0e8ef",
      marginTop: "17.3%",
      marginLeft: "11%",
      backgroundColor: "#1d99ff",  
      color: 'white'    
    }
  }
   
  
  render() {
    const { tasks } = this.state;
    const smallTasks = tasks.slice(0, 2);
    const lastTasks = tasks.slice(0, 1);

    function handleClick () {
      
    }

    function addTask () {
      
    }
    return (
      <div style={this.styles.myStyle}>
      <List onClick={handleClick()} className="bi bi-list" color="blue" style={{position: "fixed", marginTop: "10px", marginLeft: "10px"}}/>        
        <h2 style={{position: "fixed", marginTop: "2.5%", color: "#cfd8e0"}}>Good afternoon,</h2>
        <h4 style={{position: "fixed", marginTop: "4%", color: "#71bcfb"}}>Robert Anderson</h4>
        <div className="Clock" style={{position: "fixed", marginLeft: "3.5%", marginTop: "6%"}}>
            <PeaceClock size={150} timeFormat="24hour" hourFormat="standard" />
        </div>
        <h3 style={{position: "fixed", marginTop: "15%", marginLeft: "15px", color: "lightblue"}}> <b>Tasks</b>     Lists</h3>
        <PlusSquare onClick={addTask()} className="bi bi-plus-square" color="red" style={{height: "25px", width: "30px", marginTop: "15%", marginLeft: "12%", position: "fixed"}}/>
        <div style={{position: "fixed"}}>
            <div style={this.styles.innerBox}>
              {tasks.length > 0 && smallTasks.map((elem) => <del><Data item={elem}/></del>)}
            </div>
            <div style={this.styles.innermostBox}>
              {tasks.length > 0 && lastTasks.map((elem) => <Data item={elem} />)}
            </div>
        </div>        
      </div>
    );
  }
}
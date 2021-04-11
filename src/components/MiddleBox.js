import React, { Component } from 'react';
import { CaretLeftFill, PersonCircle, Plus } from 'react-bootstrap-icons';
import Data from './Data';

export class MiddleBox extends Component {
    state = {
        tasks: [],
      };
    
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
    
      componentDidMount() {
        this.handleDisplay();
      }

      styles = {
        middleBoxStyle:{
            border: "#f1f4f6 solid 1px",
            height: "550px",
            width: "15%",
            borderRadius: "20px",
            marginTop: "10%",
            marginLeft: "6%",
            backgroundColor: "#f1f4f6"
        },
        innerBox: {
          border: "#ffffff solid",
          height: "400px",
          width: "auto",
          color: "#bbc7d2",
          borderRadius: "0 30px 20px 20px",
          marginTop: "20%",
          backgroundColor: "#ffffff"
        },
        innermostBox: {
          position: 'fixed',
          border: "#1d99ff",
          height: "123px",
          width: "15%",
          borderRadius: "0 30px 20px 20px",
          marginTop: "7.5%",
          marginLeft: "-2px",
          backgroundColor: "#1d99ff",
          color: 'white'
        }
      }
    render(){
        const { tasks } = this.state;
    const smallTasks = tasks.slice(0, 2)
    const littleTasks = tasks.slice(0, 1)

    console.log("Tasks...", tasks);

    const { middleBoxStyle, innerBox, innermostBox } = this.styles;
        
        return(
            <div style={middleBoxStyle}>
            <CaretLeftFill className="bi bi-caret-left" color="#1d99ff" style={{position: "fixed", marginTop: "10px", marginLeft: "10px"}}/>
            <PersonCircle className="bi bi-person-circle" color="#1d99ff" style={{marginLeft: "85%", marginTop: "10px"}}/>
            <h3  style={{position: "fixed", color: "#9aacbd", marginTop: "4%", marginLeft: "45px"}}><b>Daily Task</b></h3>
            <Plus color="#1d99ff" style={{position: "fixed", height: "35px", width: "30px", marginTop: "5%", marginLeft: "-45px"}} className="bi bi-plus"/>
                <div style={innerBox}>
                {tasks.length > 0 && smallTasks.map((elem) => <Data item={elem}/>)}
                    <div style={innermostBox}>
                        <h3 style={{position: "fixed", color: "white", marginLeft: "2%", marginTop: "1%"}}>Tense Tuesday</h3>
                        <Plus color="white" style={{position: "fixed", height: "35px", width: "30px", marginTop: "1%", marginLeft: "11.5%"}} className="bi bi-plus"/>
                        {tasks.length > 0 && littleTasks.map((elem) => <Data item={elem}/>)}
                    </div>
                </div>
            </div>
        )
    }
}
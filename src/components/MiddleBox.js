import React, { Component } from 'react';
import { CaretLeftFill, PersonCircle, Plus } from 'react-bootstrap-icons';

export class MiddleBox extends Component {
    render(){
        const middleBoxStyle = {
            border: "#f1f4f6 solid 1px",
            height: "550px",
            width: "15%",
            borderRadius: "20px",
            marginTop: "10%",
            marginLeft: "6%",
            backgroundColor: "#f1f4f6"
        }
        const innerBox = {
            border: "#ffffff solid",
            height: "400px",
            width: "auto",
            borderRadius: "0 30px 20px 20px",
            marginTop: "20%",
            backgroundColor: "#ffffff"
        }
        const innermostBox = {
            border: "#1d99ff",
            height: "123px",
            width: "103%",
            borderRadius: "0 30px 20px 20px",
            marginTop: "120%",
            marginLeft: "-4px",
            backgroundColor: "#1d99ff"
        }
        return(
            <div style={middleBoxStyle}>
            <CaretLeftFill className="bi bi-caret-left" color="blue" style={{position: "fixed", marginTop: "10px", marginLeft: "10px"}}/>
            <PersonCircle className="bi bi-person-circle" color="blue" style={{marginLeft: "85%", marginTop: "10px"}}/>
            <h3  style={{position: "fixed", color: "#9aacbd", marginTop: "4%", marginLeft: "45px"}}><b>Daily Task</b></h3>
            <Plus color="blue" style={{position: "fixed", height: "35px", width: "30px", marginTop: "5%", marginLeft: "-45px"}} className="bi bi-plus"/>
                <div style={innerBox}>
                    <div style={innermostBox}>
                        <h3 style={{position: "fixed", color: "white", marginLeft: "2%", marginTop: "1%"}}>Tense Tuesday</h3>
                        <Plus color="white" style={{position: "fixed", height: "35px", width: "30px", marginTop: "1%", marginLeft: "11.5%"}} className="bi bi-plus"/>
                    </div>
                </div>
            </div>
        )
    }
}
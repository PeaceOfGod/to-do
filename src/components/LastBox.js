import React, { Component } from 'react';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import { CaretLeftFill, PersonCircle, Plus } from 'react-bootstrap-icons';

export class LastBox extends Component {
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
            marginTop: "12%",
            backgroundColor: "#ffffff"
        }

        const innermostBox = {
            border: "#1d99ff",
            height: "410px",
            width: "103%",
            borderRadius: "0 30px 20px 20px",
            marginTop: "26%",
            marginLeft: "-4px",
            backgroundColor: "#1d99ff"
        }
       
        return(
            <div style={middleBoxStyle}>
            <CaretLeftFill className="bi bi-caret-left" color="blue" style={{position: "fixed", marginTop: "10px", marginLeft: "10px"}}/>
            <PersonCircle className="bi bi-person-circle" color="blue" style={{marginLeft: "85%", marginTop: "10px"}}/>
            <h3 style={{position: "fixed", color: "#9aacbd", marginTop: "3%", marginLeft: "45px"}}><b>Daily Task</b></h3>
            <Plus color="blue" style={{position: "fixed", height: "35px", width: "30px", marginTop: "4%", marginLeft: "-45px"}} className="bi bi-plus"/>
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

// <img src={left} alt="back arrow" style={{height: "25px", width: "20px", marginTop: "2px", color: "blue"}}/>
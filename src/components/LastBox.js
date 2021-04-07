import React, { Component } from 'react';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
//import left from '../Images/angle-left-solid.svg';
//import * as Icon from 'react-bootstrap-icons';
import { CaretLeftFill } from 'react-bootstrap-icons';

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
            marginTop: "20%",
            backgroundColor: "#ffffff"
        }

        const innermostBox = {
            border: "#1d99ff",
            height: "430px",
            width: "103%",
            borderRadius: "0 30px 20px 20px",
            marginTop: "21%",
            marginLeft: "-4px",
            backgroundColor: "#1d99ff"
        }
       
        return(
            <div style={middleBoxStyle}>
            <CaretLeftFill className="bi bi-caret-left" color="blue" backgroundColor="blue" style={{position: "fixed", marginTop: "10px", marginLeft: "10px"}}/>
                <div style={innerBox}>
                    <div style={innermostBox}>
                    </div>
                </div>
            </div>
        )
    }
}

// <img src={left} alt="back arrow" style={{height: "25px", width: "20px", marginTop: "2px", color: "blue"}}/>
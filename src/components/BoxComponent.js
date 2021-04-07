import React, { Component } from 'react';

export class BoxComponent extends Component {
    render () {
        const myStyle = {
            border: "#F5FFFA solid 3px",
            height: "550px",
            width: "15%",
            borderRadius: "20px",
            marginTop: "10%",
            marginLeft: "12%"
        }
        return (           
            <div style={myStyle}>
                    
            </div>
        )
    }
}

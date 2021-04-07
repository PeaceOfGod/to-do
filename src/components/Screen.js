import React, { Component } from 'react';
import '../App.css';
import { BoxComponent } from './BoxComponent';
import { LastBox } from './LastBox';
import { MiddleBox } from './MiddleBox';

export class Screen extends Component {
    render () {
        return(
            <div style={{display: "flex"}}>
                <BoxComponent/>
                <LastBox/>
                <MiddleBox/>
            </div>
            
        )
    }
}
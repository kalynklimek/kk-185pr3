import React, { Component } from 'react';
import { useState } from 'react';

function Itab (props) {

    const [background, setbackground] = useState("black");

    const handleHover=() =>{
        setbackground("#404040");
    }

    const mouseOff=() => {
        setbackground("black");
    }

    const addstyle = () => {
        if(props.out.id == props.activetab) {
            return {
                backgroundColor:'#202020',
                textDecoration:'underline',
                display: 'inline-block',
                padding: '20px',
                marginLeft: '20px',
                marginRight: '20px',
                fontSize: '20px'
            }
        }
        else {
            return {
                backgroundColor: background,
                display: 'inline-block',
                padding: '20px',
                marginLeft: '20px',
                marginRight: '20px',
                fontSize: '20px'
            }
        }
    };

    return (
        <div className="tab" onMouseOver={handleHover} onMouseOut={mouseOff} style = {addstyle()} onClick = {props.ctab.bind(this,props.out.id)} >{props.out.title}</div>
    )
}
export default Itab;
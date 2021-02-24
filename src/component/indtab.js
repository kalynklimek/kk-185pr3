import React, { Component } from 'react';

function Itab (props) {

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
                backgroundColor:'black',
                display: 'inline-block',
                padding: '20px',
                marginLeft: '20px',
                marginRight: '20px',
                fontSize: '20px'
            }
        }
    };

    console.log("props: ", props);
    return (
        <div className="tab" style = {addstyle()} onClick = {props.ctab.bind(this,props.out.id)} >{props.out.title}</div>
    )
}
export default Itab;
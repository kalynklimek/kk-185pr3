import React, { Component } from 'react';

function Itab (props) {

    const addstyle = () => {
        if(props.out.id == props.activetab) {
            return {backgroundColor:'red'}
        }
        else {
            return {backgroundColor:'yellow'}
        }
    };

    console.log("props: ", props);
    return (
        <div style = {addstyle()} onClick = {props.ctab.bind(this,props.out.id)} >{props.out.title}</div>
    )
}
export default Itab;
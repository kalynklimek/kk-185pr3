import React, { Component } from 'react';
import HomeData from './homepage';
import TextData from './textpage';
import ImageData from './imagepage';
import VideoData from './videopage';
import TableData from './tablepage';
import EmailData from './emailpage';
// import 'style.css'

class Body extends Component {

    render() {
        var displayContent = () => {
            var activetab = this.props.activetab;

            // acts like switch statement for the body
            if (activetab == 1) {
                return <HomeData/>
            } else if (activetab == 2) {
                return <TextData/>
            } else if (activetab == 3) {
                return <ImageData/>
            } else if (activetab == 4) {
                return <VideoData/>
            } else if (activetab == 5) {
                return <TableData/>
            } else {
                return <EmailData/>
            }
        }

        return (displayContent())
    }
}
export default Body; 
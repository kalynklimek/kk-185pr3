import React from 'react'
import { useState, useEffect } from 'react';
import './style.css'

// import videos
import malibu from './videos/malibu.MP4'
import rome from './videos/rome.MP4'
import waves from './videos/waves.MP4'
import snow from './videos/snow.MP4'
import twinpeaks from './videos/twinpeaks.MP4'
import jonah from './videos/jonah.MP4'

function VideoData() {
    const [source, setsource] = useState("");
    const [displaybutton, setdisplaybutton] = useState("none");
    const [showvideo, setshowvideo] = useState("none");
    const [showoverlay, setshowoverlay] = useState("none");

    const overlayVideo=(event) => {
        event.preventDefault(); // so it doesn't play when clicked
        setsource(event.target.src);
        setshowoverlay("block");
        setshowvideo("block");
    }

    const showOverlay=() =>{
        return {
            display: showoverlay
        }
    }

    const showOverlayVideo=() =>{
        return {
            display: showvideo
        }
    }

    const closeOverlay=() => {
        //hide div
        setshowvideo("none");
        setshowoverlay("none");
        setsource("");
    }

    // deal with back to top button
    const scrolling=(event) => {
        let windowHeight = window.innerHeight;
        let quarterPage = windowHeight/4;
        var scroll = document.documentElement.scrollTop;
        var safariScroll = document.body.scrollTop;
        
        if (scroll > quarterPage || safariScroll > quarterPage) {
            setdisplaybutton("block");
        }
        else {
            setdisplaybutton("none");
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrolling);

        // must cleanup to prevent memory leak --> similar to componentWillUnmount
        return function cleanup() {
            window.removeEventListener('scroll', scrolling);
        }
    })

    const buttonStyle=() => {
        return {
            display: displaybutton,
            position: 'fixed',
            bottom: '0',
            left: '0',
            margin: '10px'
        }
    }

    const backToTop=() => {
        setdisplaybutton("none");
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }

    // return only one element
    return (
        <div>
            <div className="video-container" id="videos">
                <video src={malibu} width="320" height="240" onClick={overlayVideo} controls></video>
                <video src={rome} width="320" height="240" onClick={overlayVideo} controls></video>
                <video src={waves} width="320" height="240" onClick={overlayVideo} controls></video>
                <video src={snow} width="320" height="240" onClick={overlayVideo} controls></video>
                <video src={twinpeaks} width="320" height="240" onClick={overlayVideo} controls></video>
                <video src={jonah} width="320" height="240" onClick={overlayVideo} controls></video>
            </div>

            <div className="overlay" style={showOverlay()}>
                <div className="overlay-div" onClick={closeOverlay}></div>
                <video className="overlay-element" src={source} style={showOverlayVideo()} controls></video>
            </div>

            <button style={buttonStyle()} onClick={backToTop}>back to top</button>
        </div>
    )
}
export default VideoData
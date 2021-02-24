import React from 'react'
import { useState, useEffect } from 'react';
import './style.css'

function VideoData() {

    var malibu = require('./videos/malibu.MP4')
    var rome = require('./videos/rome.MP4')
    var waves = require('./videos/waves.MP4')
    var snow = require('./videos/snow.MP4')
    var twinpeaks = require('./videos/twinpeaks.MP4')
    var jonah = require('./videos/jonah.MP4')

    // const [videoid, setvideoid] = useState(0)
    const [source, setsource] = useState("")
    const [displaybutton, setdisplaybutton] = useState("none");

    const overlayVideo=(event) => {
        event.preventDefault();

        console.log("video clicked");
        console.log("this video: ", event.target);
        console.log("this video src: ", event.target.children[0].src);

        setsource(waves.default);

        var overlay = document.getElementById("overlay-video");
        overlay.style.display = "block";

        // make a copy of clicked video
        // var vid = document.createElement('video');
        // vid.setAttribute("controls","controls");
        // // vid.setAttribute("className","overlayElement");
        // var newSrc = document.createElement('source');
        // newSrc.src = event.target.children[0].src;
        // vid.appendChild(newSrc);

        // // handle overlay div open and close
        // var overlayVid = document.getElementById("overlay-video");
        // overlayVid.style.display = "block";

        // vid.setAttribute("style", "position:absolute;top:50%;left:50%;max-width:80%;max-height:80%;transform:translate(-50%,-50%);-ms-transform: translate(-50%,-50%);z-index:3");
        // overlayVid.appendChild(vid);
        // console.log("overlayVid: ", overlayVid);
    }

    const closeOverlay=() => {
        //hide div
        var overlay = document.getElementById("overlay-video");
        overlay.style.display = "none";

        setsource("");
    }

    // deal with back to top button
    const scrolling=(event) => {
        //console.log("scrolling");
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

        // must cleanup to prevent memory leak --> unmounted
        return function cleanup() {
            window.removeEventListener('scroll', scrolling);
        }
    })

    const buttonStyle=() => {
        console.log("displaybutton: ", displaybutton)
        return {
            display: displaybutton,
            position: 'fixed',
            bottom: '0',
            left: '0',
            margin: '10px'
        }
    }

    const backToTop=() => {
        console.log("button clicked");
        setdisplaybutton("none");
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }

    // return only one element
    return (
        <div>
            <div className="video-container" id="videos">
                <video width="320" height="240" onClick={overlayVideo} controls>
                <source src={malibu.default} type="video/mp4" />
                </video>

                <video width="320" height="240" onClick={overlayVideo} controls>
                <source src={rome.default} type="video/mp4" />
                </video>

                <video width="320" height="240" onClick={overlayVideo} controls>
                <source src={waves.default} type="video/mp4" />
                </video>

                <video width="320" height="240" onClick={overlayVideo} controls>
                <source src={snow.default} type="video/mp4" />
                </video>

                <video width="320" height="240" onClick={overlayVideo} controls>
                <source src={twinpeaks.default} type="video/mp4" />
                </video>

                <video width="320" height="240" onClick={overlayVideo} controls>
                <source src={jonah.default} type="video/mp4" />
                </video>
            </div>

            <div className="overlay" id="overlay-video">
                <div className="overlay-div" id="overlay-divid" onClick={closeOverlay}></div>
                <video className="overlay-element" id="video" controls="controls">
                    <source src={waves.default} type="video/mp4"/>
                </video>
            </div>

            <button style={buttonStyle()} onClick={backToTop}>back to top</button>
        </div>
    )
}
export default VideoData
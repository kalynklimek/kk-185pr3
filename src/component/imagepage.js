import React from 'react'
import { useState, useEffect } from 'react';
import './style.css'

function ImageData() {
    var malibu = require('./my_images/malibu.JPG')
    var sunset_aftermath = require('./my_images/sunset_aftermath.JPG')
    var ocean = require('./my_images/ocean.JPG')
    var wonderspaces = require('./my_images/wonderspaces.JPG')
    var old_room = require('./my_images/old_room.JPG')
    var spain = require('./my_images/spain.jpg')
    var malibu_ocean = require('./my_images/malibu_ocean.JPG')
    var rome = require('./my_images/rome.jpg')
    var sunset = require('./my_images/sunset.jpg')
    var posing = require('./my_images/posing.jpg')

    const [source, setsource] = useState("")
    const [displaybutton, setdisplaybutton] = useState("none");

    const overlayImage=(event) => {
        setsource(event.target.src);

        // show overlay
        var overlay = document.getElementById("overlay-image");
        overlay.style.display = "block";
    }

    const closeOverlay=() => {
        // hide overlay
        var overlay = document.getElementById("overlay-image");
        overlay.style.display = "none";

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
            <div className="image-container" id="images">
                <img src={malibu.default} width="200px" onClick={overlayImage}/>
                <img src={sunset_aftermath.default} width="200px" onClick={overlayImage}/>
                <img src={ocean.default} width="200px" onClick={overlayImage}/>
                <img src={wonderspaces.default} width="200px" onClick={overlayImage}/>
                <img src={old_room.default} width="200px" onClick={overlayImage}/>
                <img src={spain.default} width="200px" onClick={overlayImage}/>
                <img src={malibu_ocean.default} width="200px" onClick={overlayImage}/>
                <img src={rome.default} width="200px" onClick={overlayImage}/>
                <img src={sunset.default} width="200px" onClick={overlayImage}/>
                <img src={posing.default} width="200px" onClick={overlayImage}/>
            </div>

            <div className="overlay" id="overlay-image">
                <div className="overlay-div" onClick={closeOverlay}></div>
                <img className="overlay-element" src={source}/>
            </div>

            <button style={buttonStyle()} onClick={backToTop}>back to top</button>
        </div>
    )
}
export default ImageData
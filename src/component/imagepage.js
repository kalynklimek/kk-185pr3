import React from 'react'
import { useState } from 'react';
import './style.css'

function ImageData() {
    // return only one element
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

    const overlayImage=(event) => {
        console.log("image clicked");
        console.log("this image src: ", event.target.src);

        setsource(event.target.src);

        var overlay = document.getElementById("overlay-image");
        console.log("overlay: ", overlay);
        overlay.style.display = "block";
    }

    const closeOverlay=(event) => {
        //hide div
        var overlay = document.getElementById("overlay-image");
        overlay.style.display = "none";

        setsource("");
    }

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
                <div className="overlay-div" onClick={closeOverlay}>
                    <img className="overlayImage" src={source}/>
                </div>
            </div>
        </div>
    )
}
export default ImageData
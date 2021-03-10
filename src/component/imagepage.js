import React from 'react'
import { useState, useEffect } from 'react';
import './style.css'

// import images
import malibu from './my_images/malibu.JPG'
import sunset_aftermath from './my_images/sunset_aftermath.JPG'
import ocean from './my_images/ocean.JPG'
import wonderspaces from './my_images/wonderspaces.JPG'
import old_room from './my_images/old_room.JPG'
// import spain from './my_images/spain.jpg'
import malibu_ocean from './my_images/malibu_ocean.JPG'
// import rome from './my_images/rome.jpg'
import sunset from './my_images/sunset.jpg'
// import posing from './my_images/posing.jpg'

function ImageData() {
    const [source, setsource] = useState("")
    const [displaybutton, setdisplaybutton] = useState("none");
    const [showoverlay, setshowoverlay] = useState("none");

    const overlayImage=(event) => {
        setsource(event.target.src);
        setshowoverlay("block");
    }

    const showOverlay=() =>{
        return {
            display: showoverlay
        }
    }

    const closeOverlay=() => {
        // hide overlay
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
            <div className="image-container" id="images">
                <img src={malibu} width="200px" onClick={overlayImage}/>
                <img src={sunset_aftermath} width="200px" onClick={overlayImage}/>
                <img src={ocean} width="200px" onClick={overlayImage}/>
                <img src={wonderspaces} width="200px" onClick={overlayImage}/>
                <img src={old_room} width="200px" onClick={overlayImage}/>
                {/* <img src={spain} width="200px" onClick={overlayImage}/> */}
                <img src={malibu_ocean} width="200px" onClick={overlayImage}/>
                {/* <img src={rome} width="200px" onClick={overlayImage}/> */}
                <img src={sunset} width="200px" onClick={overlayImage}/>
                {/* <img src={posing} width="200px" onClick={overlayImage}/> */}
            </div>

            <div className="overlay" style={showOverlay()}>
                <div className="overlay-div" onClick={closeOverlay}></div>
                <img className="overlay-element" src={source}/>
            </div>

            <button style={buttonStyle()} onClick={backToTop}>back to top</button>
        </div>
    )
}
export default ImageData
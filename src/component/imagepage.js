import React from 'react'
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
    return (
        <div className="image-container" id="images">
            <img src={malibu.default} width="200px" />
            <img src={sunset_aftermath.default} width="200px" />
            <img src={ocean.default} width="200px" />
            <img src={wonderspaces.default} width="200px" />
            <img src={old_room.default} width="200px" />
            <img src={spain.default} width="200px" />
            <img src={malibu_ocean.default} width="200px" />
            <img src={rome.default} width="200px" />
            <img src={sunset.default} width="200px" />
            <img src={posing.default} width="200px" />
        </div>
    )
}
export default ImageData
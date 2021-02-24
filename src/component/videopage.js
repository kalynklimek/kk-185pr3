import React from 'react'
import './style.css'

function VideoData() {
    // return only one element
    var malibu = require('./videos/malibu.MP4')
    var rome = require('./videos/rome.MP4')
    var waves = require('./videos/waves.MP4')
    var snow = require('./videos/snow.MP4')
    var twinpeaks = require('./videos/twinpeaks.MP4')
    var jonah = require('./videos/jonah.MP4')
    return (
        <div class="video-container" id="videos">
            <video width="320" height="240" controls>
              <source src={malibu.default} type="video/mp4" />
            </video>

            <video width="320" height="240" controls>
              <source src={rome.default} type="video/mp4" />
            </video>

            <video width="320" height="240" controls>
              <source src={waves.default} type="video/mp4" />
            </video>

            <video width="320" height="240" controls>
              <source src={snow.default} type="video/mp4" />
            </video>

            <video width="320" height="240" controls>
              <source src={twinpeaks.default} type="video/mp4" />
            </video>

            <video width="320" height="240" controls>
              <source src={jonah.default} type="video/mp4" />
            </video>
        </div>
    )
}
export default VideoData
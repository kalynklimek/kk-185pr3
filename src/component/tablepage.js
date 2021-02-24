import React from 'react'
import './style.css'

function TableData() {
    // return only one element
    return (
      <div className="table-div">
        <h2>more about me!</h2>

        <table className="custom-table">
          <thead>
            <tr>
              <th>link</th>
              <th>description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="link"><a href="http://class.arts.ucsb.edu/art22/Sites/w_19/students/KalynKlimek/">personal website</a></td>
              <td>In ART 22, a class I took here at UCSB, I made a personal website to host all of the projects I created in that class. Feel free to click on any project on the webpage to see the different ways I used p5.js, a javascript library, to make computer art. This was my favorite class at UCSB because I was able to take an artistic approach to computer science and express myself.</td>
            </tr>
            <tr>
              <td className="link"><a href="https://vsco.co/kalynklimek/gallery">vsco @kalynklimek</a></td>
              <td>On VSCO, the social networking and photo/video editing app, I am able to edit and post a lot of my favorite pictures. Click the link to check out the photos and videos I have created. VSCO is one of my favorite platforms because I am able to express myself and share the way I see the world. Most of the content you see on this site's 'image' and 'video' tab was personally created and/or edited by me using the VSCO application.</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
}
export default TableData
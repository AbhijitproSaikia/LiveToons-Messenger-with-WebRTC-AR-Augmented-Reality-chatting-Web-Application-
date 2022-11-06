import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'

function Filter() {
    return (
        <div>
            {/* <div id="close_button">
                <button id="back_button" type="button"><Link to="/">BACK</Link></button>
            </div> */}
            <div id="selections">
                <img id="hat1" src="./assets/models/hat1/thumbnail.png" />
                <img id="hat2" src="./assets/models/hat2/thumbnail.png" />
                <img id="glasses1" src="./assets/models/glasses1/thumbnail.png" />
                <img id="glasses2" src="./assets/models/glasses2/thumbnail.png" />
                <img id="earring" src="./assets/models/earring/thumbnail.png" />
            </div>

            <button id="capture"></button>

            <div id="preview">
                <div id="preview-close">X</div>
                <img id="preview-image" />
                <div id="preview-share">Share</div>
            </div>
        </div>
    )
}
export default Filter
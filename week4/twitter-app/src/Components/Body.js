import React from 'react'; 
import Tweet from "./Tweet.js"
import serena from "../Images/serena.jpg"
import "../Styles/Body.css"

const Body = () => {
    return (
        <div id="contain">
            <div id="tweets">
            <Tweet profile={"@annagrace"} text={"go hoos"} photo={serena} date={"4/1/23"}/>
            <br></br>
            <Tweet profile={"@evelyn"} text={"happy sunday"} photo={serena} date={"3/12/23"}/>
            <br></br>
            <Tweet profile={"@leo"} text={"hello"} photo={serena} date={"3/1/23"}/>
            </div>
        </div>
    )
}

export default Body; 
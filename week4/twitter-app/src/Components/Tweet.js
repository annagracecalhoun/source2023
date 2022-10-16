import React from "react";
import "../Styles/Tweet.css"; 

const Tweet = props => {
  return (
    <div className="tweet">
        <div id="profile">
         <img id="pic" src={props.prof} alt="profile img"></img>
         <div id="names">
           <p id="tweet-handle">{props.handle}</p>
            <p>{props.author}</p>
          </div>
        </div>

      <p class="tweet-text"> {props.content} </p>
      
      <div class="tweet-footer">
        <p class="footer-info">3:50 PM</p>
        <p class="footer-info">March 21, 2006</p>
        <p class="footer-info">Likes: {props.likes}</p>
      </div>
    </div>
  );
};

export default Tweet;
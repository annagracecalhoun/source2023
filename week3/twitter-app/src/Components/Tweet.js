import React from "react";
import "../Styles/Tweet.css"; 

const Tweet = props => {
  return (
    <div className="tweet">
        <div id="names">
        <p id="tweet-handle">{props.handle}</p>
        <br></br>
        <p>{props.author}</p>
        </div>
      <p class="tweet-text"> {props.content} </p>
      <img src={props.image}></img>
      <div class="tweet-footer">
        <p class="footer-info">3:50 PM</p>
        <p class="footer-info">March 21, 2006</p>
        <p class="footer-info">Likes: {props.likes}</p>
      </div>
    </div>
  );
};

export default Tweet;
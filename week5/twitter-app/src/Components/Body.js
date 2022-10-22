import React from "react";
import Tweet from "./Tweet.js";
import "../Styles/Body.css"; 
import serena from '../Images/serena.jpg';
import sandra from '../Images/sandra.jpeg';



const Body = () => {
  return (
    <div>           
      <div id="feed">
      <h2 id="feedTitle">Your Twitter Feed</h2>
      <Tweet handle={"@serenawilliams"} author={"Serena Williams"} content={"Submit a pitch to Serena Ventures!"} likes={100} prof={serena}></Tweet>
      <Tweet handle={"@IamSandraOh"} author={"Sandra Oh"} content={"Everyone should watch Killing Eve"} likes={4000} prof={sandra}></Tweet>
      </div>
    </div>
  );
};

export default Body;
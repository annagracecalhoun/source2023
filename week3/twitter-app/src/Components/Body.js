import React from "react";
import Tweet from "./Tweet.js";
import serena from "../Images/serena.jpg"


const Body = () => {
  return (
    <div>
      <h6>This is the body component!!</h6>
      <Tweet handle={"@jack"} author={"jack"} content={"loving react so far"} likes={100} image={serena}></Tweet>
      <Tweet handle={"@obama"} author={"obama"} content={"register to vote!!"} likes={4000} image={serena}></Tweet>
    </div>
  );
};

export default Body;
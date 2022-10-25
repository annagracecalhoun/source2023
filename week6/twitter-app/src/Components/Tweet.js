import React, {useState} from "react";
import "../Styles/Tweet.css"; 
import wheart from "../Images/wheart.png"
import rheart from "../Images/rheart.png"


const Tweet = props => {
  const [likes, setLikes] = useState(props.likes); 
  const [liked, setLiked] = useState(false); 

  const addLike = () => {
    if (likes === props.likes) {
      setLikes(likes + 1); 
      setLiked(true); 
    }
  }

  const removeLike = () => {
    if (likes !== props.likes) {
       setLikes(likes - 1);
       setLiked(false);  
      }
  }

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

      <div id="likes">
          <button onClick={addLike}>Like</button>
          <button onClick={removeLike}>Unlike</button>
       </div>
      
      <div class="tweet-footer">
      {liked? <img className="heart" src={rheart}/> : <img className="heart" src={wheart}/>}
        <p class="footer-info">3:50 PM</p>
        <p class="footer-info">March 21, 2006</p>
        <p class="footer-info">Likes: {likes}</p>
      </div>
    </div>
  );
};

export default Tweet;
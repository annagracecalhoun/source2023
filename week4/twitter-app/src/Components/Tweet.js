import React, {useState} from 'react'; 
import "../Styles/Tweet.css"; 


const Tweet = (props) => {

    const [likes, setLikes] = useState(0); 

    let removeLike = () => {
        if (likes > 0) {
            setLikes(likes - 1); 
        }
    }
    
    return (
        <div id="container">
        
        <div id="profBar">
            <img id="photo" src={props.photo}></img>
            <b id="profile">{props.profile}</b>
        </div>

            <p id="text">{props.text}</p>

            <div id="bottomBar">
            <p>{props.date}</p>
            <p>4 retweets</p>
            <div id="likes">
                <p>{likes} likes</p>
                <button onClick={() => setLikes(likes+1)}>Like</button>
             <button onClick={removeLike}>Unlike</button>
            </div>
            </div>
        </div>
    )
}

export default Tweet; 
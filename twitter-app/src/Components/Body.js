import React, {useState, useEffect} from "react";
import Tweet from "./Tweet.js";
import "../Styles/Body.css"; 
// import serena from '../Images/serena.jpg';
// import sandra from '../Images/sandra.jpeg';
import logo from '../Images/logo.png'; 
import {db} from "../firebase.js"; 
import {addDoc, collection, getDocs} from "firebase/firestore"; 


const Body = () => { 

  const [handle, setHandle] = useState(""); 
  const [author, setAuthor] = useState(""); 
  const [content, setContent] = useState(""); 

  const [allTweets, setAllTweets] = useState([]); 

 useEffect(() => {
    let temp = []; 
    getDocs(collection(db, "allTweets")).then((snapshot) => {
      snapshot.forEach((doc) => {
        temp.push({id: doc.id, ...doc.data()}); 
      })
      setAllTweets(temp); 
    })
  }, []) 

  const addTweet = () => {
    if (handle !== "" && author !== "" && content !== "") {
      setAllTweets([{handle: handle, author: author, content:content}, ...allTweets]); 
      setHandle(""); 
      setAuthor(""); 
      setContent(""); 
    }
   addDoc(collection(db, "allTweets"), 
      {handle: handle, author: author, content:content, likes:0}
    ); 
  }

  return (
    <div>
      
      <div>
    <h4>Create a Tweet</h4>
    <input placeholder="Handle" value={handle} onChange={e => setHandle(e.target.value)}></input>
    <input placeholder="Author" value={author} onChange={e => setAuthor(e.target.value)}></input>
    <input placeholder="Content" value={content} onChange={e => setContent(e.target.value)}></input>
    <button onClick={addTweet}>Create</button>
      </div>

      <div id="feed">
      <h2 id="feedTitle">Your Twitter Feed</h2>

      {allTweets.map((tweet, i) => (
        <Tweet id={tweet.id} handle={tweet.handle} author={tweet.author} content={tweet.content} likes={tweet.likes} prof={logo} key={i} />
      ))}
      </div>
    </div>
  );
};

export default Body;
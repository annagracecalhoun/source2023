import React, {useState} from "react";
import Tweet from "./Tweet.js";
import SearchBar from "./SearchBar.js";
import "../Styles/Body.css"; 
import serena from '../Images/serena.jpg';
import sandra from '../Images/sandra.jpeg';
import logo from '../Images/logo.png'; 



const Body = () => {

  const init = [{handle:"@serenawilliams", author:"Serena Williams", content:"Submit a pitch to Serena Ventures!", likes:100, prof:serena}, 
   {handle:"@IamSandraOh", author:"Sandra Oh", content:"Everyone should watch Killing Eve", likes:4000, prof:sandra}]; 

  const [handle, setHandle] = useState(""); 
  const [author, setAuthor] = useState(""); 
  const [content, setContent] = useState(""); 

  const [allTweets, setAllTweets] = useState(init); 
  const [filteredTweets, setFilteredTweets] = useState([]); 


  const addTweet = () => {
    if (handle !== "" && author !== "" && content !== "") {
      setAllTweets([{handle: handle, author: author, content:content, likes:0, prof:logo}, ...allTweets]); 
      setHandle(""); 
      setAuthor(""); 
      setContent(""); 
    }
  }

  const filterTweets = (match) => {
    const result = allTweets.filter((tweet) => {
      return tweet.content.toLowerCase().includes(match.toLowerCase()); 
       })
    setFilteredTweets(result)
} 

console.log(filteredTweets); 

  return (

    <div>
      <div>
        <SearchBar onClick={(match) => filterTweets(match)}/>
        <b>Search results:</b>
        {filteredTweets.map((tweet, i) => (
        <Tweet handle={tweet.handle} author={tweet.author} content={tweet.content} likes={tweet.likes} prof={tweet.prof} key={i} />
      ))}
      </div>

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
        <Tweet handle={tweet.handle} author={tweet.author} content={tweet.content} likes={tweet.likes} prof={tweet.prof} key={i} />
      ))}
      </div>
    </div>
  );
};

export default Body;
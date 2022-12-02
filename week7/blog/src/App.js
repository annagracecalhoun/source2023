import React, {useEffect, useState} from 'react';
import {db} from "./firebase"; 
import {addDoc, collection, getDocs} from "firebase/firestore"; 

function App() {

  const [blogs, setBlogs] = useState([]); 

  useEffect(() => {
    let temp = []; 
    getDocs(collection(db, "blog")).then((snapshot) => {
      snapshot.forEach((doc) => {
        temp.push(doc.data()); 
      })
      setBlogs(temp); 
    })
  }, [])

  console.log(blogs)

  const add = () => {
    addDoc(collection(db, "blog"), {
      author: "Leo", 
      contents: "New user", 
      title: "from my website", 
      likes: 5
    })
  }

  return (
    <div style={{ textAlign: 'center' }}>
      
      <h2>Our Blog App</h2>
      <button onClick={add}>Add Hardcoded Leo Blog</button>
     
      {blogs.map((post, i) => 
      <div>
        <p>Title: {post.title}</p>
        <p>Author: {post.author}</p>
        <p>Content: {post.content}</p>
      </div>)
      }

    </div>
  );
}

export default App;
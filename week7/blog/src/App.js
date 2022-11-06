import React, {useEffect, useState} from 'react';
import {db} from "./firebase"
import {addDoc, collection, getDocs, Timestamp} from "firebase/firestore"

function App() {

  const [blogs, setBlogs] = useState([]); 

  useEffect(() => {
    let temp = []; 
    getDocs(collection(db, "blog")).then((snapshot) => {
    snapshot.forEach((doc) => {
      temp.push(doc.data()); 
    }); 
    setBlogs(temp);})
  }, [])

  console.log(blogs); 

  const add = () => {
    addDoc(collection(db, "blog"), {
      title: "new post", 
      author: "AG", 
      content: "trying to add", 
      likes: 0
    })
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <button onClick={add}>Add a post</button>

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
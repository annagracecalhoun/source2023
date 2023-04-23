import React, {useEffect, useState} from 'react';
import {db} from "./firebase.js"; 
import {addDoc, collection, getDocs} from "firebase/firestore";  

function App() {

  const [blogs, setBlogs] = useState([]); 

  useEffect(() => {
    let temp = []; 
    getDocs(collection(db, "blog")).then(
      (snapshot) => {
        snapshot.forEach((doc) => {
          temp.push(doc.data()); 
        })
        setBlogs(temp); 
      })
  }, []); 

  const add = () => {
    addDoc(collection(db, "blog"), {
      title: "My second blog", 
      author: "AG", 
      content: "pushing from my app"
    })
  }

  return (
    <div>
      <h2>Blog App</h2>
      <button onClick={add}>Add second blog</button>

      {blogs.map((blog) => (
        <div> 
          <p>Title: {blog.title}</p>
          <p>Author: {blog.author}</p>
          <p>{blog.content}</p>
          <br></br>
        </div>
      ))}
    </div>
  );
}

export default App;

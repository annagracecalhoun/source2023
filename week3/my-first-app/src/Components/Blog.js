import React from "react";

const Blog = props => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <p>{props.likes}</p>
    </div>
  );
};

export default Blog;
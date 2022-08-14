import React from "react";
import Header from "./Components/Header.js";
import Body from "./Components/Body.js";
import Blog from "./Components/Blog.js";

const App = () => {
  return <div>
    <div><Header/></div>
    <div><Body>
      </Body></div>
      <Blog title="My first blog" content="loving react so far" likes="100"></Blog>
  </div>;
};

export default App;
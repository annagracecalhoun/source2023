import React from 'react';
import {Link} from "react-router-dom"; 

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h4>This is the Home page.</h4>
      <Link to="/about">About page</Link>
    </div>
  );
}

export default App;

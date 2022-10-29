import React from 'react';
import {Link} from "react-router-dom"; 

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Creating a multi-page website</h2>
      <Link to="/about">About Page</Link>
    </div>
  );
}

export default App;

import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom"; 

function App() {

  const [costume, setCostume] = useState(""); 
  const [all, setAll] = useState([])
  const [count, setCount] = useState(0); 

  const addCostume = () => {
    if (costume !== "") {
      setAll([costume, ...all]); 
      setCostume(""); 
    }
  }

  useEffect(() => {
    setTimeout(() => setCount(count+1), 1000)
  }, [])


  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Creating a multi-page website</h2>
      <Link to="/about">About Page</Link>
      <br></br>
      <h5>Count: {count}</h5>

      <div>
        <br></br>
        <input placeholder='Halloween Costume' value={costume} onChange={e=> setCostume(e.target.value)}></input>
        <button onClick={addCostume}>Submit</button>
        <br></br>
        
        {all.map((cost, i) => (
          <p key={i}>{cost}</p>
        ))}

      </div>
    </div>
  );
}

export default App;

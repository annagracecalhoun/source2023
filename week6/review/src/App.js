import React, {useState, useEffect} from 'react';

function App() {

  
  const [costume, setCostume] = useState(""); 
  const [allCostumes, setAllCostumes] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      console.log("Hello World")
    }, 3000); 
  }, []); 
  
  const addCostume = () => {
    setAllCostumes([...allCostumes, {costume: costume}]); 
    setCostume(""); 
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Costume Ideas</h1>
      <br></br>
      <input onChange={e => setCostume(e.target.value)} value={costume} placeHolder="Costume Ideas"></input>
      <br></br>
      <button onClick={addCostume}>Submit</button>
      <br></br>

      {allCostumes.map((item) => (
        <p>{item.costume}</p>
      ))}

    </div>
  );
}

export default App;

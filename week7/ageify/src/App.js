import React, {useState, useEffect} from 'react';
import axios from 'axios'; 

function App() {

  const [name, setName] = useState("anna"); 
  const [trigger, setTrigger] = useState(false);
  const [age, setAge] = useState();  

  const baseURL = "https://api.agify.io/?name="
  let url = baseURL + name; 


  useEffect(() => {
    axios.get(url).then(info => {
      setAge(info.data.age)
    })
  }, [trigger]); 

  return (
    <div style={{ textAlign: 'center' }}>
      <h3>Guess the age</h3>
      <input value={name} onChange={e => {setName(e.target.value); setAge(0)}} placeholder='New Name'></input>
      <br></br><br></br>
      <b>Name: {name}</b>
      <br></br>
      {age===0? <b>Age:</b>: <b>Age: {age}</b>}
      <br></br><br></br>
      <button onClick={() => setTrigger(!trigger)}>Guess the age</button>
    </div>
  );
}

export default App;

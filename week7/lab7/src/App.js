import React, {useState} from 'react';
import CoolButton from './Components/CoolButton';

function App() {

  const [degree, setDegree] = useState("High School"); 
  const [status, setStatus] = useState("In Progress"); 

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Let's make a cool button!</h1>
    <br></br>
    <h4>Degree: {degree}</h4>
    <h4>Status: {status}</h4>
    <br></br>
    <CoolButton onClick={() => setDegree("College")}>Change Degree to College</CoolButton>
    <CoolButton onClick={() => setStatus("Complete")}>Change Status to Complete</CoolButton>
    </div>
  );
}

export default App;

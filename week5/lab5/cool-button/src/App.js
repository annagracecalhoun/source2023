import React, {useState} from 'react';
import CoolButton from './CoolButton';

function App() {
  const [degree, setDegree] = useState("High School"); 
  const [status, setStatus] = useState("In Progress"); 

  return (
    <div>
     <h4>Degree: {degree}</h4> 
    <h4>Status: {status}</h4>

    <br></br>
    
    <CoolButton onClick={() => setDegree("College")}>Change degree to College</CoolButton>
     <br></br>
     <CoolButton onClick={() => setStatus("Complete")}>Change status to Complete</CoolButton>
    
    </div>
  );
}

export default App;

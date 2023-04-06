import React, {useState} from 'react';

function App() {

  const [firstName, setFirstName] = useState(""); 
  const [bio, setBio] = useState(""); 
  const [people, setPeople] = useState([]); 

  const submitPerson = () => {
    setPeople([...people, {firstName:firstName, bio:bio}])
    setFirstName(""); 
    setBio(""); 
  }

  return (

    <div style={{ textAlign: 'center' }}>
      <h2>Input App</h2>
      <br></br>


      <input onChange={(e) => setFirstName(e.target.value)} value={firstName} placeholder="Name"></input>
      <br></br>
      <input onChange={(e) => setBio(e.target.value)} value={bio} placeholder="Bio"></input>
      <br></br>
      <button onClick={submitPerson}>Submit</button>

      {people.map((person) => (
        <p>{person.firstName}: {person.bio}</p>
      ))}

    </div>
  );
}

export default App;

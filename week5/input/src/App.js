import React, {useState} from 'react';

function App() {

  const [firstName, setFirstName] = useState(""); 
  const [bio, setBio] = useState(""); 
  const [people, setPeople] = useState([]); 

  const submitForm = () => {
    setPeople([...people, {firstName: firstName, bio: bio}]); 
    setFirstName(""); 
    setBio(""); 
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Input App</h2>
      <br></br>
      <input value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="First Name"/>
      <br></br>
      <input value={bio} onChange={e => setBio(e.target.value)} placeholder="Bio"/>
      <br></br>
      <button onClick={submitForm}>Submit</button>

    <br></br><br></br>
    {people.map((person, i) => 
    (<h3>{person.firstName}, {person.bio}</h3>))}

    </div>
  );
}

export default App;

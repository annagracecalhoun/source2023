import React, { useState } from "react";

function App() {

  const [firstName, setFirstName] = useState("");
  const [bio, setBio] = useState("");
  // array of all submitted people 
  const [people, setPeople] = useState([]);

  const addPerson = () => {
    if (firstName !== '' && bio !=="") {
    setPeople([...people, { firstName: firstName, bio: bio }]);
          setBio("");
          setFirstName("");
    }; 
  }

  return (
    <div>
      <h1>Input Practice</h1>
      <input placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} />
      <br/>
      <input placeholder="Bio" value={bio} onChange={e => setBio(e.target.value)} />
      <br/>
      <button onClick={addPerson}>
        Add person to people array
      </button>

      {people.map((person, i) => (
        <p>
          {person.firstName}, {person.bio}
        </p>
      ))}
      
    </div>
  );
}

export default App;
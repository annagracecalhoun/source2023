import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [question, setQuestion] = useState('');
  const [trigger, setTrigger] = useState(false); 

  const [answer, setAnswer] = useState(''); 
  const [result, setResult] = useState(''); 

  useEffect(() => {
  setAnswer(''); 
  setResult('');
  axios.get("https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=boolean")
  .then((response) => {
    setQuestion(response.data.results[0].question)
    setAnswer(response.data.results[0].correct_answer)
  })
  .catch((error) => console.log("Error: ", error))
},[trigger]);





  return (
    <div>
      <header>
        <h1>Trivia Game</h1>
      </header>

      <div>
      <button onClick={() => setTrigger(!trigger)}>Generate new question</button>
      </div>

      <div>
        <h3>{question}</h3>
        <button onClick={() => (answer === 'True'? setResult("Correct") : setResult("Incorrect"))}>True</button>
        <button onClick={() => (answer === 'False'? setResult("Correct") : setResult("Incorrect"))}>False</button>
        <h4>{result}</h4>
      </div>
    </div>
  );
}

export default App;

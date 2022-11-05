import React, {useState, useEffect} from 'react';
import axios from "axios"; 

function App() {

  let [question, setQuestion] = useState(""); 
  let [answer, setAnswer] = useState(""); 
  let [correct, setCorrect] = useState(""); 
  let [trigger, setTrigger] = useState(false); 

  useEffect(() => {
    axios.get("https://opentdb.com/api.php?amount=1&type=boolean").then(info => 
    {setQuestion(info.data.results[0].question)
     setAnswer(info.data.results[0].correct_answer)})
  }, [trigger])


  return (
    <div style={{ textAlign: 'center' }}>
      <h2>{question}</h2>
      <button>True</button>
      <button>False</button>
      <br></br><br></br>
      <button onClick={() => setTrigger(!trigger)}>Give me a new trivia question</button>
    </div>
  );
}

export default App;

import React, {useState} from 'react';

function App() {
  /* Two hard coded numbers */
  const num1 = 28;
  const num2 = 7;
  const [operator, setOperator] = useState("+");
  const [answer, setAnswer] = useState();

  /* Returns the answer given the operator */
  const calculate = (operator) => {
    if (operator === "+") setAnswer(num1 + num2);
    if (operator === "-") setAnswer(num1 - num2);
    if (operator === "*") setAnswer(num1 * num2);
    if (operator === "/") setAnswer(num1 / num2);
  };

  /* Sets the operator to the new one and reset answer*/
  const changeOperator = (operator) => {
    setOperator(operator);
    setAnswer();
  };

  return (
    <div>
      {/* Shows the answer if we calculate it */}
      <p>
        {num1} {operator} {num2} = {answer ? answer : "?"}
      </p>

      {/* Buttons to change the operation and hide the answer by resetting answer*/}
      <div>
        <button onClick={() => changeOperator("+")}>+</button>
        <button onClick={() => changeOperator("-")}>-</button>
        <button onClick={() => changeOperator("*")}>*</button>
        <button onClick={() => changeOperator("/")}>/</button>
      </div>

      {/* Displays the button to show/hide answer using ternary conditional */}
      {answer ? (
        <button onClick={() => setAnswer()}>Hide answer</button>
      ) : (
        <button onClick={() => calculate(operator)}>Show answer</button>
      )}

      <br></br>
    </div>
  );
}

export default App;

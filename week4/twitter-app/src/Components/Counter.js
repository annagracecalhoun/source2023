import React, {useState} from "react";

const Counter = props => {
    const [count, setCount] = useState(100);

    const increaseCount = () => {
        setCount(count + 1); 
    }; 

  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={() => {setCount(0);}}>
        Clear
      </button>
      
      <button onClick={() => increaseCount()}>
        Increase
      </button>
     
      <button onClick={() => {setCount(count - 1);}}>
        Decrease
      </button>
    </div>
    )
}

export default Counter;
 import {useState} from "react"; 

 const Counter = () => {

    const [count, setCount] = useState(0);

    let increaseCount = () => {
        setCount(count+1); 
    }

    let decreaseCount = () => {
        if (count > 0) {
            setCount(count - 1); 
        }
    }

    return (
        <div>
            <p>This is the counter component.</p>
            <h1>Count: {count} </h1>
            <br></br>
            <button onClick={increaseCount}>Increase</button>
            <br></br>

            {count === 0 ? <p>You cannot decrease the count below zero.</p> : <button onClick={decreaseCount}>Decrease</button>}
        </div>
    )
 }

 export default Counter; 
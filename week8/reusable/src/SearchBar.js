import React, {useState} from 'react';
 
const SearchBar = (props) => {

    const [term, setTerm] = useState(""); 

     return (
        <div>

        <input onChange={e => setTerm(e.target.value)} value ={term} placeholder='Keyword to search'></input>
        <button onClick={() => props.onClick(term)}>{props.children}</button>
        </div>
     )
}

export default SearchBar; 
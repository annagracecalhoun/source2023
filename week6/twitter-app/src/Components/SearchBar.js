import React, {useState} from 'react'; 

const SearchBar = (props) => {

    const [term, setTerm] = useState("");

    return(
        <div>
            <input value={term} onChange={e => setTerm(e.target.value)} placeholder="Search term"></input>
             <button onClick={() => props.onClick(term)}>Search</button>
        </div>
    )
}

export default SearchBar; 
import React, {useState} from 'react'; 

const SearchBar = (props) => {

    const filterTweets = () => {
        // {props.tweets}.filter().map()
    } 

    return(
        <div>
            <input placeholder="Search term"></input>
            <button>Search</button>


        </div>
    )
}

export default SearchBar; 
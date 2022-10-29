import React, {useState} from 'react'; 

const CoolButton = (props) => {
    return(
        <div>

            <button onClick={() => props.onClick()}>
                {props.children}</button>
        </div>

    )
}; 

export default CoolButton;  
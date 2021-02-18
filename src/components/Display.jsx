import React, {useState} from 'react';

const Display = (props) => {

    return(
        <div className = 'calc-display'>
            {props.outcome}
        </div>
    )
};

export default Display;
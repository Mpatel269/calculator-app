import React from 'react';

const Button = (props) => {
    return(
        <div className = 'calc-button'>
            {props.value}
        </div>
    )
};


export default Button;
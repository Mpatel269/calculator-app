import React from 'react';

const Button = (props) => {
    return(
        <div className = 'calc-button' onClick = {props.clickFunction}>
            {props.value}
        </div>
    )
};


export default Button;
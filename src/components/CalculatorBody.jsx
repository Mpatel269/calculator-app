import React, {useState} from 'react';
import Button from './Button';
import Display from './Display';

const CalculatorBody = () => {
    


    return(
        <div className = 'calculator-body'>
            
            <div className="row-1">
                <Display/>
            </div>
            <div className="row-2">
                <Button value = '7'/>
                <Button value = '8'/>
                <Button value = '9'/>
                <Button value = '/'/>
                <Button value = '+/-'/>
            </div>
            <div className="row-2">
                <Button value = '4'/>
                <Button value = '5'/>
                <Button value = '6'/>
                <Button value = '*'/>
                <Button value = '-->'/>
            </div>
            <div className="row-2">
                <Button value = '1'/>
                <Button value = '2'/>
                <Button value = '3'/>
                <Button value = '-'/>
                <Button value = '='/>
            </div>
            <div className="row-2">
                <Button value = '0'/>
                <Button value = '00'/>
                <Button value = '.'/>
                <Button value = '+'/>
                <Button value = '='/>
            </div>


        </div>
    )
};

export default CalculatorBody;
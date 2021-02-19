import React, {useState} from 'react';
import Button from './Button';
import Display from './Display';

const CalculatorBody = () => {
    const [answer, setAnswer] = useState(null);
    const [numberOne, setNumberOne] = useState('');
    const [numberTwo, setNumberTwo] = useState('');
    const [chosenOperator, setChosenOperator] = useState('');
    const [prevAns, setPrevAns] = useState(null)

    const numberClicked = (num) => {
        if (chosenOperator.length == 0) {
            setNumberOne(numberOne.concat(num))
        }
        else {
            setNumberTwo(numberTwo.concat(num))
        }
    };

    const operatorClicked = (operator) => {
        if (chosenOperator.length == 0) {
            setChosenOperator(chosenOperator.concat(operator))
        }
        else {
            setChosenOperator(chosenOperator)
        }
    }

    const sum = () => {
        if (chosenOperator == '+') {
            setAnswer(parseInt(numberOne) + parseInt(numberTwo))
        }
        else if (chosenOperator == '-') {
            setAnswer(parseInt(numberOne) - parseInt(numberTwo))
        }
        else if (chosenOperator == '/') {
            setAnswer(parseInt(numberOne) / parseInt(numberTwo))
        }
        else if (chosenOperator == '*') {
            setAnswer(parseInt(numberOne) * parseInt(numberTwo))
        }
    }

    const clearNumbers = () => {
        setNumberOne('')
        setNumberTwo('')
        setChosenOperator('')
        setAnswer(null)
    }

    const ansButtonClicked = () => {
        setAnswer(prevAns)
        setNumberOne(prevAns)
    }

    const storeNumber = () => {
        setPrevAns(answer)
    }


    return(
        <div className = 'calculator-body'>
            
            <div className="row-1">
                <Display outcome = {answer ? answer: numberOne + chosenOperator + numberTwo}/>
            </div>
            <div className="row-2">
                <Button value = '7' clickFunction = {() => numberClicked('7')}/>
                <Button value = '8' clickFunction = {() => numberClicked('8')}/>
                <Button value = '9' clickFunction = {() => numberClicked('9')}/>
                <Button value = '/' clickFunction = {() => operatorClicked('/')}/>
                <Button value = 'Sto' clickFunction = {() => storeNumber()}/>
            </div>
            <div className="row-2">
                <Button value = '4' clickFunction = {() => numberClicked('4')}/>
                <Button value = '5' clickFunction = {() => numberClicked('5')}/>
                <Button value = '6' clickFunction = {() => numberClicked('6')}/>
                <Button value = '*' clickFunction = {() => operatorClicked('*')}/>
                <Button value = 'CLR' clickFunction = {() => clearNumbers()}/>
            </div>
            <div className="row-2">
                <Button value = '1' clickFunction = {() => numberClicked('1')}/>
                <Button value = '2' clickFunction = {() => numberClicked('2')}/>
                <Button value = '3' clickFunction = {() => numberClicked('3')}/>
                <Button value = '-' clickFunction = {() => operatorClicked('-')}/>
                <Button value = '=' clickFunction = {() => sum()}/>
            </div>
            <div className="row-2">
                <Button value = '0' clickFunction = {() => numberClicked('0')}/>
                <Button value = '00' clickFunction = {() => numberClicked('0')}/>
                <Button value = '.' clickFunction = {() => numberClicked('.')}/>
                <Button value = '+' clickFunction = {() => operatorClicked('+')}/>
                <Button value = 'Ans' clickFunction = {() => ansButtonClicked()} />
            </div>


        </div>
    )
};

export default CalculatorBody;
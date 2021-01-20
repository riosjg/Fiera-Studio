import React, {useContext, useState} from 'react';
import { CalcContext } from '../../context/CalcContext';
import './button.css';

const Button = (props) => {
    const { result, displayNum, partialCalc, setDisplayNum } = useContext(CalcContext);
    const [ value, setValue ] = useState(0);
    const [ operator, setOperator ] = useState('');
    // const [displayedNum, setDisplayedNum] = useState(0);

    const makeCalc = (key) => {
        if(Number.isInteger(key)){
            setValue(parseFloat(`${value}${key}`)) //concatenate numbers
            setDisplayNum(parseFloat(`${value}${key}`));
        }
        else{
            if(operator && (key !== 'C')){ //makes the calc according to the operation if the user doesn't press delete
                if(operator === '+'){
                    partialCalc(result + value);
                    setDisplayNum(result + value);
                    setValue(0);
                    setOperator('');
                }else if(operator === '-'){
                    partialCalc(result - value);
                    setDisplayNum(result - value);
                    setValue(0);
                    setOperator('');
                }else if(operator === 'X'){
                    partialCalc(result * value);
                    setDisplayNum(result * value);
                    setValue(0);
                    setOperator('');
                }else if(operator === '/'){
                    partialCalc(result / value);
                    setDisplayNum( (result / value).toFixed(2) );
                    setValue(0);
                    setOperator('');
                }else{
                    partialCalc(result + value);
                    setValue(0);
                }
                if(key !== '='){
                    setOperator(key)
                }
            }
            else{
                if(key === 'C'){
                    partialCalc(0);
                    setDisplayNum(0);
                    setValue(0);
                    setOperator('');
                }else if(key === '='){
                    partialCalc(0);
                    setValue(0);
                    setOperator('');
                }else{
                    partialCalc(value);
                    setValue(0);
                    setOperator(key)
                }
            }
        }
    }

    const keys = ['C', '/', 7, 8, 9, 'X', 4, 5, 6, '-', 1, 2, 3, '+', 0, '='];

     return (
        <>
            {keys.map((item, index) => (
                <button 
                value={item}
                key={item}
                className={`item-${index}`}
                onClick={() => makeCalc(item)}
                >
                    {item}
                </button>
            ))}
        </>
    );
}
 
export default Button;
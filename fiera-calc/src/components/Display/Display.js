import React, {useContext} from 'react';
import {CalcContext} from '../../context/CalcContext';
import 'bootstrap/dist/css/bootstrap.css';
import './display.css';

const Display = () => {
    const { result, displayNum, partialCalc, setDisplayNum } = useContext(CalcContext);

    return ( <div className='item-16 bg-dark'>{displayNum}</div> );
}
 
export default Display;
import React, {useContext} from 'react';
import {CalcContext} from '../context/CalcContext';
import 'bootstrap/dist/css/bootstrap.css';

const Display = () => {
    const { result, displayNum, partialCalc, setDisplayNum } = useContext(CalcContext);

    return ( <div className='bg-info'>{displayNum}</div> );
}
 
export default Display;
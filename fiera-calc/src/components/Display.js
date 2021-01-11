import React, {useContext} from 'react';
import {CalcContext} from '../context/CalcContext';
import 'bootstrap/dist/css/bootstrap.css';

const Display = () => {
    const { result, partialCalc } = useContext(CalcContext);

    return ( <div className='bg-info'>{result}</div> );
}
 
export default Display;
import React, {useContext, useState} from 'react';
import { CalcContext } from '../context/calcContext';

const Button = (props) => {
    const { result, partialCalc } = useContext(CalcContext);

    const keys = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'C', '=', '+', '-', '*', '/'];

     return ( 
     <div>
         {keys.map(item => (
             <button 
             value={item}
             key={item}
             >
                 {item}
             </button>
         ))}
     </div>);
}
 
export default Button;
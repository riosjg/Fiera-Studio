import React,{useState} from 'react';

const CalcContext = React.createContext()

const CalcProvider = (props) => {
    const [result, setResult] = useState(0);

    const partialCalc = (value) =>{
        setResult(value);
    }

    return (
        <>
        <CalcContext.Provider 
            value={{
                result: result,
                partialCalc: partialCalc
            }}
            >
                {props.children}
        </CalcContext.Provider>
        </>
    )

}

export {CalcProvider, CalcContext}
import {useMemo} from 'react';

function ExpensiveCalc({number}){
    const result = useMemo(() =>{
        console.log("Calcul...");
        return number * 2;
    }, [number]);
     return <p>{result}</p>
}
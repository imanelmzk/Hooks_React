import {useCallback} from 'react';

function Button({onClick}){
    return <button onClick = {onClick}>CLICK</button>
}

function Parent(){
    const hacndleClick = useCallback(() =>{
        console.log("Button Clicked");
    }, []);
    return <Button onClick={hacndleClick}/>
}
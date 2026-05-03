import {useState} from 'react';

export default function Toggle(){
    const [isOn, setIsOn] = useState(false);

    return(
        <div>
            <p>The switch is {isOn ? 'ON' : 'OFF'}</p>
            <button onClick={() => setIsOn(!isOn)}>
                Toggle
            </button>
        </div>
    );
}
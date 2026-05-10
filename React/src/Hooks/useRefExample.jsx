import {useRef} from 'react'

function InputFocus(){
    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
    }

    return(
        <>
            <input ref={inputRef} type="text" placeholder="Focus me with the button!" />
            <button onClick={focusInput}>Focus Input</button>
        </>
    )
}
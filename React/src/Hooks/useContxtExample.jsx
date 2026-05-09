import {createContext, useContext, usecontext} from 'react'

const UserContext = createContext();

export default function child(){
    const user = useContext(UserContext);
    return <p>Bonjour {user}!</p>
}
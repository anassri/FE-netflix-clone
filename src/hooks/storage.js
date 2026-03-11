import { useNavigate } from "react-router";
import {useState, useEffect} from 'react';

export const useAuthentication = ()=>{
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (email, password)=>{
        setIsAuthenticated(true)
        setEmail(email)
        setPassword(password)
    }

    useEffect(()=>{
        if(isAuthenticated){
            localStorage.setItem('credentials', JSON.stringify({email, password}))
            navigate("/")
        }
        
    }, [isAuthenticated])

    return {
        handleLogin
    }

}
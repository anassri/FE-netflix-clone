import { useState } from 'react'
import './pages.styles.css'
import { useAuthentication } from '../hooks/storage'

export const Login = ()=>{
    const {handleLogin} = useAuthentication()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const handleLoginWithValidation =(e)=>{
        e.preventDefault();

        if(!email){
            setError('Email is required')
        } else if(!email.includes('@')){
            setError('Please enter a valid email')
        } else if (!password){
            setError('Password is required')
        } else if (password.length <8){
            setError('Password must be greater than 8 characters')
        } else {
            setError('')
            handleLogin(email, password)
        }

    }
    // 1. compnentDidMount
    // 2. componentDidUpdate
    // 3. componentWillUnmount


    return <form className="login-container" onSubmit={handleLoginWithValidation}>
        <div className='input-container'>

            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div className='input-container'>

            <label htmlFor="password">Password</label>
            <input type="password" name="passowrd" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        </div>
            {error && <span style={{color: 'red'}}>{error}</span>}
            <button type='submit' id="login-button" >Login</button>
    </form>
}
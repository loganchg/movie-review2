import React, {useState} from 'react';
import './SignUp.css'
// import Validation from './Validation';


export default function Login() {

  const [email, setEmail] = useState('')
  const [password,setPassword] = useState('')

  async function loginUser(event) {
    event.preventDefault()
    
    const response = await fetch('http://localhost:5001/api/login',{
        method: 'POST',  
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        email,
        password,
        }),
    })

    const data = await response.json()

    if(data.user){
        localStorage.setItem('token', data.user)
        alert('Login successful')
        window.location.href = '/welcome'
    } else {
        alert('Please check your username and password')
    }

    console.log(data)
  }

  return ( 
    <div>
      <h1>Login!</h1>
      <form onSubmit={loginUser}>
        <br/>
        <input 
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
        type="email" 
        placeholder='Email'
        />
        <br/>
        <input 
        value={password} 
        onChange={(e) => setPassword(e.target.value)}
        type="password" 
        placeholder='Password'
        />
        <input type="submit" value='Login' />
      </form>
    </div>
  )
}
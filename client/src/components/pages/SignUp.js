import React, {useState} from 'react';
import './SignUp.css'


export default function SignUp() {

  const [values, setValues] = useState({
    name:'',
    email:'',
    password:'',
  })

  const handleChange= (e) => {
    setValues({      
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleFormSubmit = (e) =>{
    e.preventDefault();
  }


  return ( 
    <div className="container">
        <div className="app-wrapper">
            <div>
                <h2 className="title">Create Account</h2>
            </div>
            <form className="form-wrapper">
                <div className="name">
                    <label className="label">Name</label>
                    <input 
                      type="text" 
                      className="input" 
                      name='name' 
                      value={values.name}
                      onChange={handleChange}
                    />
                </div>
                <div className="email">
                    <label className="label">Email</label>
                    <input 
                      type="email" 
                      className="input" 
                      name='email' 
                      value={values.email}
                      onChange={handleChange} 
                    />
                </div>
                <div className="password">
                    <label className="label">Password</label>
                    <input 
                      type="password"  
                      className="input" 
                      name='password' 
                      value={values.password}
                      onChange={handleChange} 
                      />
                </div>
                <div>
                  <button className="submit" onClick={handleFormSubmit}>
                    Sign Up
                  </button>
                </div>
            </form>
        </div>
    </div>
  )
}

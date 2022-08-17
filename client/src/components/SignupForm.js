import React from 'react'

function SignupForm() {
  return (
    <div className="container">
        <div className="app-wrapper">
            <div>
                <h2 className="title">Create Account</h2>
            </div>
            <form className="form-wrapper">
                <div className="name">
                    <label className="label">Full Name</label>
                    <input type="text" className="input" />
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignupForm
import React, { useState } from 'react'

const Login = () => {
    const handleSubmit=()=>{

    }
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
  return (
    
    <div>
      <h2>Login</h2>
      <input type="text" name="username" placeholder='username' id="" />
      <input type="password" name="password" placeholder='password' id="" />
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login

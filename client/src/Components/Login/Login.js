import React, {useState, useEffect} from 'react';
import axios from 'axios';
function Title(){

  return(
    <div className="menu-container">
      <div className="title-container">
        <h2>Sign in</h2>
      </div>

    </div>
  )
}
const Message = () => {
  const [message, setMessage] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('/login');
      setMessage(result.data)
    }
    fetchData()
  },[message])
  return (
    <div className="error-div"><h3>{message.message !== undefined  ? message.message[0] : ''}</h3></div>
  )
}
function LoginForm(){
  const [password, setPasswordType] = useState('password');
  // const [message, setMessage] = useState([])
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios('/login');
  //     setMessage(result.data)
  //   }
  //   fetchData()
  // },[])

  return(
  <div className="register-container">
    <Message/>
    <div className="register-div">

      <form method="post" action="/login">
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" required/>
      <label htmlFor="password">Password</label>
      <input type={password} id="password" name="password" minLength="8" required/> <span className="show-password" onClick={()=>password === 'password' ? setPasswordType('text') : setPasswordType('password')}>Show Password</span>
      <button type="submit">Sign In</button>
      </form>

    </div>
  </div>
)
}

export default function Login(){
  return(
    <main>
      <Title/>
      <LoginForm/>
    </main>
  )
}

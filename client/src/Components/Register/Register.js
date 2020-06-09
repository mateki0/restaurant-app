import React, {useState, useEffect, useRef} from 'react';
import './register.css';
import axios from 'axios'

function Title(){

  return(
    <div className="menu-container">
      <div className="title-container">
        <h2>Create new account</h2>
      </div>

    </div>
  )
}
const Message = () => {
  const [message, setMessage] = useState([])
  const _isMounted = useRef(true);
  useEffect(() => {
    const fetchData = async () => {
      if(_isMounted.current){
        const result = await axios('/register');
        setMessage(result.data)
      }
    }
    fetchData();
  return () => {
    _isMounted.current = false;
  }
  },[message])
  return (
    <div className="error-div"><h3>{message.message !== undefined  ? message.message[0] : ''}</h3></div>
  )
}
function RegisterForm(){
  const [password, setPasswordType] = useState('password');

  return(
  <div className="register-container">
    <Message/>
    <div className="register-div">
      <form method="post" action="/register">

      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" required/>
      <label htmlFor="password">Password</label>
      <input type={password} id="password" name="password" minLength="8" required/> <span className="show-password" onClick={()=>password === 'password' ? setPasswordType('text') : setPasswordType('password')}>show password</span>
      <button type="submit">Create account</button>
      </form>
    </div>
  </div>
)
}
export default function Register(){
  return(
    <main>
      <Title/>
      <RegisterForm/>
    </main>
  )
}

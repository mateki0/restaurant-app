import React, {useState} from 'react';
import './register.css';

function Title(){

  return(
    <div className="menu-container">
      <div className="title-container">
        <h2>Create new account</h2>
      </div>

    </div>
  )
}
function RegisterForm(){
  const [password, setPasswordType] = useState('password');
  return(
  <div className="register-container">
    <div className="register-div">
      <form method="post" action="/register">
      <label for="name">Name</label>
      <input type="text" id="name" name="name"  required/>
      <label for="login">Login</label>
      <input type="text" id="login" name="login" minlength="6" required/>
      <label for="email">Email</label>
      <input type="email" id="email" name="email" required/>
      <label for="password">Password</label>
      <input type={password} id="password" name="password" minlength="8" required/> <span onClick={()=>password === 'password' ? setPasswordType('text') : setPasswordType('password')}>show password</span>
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

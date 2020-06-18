import React, { useState } from 'react';
import { Message } from './Message';
export function LoginForm() {
  const [password, setPasswordType] = useState('password');


  return (
    <div className="register-container">
      <Message />
      <div className="register-div">

        <form method="post" action="/login">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="password">Password</label>
          <input type={password} id="password" name="password" minLength="8" required /> <span className="show-password" onClick={() => password === 'password' ? setPasswordType('text') : setPasswordType('password')}>Show Password</span>
          <button type="submit">Sign In</button>
        </form>

      </div>
    </div>
  );
}

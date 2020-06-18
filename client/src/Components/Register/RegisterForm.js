import React, { useState } from 'react';
import { Message } from "./Message";
export function RegisterForm() {
  const [password, setPasswordType] = useState('password');

  return (
    <div className="register-container">
      <Message />
      <div className="register-div">
        <form method="post" action="/register">

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="password">Password</label>
          <input type={password} id="password" name="password" minLength="8" required /> <span className="show-password" onClick={() => password === 'password' ? setPasswordType('text') : setPasswordType('password')}>Show password</span>
          <button type="submit">Create account</button>
        </form>
      </div>
    </div>
  );
}

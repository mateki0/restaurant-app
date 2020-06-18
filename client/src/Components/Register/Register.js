import React from 'react';
import './register.css';
import { RegisterForm } from './RegisterForm';
import Title from '../Title';

const Register = () =>(
    <main>
      <Title value='Create new account'/>
      <RegisterForm/>
    </main>
  )

export default Register
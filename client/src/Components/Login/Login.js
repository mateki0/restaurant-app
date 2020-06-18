import React from 'react';
import Title from '../Title';
import { LoginForm } from './LoginForm';

export default function Login(){
  return(
    <main>
      <Title value='Sign In'/>
      <LoginForm/>
    </main>
  )
}

import React, { useState } from 'react';
import InputComponent from '../InputComponent';
import PassportMessage from '../PassportMessage';
import Form from './styled/Form';
import RegisterContainer from './styled/RegisterContainer';
import SubmitButton from './styled/SubmitButton';
const Register = () => {
  const [passwordType, setPasswordType] = useState('password');

  const toggleVisibility = () =>
    passwordType === 'password' ? setPasswordType('text') : setPasswordType('password');
  return (
    <RegisterContainer>
      <PassportMessage query="/register" />
      <Form method="post" action="/register">
        <InputComponent name="email" label="Email" type="email" />

        <InputComponent name="password" label="Password" type={passwordType} />
        <span onClick={toggleVisibility}>
          {passwordType === 'password' ? 'Show ' : 'Hide '}Password
        </span>
        <SubmitButton type="submit">Register</SubmitButton>
      </Form>
    </RegisterContainer>
  );
};
export default Register;

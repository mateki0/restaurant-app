import React, { useState } from 'react';
import LogoutButton from '../Header/styled/LogoutButton';
import InputComponent from '../InputComponent';
import Form from './styled/Form';
import RegisterContainer from './styled/RegisterContainer';
import SubmitButton from './styled/SubmitButton';

const Register = () => {
  const [passwordType, setPasswordType] = useState('password');

  const toggleVisibility = () =>
    passwordType === 'password' ? setPasswordType('text') : setPasswordType('password');
  return (
    <RegisterContainer>
      <Form method="post" action="/register">
        <InputComponent name="email" label="Email" type="email" />
        <InputComponent name="password" label="Password" type={passwordType} />

        <SubmitButton type="submit">Register</SubmitButton>
      </Form>
    </RegisterContainer>
  );
};
export default Register;

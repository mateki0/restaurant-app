import React from 'react';
import InputComponent from '../InputComponent';
import Form from '../Register/styled/Form';
import RegisterContainer from '../Register/styled/RegisterContainer';
import SubmitButton from '../Register/styled/SubmitButton';

const Login = () => {
  return (
    <RegisterContainer>
      <Form method="post" action="/login">
        <InputComponent name="email" label="Email" type="text" />
        <InputComponent name="password" label="Password" type="password" />
        <SubmitButton>Log In</SubmitButton>
      </Form>
    </RegisterContainer>
  );
};

export default Login;

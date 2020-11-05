import React from 'react';
import StyledMain from '../../Components/Layout/StyledMain';
import PageTitle from '../../Components/PageTitle';
import Register from '../../Components/Register';

const RegisterPage = () => {
  return (
    <StyledMain>
      <PageTitle title="Create new account" />
      <Register />
    </StyledMain>
  );
};

export default RegisterPage;

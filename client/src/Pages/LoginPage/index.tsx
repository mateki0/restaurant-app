import React from 'react';
import StyledMain from '../../Components/Layout/StyledMain';
import Login from '../../Components/Login/Login';

import PageTitle from '../../Components/PageTitle';

const LoginPage = () => {
  return (
    <StyledMain>
      <PageTitle title="Log in" />
      <Login />
    </StyledMain>
  );
};

export default LoginPage;

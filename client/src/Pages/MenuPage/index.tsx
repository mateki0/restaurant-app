import React from 'react';
import Footer from '../../Components/Footer';
import { IUser } from '../../Components/Header';
import StyledMain from '../../Components/Layout/StyledMain';
import MenuComponent from '../../Components/MenuComponent';
import PageTitle from '../../Components/PageTitle';

const MenuPage = ({ user }: IUser) => {
  return (
    <StyledMain>
      <PageTitle title="Checkout our menu below" />
      <MenuComponent user={user} />
      <Footer />
    </StyledMain>
  );
};

export default MenuPage;

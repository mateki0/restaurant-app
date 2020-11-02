import React from 'react';
import Footer from '../../Components/Footer';
import StyledMain from '../../Components/Layout/StyledMain';
import MenuComponent from '../../Components/MenuComponent';
import PageTitle from '../../Components/PageTitle';

interface IMenuPage {
  user: any;
  handleLocalAdding: any;
}
const MenuPage = ({ user, handleLocalAdding }: IMenuPage) => {
  return (
    <StyledMain>
      <PageTitle title="Checkout our menu below" />
      <MenuComponent />
      <Footer />
    </StyledMain>
  );
};

export default MenuPage;

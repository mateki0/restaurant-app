import React from 'react';
import Cart from '../../Components/Cart';
import { IUser } from '../../Components/Header';
import StyledMain from '../../Components/Layout/StyledMain';
import PageTitle from '../../Components/PageTitle';

const CartPage = ({ user }: IUser) => {
  return (
    <StyledMain>
      <PageTitle title="Cart" />
      <Cart user={user} />
    </StyledMain>
  );
};

export default CartPage;

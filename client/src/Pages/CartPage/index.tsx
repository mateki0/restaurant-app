import React, { useContext } from 'react';
import StyledMain from '../../Components/Layout/StyledMain';
import PageTitle from '../../Components/PageTitle';
import LocalCartContext from '../../Contexts/LocalCartContext';
import TotalPriceContext from '../../Contexts/TotalPriceContext';

const CartPage = () => {
  const { totalPrice } = useContext(TotalPriceContext);
  console.log(totalPrice);
  return (
    <StyledMain>
      <PageTitle title="Cart" />
    </StyledMain>
  );
};

export default CartPage;

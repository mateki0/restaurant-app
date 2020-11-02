import React, { useState } from 'react';

const TotalPriceContext = React.createContext({
  totalPrice: 0,
  setPrice: (price: any) => price,
});

export const TotalPriceProvider = (props: any) => {
  const setPrice = (price: any) => {
    setState({ ...state, totalPrice: price });
  };

  const initState = {
    totalPrice: parseFloat(window.localStorage.getItem('price')!),
    setPrice: setPrice,
  };
  const [state, setState] = useState(initState);
  return <TotalPriceContext.Provider value={state}>{props.children}</TotalPriceContext.Provider>;
};
export default TotalPriceContext;

import React, { useState } from 'react';

const LocalCartContext = React.createContext({ items: [], setItems: (item: any) => item });

export const LocalCartContextProvider = (props: any) => {
  const setItems = (item: any) => {
    setState({ ...state, items: item });
  };
  const initState = {
    items: JSON.parse(window.localStorage.getItem('cart')!),
    setItems: setItems,
  };
  const [state, setState] = useState(initState);

  return <LocalCartContext.Provider value={state}>{props.children}</LocalCartContext.Provider>;
};

export default LocalCartContext;

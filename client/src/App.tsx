import React, { useEffect, useState, useCallback, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './Components/Header';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import MenuPage from './Pages/MenuPage';
import { ModalProvider } from 'styled-react-modal';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import CartPage from './Pages/CartPage';
import CartContext, { CartContextProvider } from './Contexts/CartContext';
export interface UserProps {
  local: {
    cart: Array<any>;
    email: string;
    password: string;
  };
  id: string;
}
const App = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const state = useContext(CartContext);
  const fetchUser = useCallback(async () => {
    const result = await axios('/user');
    setUser(result.data);
  }, []);
  useEffect(() => {
    fetchUser();
    if (user) {
      const items = user.local.cart;
      state.setCart(items);
    }
  }, []);
  return (
    <Router>
      <CartContextProvider>
        {user ? <Header user={user.local} /> : <Header />}
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/about">
            <AboutPage />
          </Route>
          <Route exact path="/contact">
            <ContactPage />
          </Route>
          <Route exact path="/menu">
            <ModalProvider>{user ? <MenuPage user={user.local} /> : <MenuPage />}</ModalProvider>
          </Route>
          <Route exact path="/cart">
            <CartPage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/register">
            <RegisterPage />
          </Route>
        </Switch>
      </CartContextProvider>
    </Router>
  );
};

export default App;

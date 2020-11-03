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
import { CartContextProvider } from './Contexts/CartContext';

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
  const fetchUser = useCallback(async () => {
    const result = await axios('/user');
    setUser(result.data);
  }, []);
  useEffect(() => {
    fetchUser();
  }, []);
  console.log(user);
  return (
    <Router>
      <CartContextProvider>{user ? <Header user={user.local} /> : <Header />}</CartContextProvider>
      <Switch>
        <Route exact path="/">
          <CartContextProvider>
            <HomePage />
          </CartContextProvider>
        </Route>
        <Route exact path="/about">
          <CartContextProvider>
            <AboutPage />
          </CartContextProvider>
        </Route>
        <Route exact path="/contact">
          <CartContextProvider>
            <ContactPage />
          </CartContextProvider>
        </Route>
        <Route exact path="/menu">
          <CartContextProvider>
            <ModalProvider>{user ? <MenuPage user={user.local} /> : <MenuPage />}</ModalProvider>
          </CartContextProvider>
        </Route>
        <Route exact path="/cart">
          <CartContextProvider>
            <CartPage />
          </CartContextProvider>
        </Route>
        <Route exact path="/login">
          <CartContextProvider>
            <LoginPage />
          </CartContextProvider>
        </Route>
        <Route exact path="/register">
          <CartContextProvider>
            <RegisterPage />
          </CartContextProvider>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

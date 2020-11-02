import React, { useContext, useEffect, useState } from 'react';

import Navigation from './styled/Navigation';
import NavList from './styled/NavList';
import NavListItem from './styled/NavListItem';
import { NavLink } from 'react-router-dom';
import UserInfoContainer from './styled/UserInfoContainer';
import UserName from './styled/UserName';
import CartLink from './styled/CartLink';
import PriceSpan from './styled/PriceSpan';
import LogoutButton from './styled/LogoutButton';

import Menu from './styled/Menu';
import HamburgerContainer from './styled/HamburgerContainer';
import Hamburger from './styled/Hamburger';
import Cross from './styled/Cross';
import HamburgerSpan from './styled/HamburgerSpan';
import CrossSpan from './styled/CrossSpan';
import TotalPriceContext from '../../Contexts/TotalPriceContext';
import LocalCartContext from '../../Contexts/LocalCartContext';

const Header = () => {
  const { totalPrice } = useContext(TotalPriceContext);
  const [name, setName] = useState('Guest');
  const [isOpen, setIsOpen] = useState(false);
  const [pr, setPr] = useState();

  // useEffect(() => {
  //   if (user !== null && user !== '') {
  //     let index = user.local.email.indexOf('@');
  //     setName(user.local.email.slice(0, index));

  //     if (name.length > 19) {
  //       setName(name.slice(0, 16) + '...');
  //     }
  //   }
  // }, [user, name]);

  console.log(totalPrice);
  return (
    <header>
      <Navigation>
        <Menu isOpen={isOpen}>
          <NavList>
            <NavListItem>
              <NavLink to="/" onClick={() => setIsOpen(false)}>
                My Restaurant
              </NavLink>
            </NavListItem>
            <NavListItem>
              <NavLink
                exact
                to="/"
                activeClassName="small-link-active"
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
            </NavListItem>
            <NavListItem>
              <NavLink
                exact
                to="/about"
                activeClassName="small-link-active"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </NavLink>
            </NavListItem>

            <NavListItem>
              <NavLink
                exact
                to="/contact"
                activeClassName="small-link-active"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </NavLink>
            </NavListItem>

            <NavListItem>
              <NavLink
                exact
                to="/menu"
                activeClassName="small-link-active"
                onClick={() => setIsOpen(false)}
              >
                Menu
              </NavLink>
            </NavListItem>

            <NavListItem>
              <NavLink
                exact
                to="/register"
                activeClassName="small-link-active"
                onClick={() => setIsOpen(false)}
              >
                Register
              </NavLink>
            </NavListItem>
            <NavListItem>
              <NavLink
                exact
                to="/login"
                activeClassName="small-link-active"
                onClick={() => setIsOpen(false)}
              >
                Login
              </NavLink>
            </NavListItem>
            <NavListItem>
              <NavLink
                exact
                to="/cart"
                activeClassName="small-link-active"
                onClick={() => setIsOpen(false)}
              >
                Cart
              </NavLink>
            </NavListItem>
          </NavList>
          <UserInfoContainer>
            <UserName>Hello, {name}</UserName>
            <CartLink href="/link" onClick={() => setIsOpen(false)}>
              <PriceSpan>{totalPrice}$</PriceSpan>
            </CartLink>
            <div>
              <form method="post" action="/logout">
                <LogoutButton type="submit">Logout</LogoutButton>
              </form>
            </div>
          </UserInfoContainer>
        </Menu>
        <HamburgerContainer onClick={() => setIsOpen(!isOpen)}>
          <Hamburger isOpen={isOpen}>
            <HamburgerSpan isOpen={isOpen}></HamburgerSpan>
            <HamburgerSpan isOpen={isOpen}></HamburgerSpan>
            <HamburgerSpan isOpen={isOpen}></HamburgerSpan>
          </Hamburger>
          <Cross>
            <CrossSpan isOpen={isOpen}></CrossSpan>
            <CrossSpan isOpen={isOpen}></CrossSpan>
          </Cross>
        </HamburgerContainer>
      </Navigation>
    </header>
  );
};

export default Header;

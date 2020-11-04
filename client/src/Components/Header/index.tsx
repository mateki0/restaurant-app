import React, { useCallback, useContext, useEffect, useState } from 'react';
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
import CartContext from '../../Contexts/CartContext';

export interface IUser {
  user?: {
    cart: Array<any>;
    email: string;
    password: string;
  };
}
const Header = ({ user }: IUser) => {
  const { price } = useContext(CartContext);
  const [name, setName] = useState('Guest');
  const [isOpen, setIsOpen] = useState(false);
  const handleName = useCallback(async () => {
    if (user) {
      let index = user.email.indexOf('@');
      setName(user.email.slice(0, index));
      if (name.length > 19) {
        setName(name.slice(0, 16) + '...');
      }
    }
  }, [user]);
  useEffect(() => {
    handleName();
  }, [user]);
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
              <PriceSpan>{price === null ? 0 : price}$</PriceSpan>
            </CartLink>
            <div>
              {user ? (
                <form method="post" action="/logout">
                  <LogoutButton type="submit">Logout</LogoutButton>
                </form>
              ) : (
                <LogoutButton as="a" href="/login">
                  Login
                </LogoutButton>
              )}
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

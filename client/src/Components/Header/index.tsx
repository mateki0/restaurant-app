import React, { useEffect, useState } from 'react';

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

const Header = ({ user, price }: { user: any; price: number }) => {
  const [name, setName] = useState('Guest');
  const [isOpen, setIsOpen] = useState(true);
  useEffect(() => {
    if (user !== null && user !== '') {
      let index = user.local.email.indexOf('@');
      setName(user.local.email.slice(0, index));

      if (name.length > 19) {
        setName(name.slice(0, 16) + '...');
      }
    }
  }, [user, name]);
  return (
    <header>
      <Navigation>
        <Menu isOpen={isOpen}>
          <NavList>
            <NavListItem>
              <NavLink to="/" className="restaurant-name nav-link">
                My Restaurant
              </NavLink>
            </NavListItem>
            <NavListItem>
              <NavLink
                exact
                to="/"
                activeClassName="small-link-active"
                className="nav-link small-link"
              >
                Home
              </NavLink>
            </NavListItem>
            <NavListItem>
              <NavLink
                exact
                to="/about"
                activeClassName="small-link-active"
                className="nav-link small-link"
              >
                About Us
              </NavLink>
            </NavListItem>

            <NavListItem>
              <NavLink
                exact
                to="/contact"
                activeClassName="small-link-active"
                className="nav-link small-link"
              >
                Contact
              </NavLink>
            </NavListItem>

            <NavListItem>
              <NavLink
                exact
                to="/menu"
                activeClassName="small-link-active"
                className="nav-link small-link"
              >
                Menu
              </NavLink>
            </NavListItem>

            <NavListItem>
              <NavLink
                exact
                to="/register"
                activeClassName="small-link-active"
                className="nav-link small-link"
              >
                Register
              </NavLink>
            </NavListItem>
            <NavListItem>
              {user === null || user === '' ? (
                <NavLink
                  exact
                  to="/login"
                  activeClassName="small-link-active"
                  className="nav-link small-link"
                >
                  Login
                </NavLink>
              ) : (
                ''
              )}
            </NavListItem>
            <NavListItem>
              <NavLink
                exact
                to="/cart"
                activeClassName="small-link-active"
                className="nav-link small-link"
              >
                Cart
              </NavLink>
            </NavListItem>
          </NavList>
          <UserInfoContainer>
            <UserName>Hello, {name}</UserName>
            <CartLink href="/link">
              <PriceSpan>{price !== undefined ? price.toFixed(1) : 0}$</PriceSpan>
            </CartLink>
            <div>
              <form method="post" action="/logout">
                <LogoutButton type="submit">Logout</LogoutButton>
              </form>
            </div>
          </UserInfoContainer>
        </Menu>
      </Navigation>
    </header>
  );
};

export default Header;

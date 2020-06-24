import React from "react";
import UserHeader from "./Components/UserHeader/UserHeader";
import { NavLink } from "react-router-dom";
const Header = (props) => (
  <div className="header">
    <ul>
      <li>
        <NavLink to="/" className="restaurant-name nav-link">
          My Test Restaurant
        </NavLink>
      </li>
      <li>
        <NavLink
          exact
          to="/"
          activeClassName="small-link-active"
          className="nav-link small-link"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          exact
          to="/about"
          activeClassName="small-link-active"
          className="nav-link small-link"
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          exact
          to="/contact"
          activeClassName="small-link-active"
          className="nav-link small-link"
        >
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink
          exact
          to="/menu"
          activeClassName="small-link-active"
          className="nav-link small-link"
        >
          Menu
        </NavLink>
      </li>
      <li>
        <NavLink
          exact
          to="/register"
          activeClassName="small-link-active"
          className="nav-link small-link"
        >
          Register
        </NavLink>
      </li>
      {props.user === null || props.user === "" ? (
        <li>
          <NavLink
            exact
            to="/login"
            activeClassName="small-link-active"
            className="nav-link small-link"
          >
            Login
          </NavLink>
        </li>
      ) : (
        ""
      )}
      <li>
        <NavLink
          exact
          to="/cart"
          activeClassName="small-link-active"
          className="nav-link small-link"
        >
          Cart
        </NavLink>
      </li>
    </ul>
    <UserHeader price={props.price} user={props.user} />
  </div>
);
export default Header;

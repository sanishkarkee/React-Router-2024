import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function NavBar() {
  // Either CSS bata or yesari Active class lai styling garna sakinxa
  const navLinkStyles = ({ isActive }) => {
    return {
      textDecoration: isActive && 'none',
      fontWeight: isActive && 'bold',
      backgroundColor: isActive && '#41f01e',
      padding: isActive && '5px',
      borderRadius: isActive && '15px',
      color: isActive && 'rgb(6, 6, 53)',
    };
  };
  return (
    <>
      <nav className='primary-nav'>
        {/* <Link to='/'>Home</Link>
        <Link to='/about'>About</Link> */}

        {/* Navlink: it determines wether the link is ACTIVE or not */}
        <NavLink style={navLinkStyles} to='/'>
          Home
        </NavLink>

        <NavLink style={navLinkStyles} to='/about'>
          About
        </NavLink>

        <NavLink style={navLinkStyles} to='/products'>
          Products
        </NavLink>

        <NavLink style={navLinkStyles} to='/users'>
          Users
        </NavLink>
      </nav>
    </>
  );
}

export default NavBar;

/* NOTE:

  <Link> & <NavLink> both are used to create navigational links in a React application. They help manage navigation and routing within a single-page application (SPA).
  # <Link>: Purpose: Link is used to navigate to different routes in your application without reloading the page.
  # <NavLink>: Used when you want to highlight the currently active link without reloading the page.

  */

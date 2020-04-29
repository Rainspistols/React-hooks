import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className='navbar navbar-dark bg-primary navbar-expand-lg'>
      <div className='navbar-brand'>Github Search</div>
      <ul className='navbar-nav'>
        <li className='nav-item'>
          <NavLink exact className='nav-link' to='/React-hooks/'>
            Main
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink className='nav-link' to='/React-hooks/about'>
            Infromation
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

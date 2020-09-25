import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavStyled } from './style';

const Nav = () => {
  return (
    <NavStyled>
      <NavLink to="/" end>
        Produtos
      </NavLink>
    </NavStyled>
  );
};

export default Nav;

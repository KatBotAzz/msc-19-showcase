import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Logo from './logo';

const StyledNav = styled.nav`
  background: ${(props) => props.theme.blue};
  color: ${(props) => props.theme.white};
  z-index: 15;
`;

const Nav = () => (
  <StyledNav className='d-flex justify-content-between align-items-center position-fixed w-100 fixed-top p-2 p-md-3'>
    <Link to='/' className='d-none d-sm-block'>
      <Logo />
    </Link>

    <div>MSc Creative Computing Graduates</div>
  </StyledNav>
);

export default Nav;

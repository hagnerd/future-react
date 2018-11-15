import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

import { rhythm } from '../ui/typography';

const Wrapper = styled.div`
  margin: ${rhythm(2)} auto;
  max-width: 700px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Ul = styled.ul`
  display: flex;
  width: 50%;
  justify-content: flex-end;
  list-style: none;
  align-items: center;
  height: 100%;
  margin: 0;
`;

const SiteTitleLink = styled(Link)`
  text-decoration: none;
  color: #d8deea;
  transition: all 300ms ease-in-out;

  align-self: center;

  &:hover {
    color: #eceff5;
  }
`;

const Menu = () => (
  <Nav>
    <SiteTitleLink to="/">
      <h3>F.U.T.R.</h3>
    </SiteTitleLink>

    <Ul />
  </Nav>
);

export default ({ children }) => (
  <Wrapper>
    <Menu />
    <hr />
    {children}
  </Wrapper>
);

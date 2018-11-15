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

const Li = styled.li`
  padding: 10px 10px;
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

const SiteLink = styled(Link)`
  background-color: #5e80b0;
  color: #2e3441;
  transition: all 300ms ease-in-out;
  padding: 10px 15px;
  text-decoration: none;
  border-radius: 2px;

  &:hover {
    background-color: #2e3441;
    color: #5e80b0;
  }
`;

const Menu = () => (
  <Nav>
    <SiteTitleLink to="/">
      <h3>F.U.T.R.</h3>
    </SiteTitleLink>

    <Ul>
      <Li>
        <SiteLink to="/missions">Missions</SiteLink>
      </Li>
      <Li>
        <SiteLink to="/examples">Examples</SiteLink>
      </Li>
    </Ul>
  </Nav>
);

export default ({ children }) => (
  <Wrapper>
    <Menu />
    <hr />
    {children}
  </Wrapper>
);

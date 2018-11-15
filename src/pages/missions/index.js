import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

import { rhythm } from '../../ui/typography';

/* Missions Pages */

/* Styles */
const Navigation = styled.ul`
  list-style: none;
`;

const Li = styled.li`
  transition: all 300ms ease-in-out;

  &:hover {
    padding-left: ${rhythm(0.5)};
  }
`;

const MissionsHome = () => (
  <React.Fragment>
    <h1>MISSION LOG</h1>

    <Navigation>
      <Li>{/*<Link></Link> Sub Pages */}</Li>
    </Navigation>
  </React.Fragment>
);

const MissionsSubPages = [{ Component: MissionsHome, path: '/' }];

export { MissionsSubPages };

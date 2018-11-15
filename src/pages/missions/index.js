import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

import { rhythm } from '../../ui/typography';

/* Missions Pages */
import UseState from './01-use-state';
import ExtractHook from './02-extract-hook';
import Mission3 from './03-use-reducer';
import Mission4 from './04-use-context';
import Mission5 from './05-use-effect';
import Mission6 from './06-use-ref';

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
      <Li>
        <Link to="/missions/01-use-state">01 - Use State</Link>
      </Li>
      <Li>
        <Link to="/missions/02-extract-hook">02 - Extract Hook</Link>
      </Li>
      <Li>
        <Link to="/missions/03-use-reducer">03 - Use Reducer</Link>
      </Li>
      <Li>
        <Link to="/missions/04-use-context">04 - Use Context</Link>
      </Li>
      <Li>
        <Link to="/missions/05-use-context">05 - Use Effect</Link>
      </Li>
      <Li>
        <Link to="/missions/06-use-context">06 - Use Ref</Link>
      </Li>
    </Navigation>
  </React.Fragment>
);

const MissionsSubPages = [
  { Component: MissionsHome, path: '/' },
  { Component: UseState, path: '/01-use-state' },
  { Component: ExtractHook, path: '/02-extract-hook' },
  { Component: Mission3, path: '/03-use-reducer' },
  { Component: Mission4, path: '/04-use-context' },
  { Component: Mission5, path: '/05-use-effect' },
  { Component: Mission6, path: '/06-use-ref' },
];

export { MissionsSubPages };

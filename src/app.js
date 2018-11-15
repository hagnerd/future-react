import React from 'react';
import { Router } from '@reach/router';
import styled from 'styled-components';

import Layout from './templates/default';

import { rhythm } from './ui/typography';
import GlobalStyles from './ui/global-styles';

/* Pages */
import Home from './pages/home';
import { MissionsSubPages } from './pages/missions';
import { ExamplesSubPages } from './pages/examples';

const Wrapper = styled.div`
  margin: ${rhythm(2)} auto;
  max-width: 700px;
`;

export default () => (
  <React.Fragment>
    <GlobalStyles />
    <Wrapper>
      <Router>
        <Home path="/" />
        <Layout path="/missions">
          {MissionsSubPages.map(Page => (
            <Page.Component key={Page.path} path={Page.path} />
          ))}
        </Layout>
        <Layout path="/examples">
          {ExamplesSubPages.map(Page => (
            <Page.Component key={Page.path} path={Page.path} />
          ))}
        </Layout>
      </Router>
    </Wrapper>
  </React.Fragment>
);

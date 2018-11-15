import React from 'react';
import { Router } from '@reach/router';
import styled from 'styled-components';

import Layout from './templates/default';

import { rhythm } from './ui/typography';
import GlobalStyles from './ui/global-styles';
import { useLocalStorage } from './utils';

/* Pages */
import Home from './pages/home';
import Orientation from './pages/orientation';
import SuperSecretAgentTest from './pages/super-secret-agent-test';
import { MissionsSubPages } from './pages/missions';
import { ExamplesSubPages } from './pages/examples';

const Wrapper = styled.div`
  margin: ${rhythm(2)} auto;
  max-width: 700px;
`;

export const SecretContext = React.createContext();

export default () => {
  const [isSecretAgent, setSecretAgentStatus] = useLocalStorage(
    'isSecretAgent',
    false,
  );

  const contextValue = React.useMemo(
    () => ({ isSecretAgent, setSecretAgentStatus }),
    [isSecretAgent],
  );

  return (
    <React.Fragment>
      <SecretContext.Provider value={contextValue}>
        <GlobalStyles />
        <Wrapper>
          <Router>
            <Home context={SecretContext} path="/" />
            <Orientation path="/orientation" />
            <SuperSecretAgentTest
              context={SecretContext}
              path="/super-secret-agent-test"
            />
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
      </SecretContext.Provider>
    </React.Fragment>
  );
};

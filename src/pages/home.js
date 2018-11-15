import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

import { SecretContext } from '../app';
import { Button, FlexSection } from '../ui';
import { MindWipeButton } from '../components';

const Title = styled.h1`
  text-align: center;
  font-size: 63px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100vh;
`;

const Centered = styled.p`
  text-align: center;
`;

function SecretAgentHomePage() {
  return (
    <Container>
      <Title>F.U.T.R.</Title>
      <Centered>
        Welcome to F.U.T.R. Learn all of the newest features of React by
        traveling forward in time.
      </Centered>

      <FlexSection>
        <Button as={Link} to="/missions">
          Secret Missions
        </Button>
        <Button as={Link} to="/examples">
          Explore Examples
        </Button>
        <MindWipeButton context={SecretContext} />
      </FlexSection>
    </Container>
  );
}

function NormalHomePage() {
  return (
    <Container>
      <Title>F.U.T.R.</Title>
      <Centered>
        Some boring agency you probably don't care about. Now get off my lawn.
      </Centered>

      <FlexSection>
        <Button as={Link} to="/super-secret-agent-test">
          Find Out More Anyways
        </Button>
      </FlexSection>
    </Container>
  );
}

export default ({ context }) => {
  const { isSecretAgent } = React.useContext(context);

  return isSecretAgent ? <SecretAgentHomePage /> : <NormalHomePage />;
};

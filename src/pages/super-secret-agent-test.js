import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

import Layout from '../templates/hidden-nav';
import { Button, FlexSection } from '../ui';
import { MindWipeButton } from '../components';
import { useToggle } from '../utils';

const QuestionWrapper = styled.div`
  margin: 1rem auto;
  max-width: 700px;
  display: flex;
  flex-direction: column;
`;

const Question = styled.h4`
  text-align: center;
`;

const Row = styled.div`
  margin: 0 auto;
  max-width: 700px;
  display: flex;
`;

export default ({ context }) => {
  const { isSecretAgent, setSecretAgentStatus } = React.useContext(context);

  const { on: q1, manualToggle: manualToggleQ1 } = useToggle();
  const { on: q2, manualToggle: manualToggleQ2 } = useToggle();
  const { on: q3, manualToggle: manualToggleQ3 } = useToggle();

  React.useEffect(
    () => {
      if (q1 && q2 && q3) {
        setSecretAgentStatus(true);
      }
    },
    [q1, q2, q3],
  );

  return (
    <Layout>
      <h1 style={{ textAlign: 'center' }}>
        {!isSecretAgent ? 'Learn More' : 'Welcome, Secret Agent in Training'}
      </h1>
      <QuestionWrapper>
        <Question>Do you like React?</Question>

        <Row>
          <Button onClick={() => manualToggleQ1(true)}>Yes</Button>
          <Button onClick={() => manualToggleQ1(false)}>No</Button>
        </Row>
      </QuestionWrapper>
      {q1 && (
        <QuestionWrapper>
          <Question>Do you have an open mind?</Question>
          <Row>
            <Button onClick={() => manualToggleQ2(true)}>Yes</Button>
            <Button onClick={() => manualToggleQ2(false)}>No</Button>
          </Row>
        </QuestionWrapper>
      )}
      {q1 && q2 && (
        <QuestionWrapper>
          <Question>
            Do you have friends or family that will miss you if you somehow end
            up trapped in the future?
          </Question>
          <Row>
            <Button onClick={() => manualToggleQ3(false)}>Yes</Button>
            <Button onClick={() => manualToggleQ3(true)}>No</Button>
          </Row>
        </QuestionWrapper>
      )}

      {isSecretAgent && (
        <FlexSection>
          <Button as={Link} to="/orientation">
            Join the F.U.T.R.
          </Button>
          <MindWipeButton />
        </FlexSection>
      )}
    </Layout>
  );
};
